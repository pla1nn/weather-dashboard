import { CardItem } from "../CardItem/CardItem"
import { List } from "./CardList.styled"
import { useState } from "react"
import { getWeather, getLocation } from "components/services/weatherApi"

export const CardList = ({weather}) => {
    return (
        <List>
            <CardItem weather={weather}></CardItem>
        </List>
    )
}