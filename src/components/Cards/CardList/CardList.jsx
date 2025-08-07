import { CardItem } from "../CardItem/CardItem"
import { List } from "./CardList.styled"

export const CardList = ({cities, onDelete}) => {
    return (
        <List>
            {cities.map(({weather}) => (
                <CardItem key={weather.id} weather={weather} onDelete={() => onDelete(weather.id)}></CardItem>
            ))}
        </List>
    )
}
