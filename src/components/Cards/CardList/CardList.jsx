import { CardItem } from "../CardItem/CardItem"
import { List } from "./CardList.styled"

export const CardList = ({weather}) => {
    return (
        <List>
            <CardItem weather={weather}></CardItem>
        </List>
    )
}
