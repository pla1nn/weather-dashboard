import { CardItem } from "../CardItem/CardItem"
import { List } from "./CardList.styled"
import { useState, useEffect } from "react"
import { fetchWeather, fetchLocation } from "components/services/weatherApi"

export const CardList = () => {
    return (
        <List>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
        </List>
    )
}