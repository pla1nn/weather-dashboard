import { CardItem } from '../CardItem/CardItem';
import { List } from './CardList.styled';

export const CardList = ({ cities, onDelete, onReload, seeMore, seeHourly, seeWeekly }) => {
  return (
    <List>
      {cities.map(({ weather }) => (
        <CardItem
          key={weather.id}
          weather={weather}
          onDelete={() => onDelete(weather.id)}
          onReload={() => onReload(weather.name)}
          seeMore={() => seeMore(weather.id)}
          seeHourly={() => seeHourly(weather.id)}
          seeWeekly={() => seeWeekly(weather.id)}
        ></CardItem>
      ))}
    </List>
  );
};
