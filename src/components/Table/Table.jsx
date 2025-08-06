// import { Item, Text, Image, List, TableSection, Title, TableBox } from './Table.styled';

// export const Table = ({ daily }) => {
//   <TableSection>
//     <Title>8-day forecast</Title>
//     <List>
//       {daily.list.map((day, id) => (
//         <Item key={id}>
//           <Text>
//             {new Date(day.dt * 1000).toLocaleDateString('en-US', {
//               weekday: 'short',
//               month: 'short',
//               day: 'numeric',
//             })}
//           </Text>
//           <TableBox>
//             <Image
//               src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
//               alt={day.weather[0].description}
//             />
//             <Text>
//               {Math.round(day.temp.max)}°/{Math.round(day.temp.min)}°C
//             </Text>
//           </TableBox>
//           <Text>{day.weather[0].description}</Text>
//         </Item>
//       ))}
//     </List>
//   </TableSection>;
// };