import { Condition, Item, List, Text, Image } from "./Stats.styled"
import humidity from './imgs/humiditi.png'
import pressure from './imgs/pressure.png'
import temp from './imgs/temp.png'
import visibility from './imgs/visibility.png'
import wind from './imgs/wind.png'

export const Stats = () => {
    return (
        <List>
            <Item>
                <Text>Feels like</Text>
                <Condition>29°C</Condition>
                <Image src={temp} alt="" />
            </Item>
            <Item>
                <Text>Min °C</Text>
                <Condition>29°C</Condition>
                <Text>Max °C</Text>
                <Condition>29°C</Condition>
            </Item>
            <Item>
                <Text>Humidity</Text>
                <Condition>29</Condition>
                <Image src={humidity} alt="" />
            </Item>
            <Item>
                <Text>Pressure</Text>
                <Condition>29</Condition>
                <Image src={pressure} alt="" />
            </Item>
            <Item>
                <Text>Wind speed</Text>
                <Condition>29</Condition>
                <Image src={wind} alt="" />
            </Item>
            <Item>
                <Text>Visibility</Text>
                <Condition>29</Condition>
                <Image src={visibility} alt="" />
            </Item>
        </List>
    )
}