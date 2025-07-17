import { ControlsBox, DateContainer, DateText, Degrees, Delete, ForecastBtn, Item, Image, ControlsContainer, Like, LocationContainer, LocationText, Reload, SeeMore, Time } from "./CardItem.styled"

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
            <Image src="./sun.png" alt="sun" />
            <Degrees>22℃</Degrees>
            <ControlsContainer>
                <ControlsBox>
                    <Reload type="button">C</Reload>
                    <Like type="button">{"<3"}</Like>
                </ControlsBox>
                <SeeMore type="button">See more</SeeMore>
                <Delete type="button">Ш</Delete>
            </ControlsContainer>
        </Item>
    )
}