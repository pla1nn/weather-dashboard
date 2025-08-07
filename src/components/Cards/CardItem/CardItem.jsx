import { ControlsBox, DateContainer, DateText, Degrees, Delete, ForecastBtn, Item, Image, ControlsContainer, Like, LocationContainer, LocationText, Reload, SeeMore, Time, BtnContainer } from "./CardItem.styled"
import bin from './imgs/bin.svg';
import heart from './imgs/heart.svg';
import reload from './imgs/reload.svg';

export const CardItem = ({weather: {name, sys: {country}, main: {temp}, dt, weather: weatherDetails}, onDelete}) => {
    const date = new Date(dt * 1000)
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.toLocaleDateString('en-US', {weekday: 'long'})
    const dateText = date.toLocaleDateString()
    
    const iconUrl = `https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`

    const countryName = new Intl.DisplayNames(['en'], {type: 'region'}).of(country);
    
    return (
        <Item>
            <LocationContainer>
                <LocationText>{name}</LocationText>
                <LocationText>{countryName}</LocationText>
            </LocationContainer>
            <Time>{hours}:{minutes}</Time>
            <BtnContainer>
            <ForecastBtn type="button">Hourly forecast</ForecastBtn>
            <ForecastBtn type="button">Weekly forecast</ForecastBtn>
            </BtnContainer>
            <DateContainer>
                <DateText>{dateText}</DateText>
                <DateText>{day}</DateText>
            </DateContainer>
            <Image src={iconUrl} alt={weatherDetails[0]} /> 
            <Degrees>{Math.round(temp)}°C</Degrees>
            <ControlsContainer>
                <ControlsBox>
                    <Reload type="button"><img src={reload} alt="reload" /></Reload>
                    <Like type="button"><img src={heart} alt="like" /></Like>
                </ControlsBox>
                <SeeMore type="button">See more</SeeMore>
                <Delete type="button"><img src={bin} alt="delete" onClick={onDelete} /></Delete>
            </ControlsContainer>
        </Item>
    )
}