import { CardList } from './Cards/CardList/CardList';
import Container from './Container/Container';
import { Header } from './Header/Header';

import { Pets } from './Pets/Pets';

export const App = () => {
  return (
    <Container>
      <Header />

      <CardList></CardList>
      <Pets></Pets>
    </Container>
  );
};
