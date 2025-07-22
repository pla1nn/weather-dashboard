import { ControlsBox, DateContainer, DateText, Degrees, Delete, ForecastBtn, Item, Image, ControlsContainer, Like, LocationContainer, LocationText, Reload, SeeMore, Time } from "./CardItem.styled"
import sun from './imgs/sun.png';
import bin from './imgs/bin.svg';
import heart from './imgs/heart.svg';
import reload from './imgs/reload.svg';

export const CardItem = () => {
    return (
        <Item>
            <LocationContainer>
                <LocationText>Prague</LocationText>
                <LocationText>Czech Republic</LocationText>
            </LocationContainer>
            <Time>14:00</Time>
            <ForecastBtn type="button">Hourly forecast</ForecastBtn>
            <DateContainer>
                <DateText>13.10.2023</DateText>
                <DateText>Friday</DateText>
            </DateContainer>
            <Image src={sun} alt={''} />
            <Degrees>22°C</Degrees>
            <ControlsContainer>
                <ControlsBox>
                    <Reload type="button"><img src={reload} alt="reload" /></Reload>
                    <Like type="button"><img src={heart} alt="like" /></Like>
                </ControlsBox>
                <SeeMore type="button">See more</SeeMore>
                <Delete type="button"><img src={bin} alt="delete" /></Delete>
            </ControlsContainer>
        </Item>
    )
}