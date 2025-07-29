import { Condition, Item, List, Text, Image } from "./Stats.styled"
import humidityImg from './imgs/humiditi.png'
import pressureImg from './imgs/pressure.png'
import tempImg from './imgs/temp.png'
import visibilityImg from './imgs/visibility.png'
import windImg from './imgs/wind.png'

export const Stats = ({weather: {main: {feels_like, pressure, humidity, temp_min, temp_max}, visibility, wind: {speed}}}) => {
    return (
        <List>
            <Item>
                <Text>Feels like</Text>
                <Condition>{(parseFloat(feels_like.toFixed(1)))}°C</Condition>
                <Image src={tempImg} alt="" />
            </Item>
            <Item>
                <Text>Min °C</Text>
                <Condition>{parseFloat(temp_min.toFixed(1))}°C</Condition>
                <Text>Max °C</Text>
                <Condition>{parseFloat(temp_max.toFixed(1))}°C</Condition>
            </Item>
            <Item>
                <Text>Humidity</Text>
                <Condition>{Math.round(humidity)}%</Condition>
                <Image src={humidityImg} alt="" />
            </Item>
            <Item>
                <Text>Pressure</Text>
                <Condition>{Math.round(pressure)} hPa</Condition>
                <Image src={pressureImg} alt="" />
            </Item>
            <Item>
                <Text>Wind speed</Text>
                <Condition>{parseFloat(speed.toFixed(2))} m/s</Condition>
                <Image src={windImg} alt="" />
            </Item>
            <Item>
                <Text>Visibility</Text>
                <Condition>{Math.round(visibility)}</Condition>
                <Image src={visibilityImg} alt="" />
            </Item>
        </List>
    )
}