import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';
import { HomeWrapper } from './styles';

export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Summary />

      <SearchForm />
    </HomeWrapper>
  );
};
