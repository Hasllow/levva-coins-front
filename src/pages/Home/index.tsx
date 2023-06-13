import { useEffect } from 'react';
import { useStore } from 'effector-react';

import TransactionStore from '../../stores/TransactionStore/TransactionStore';
import GetTransactionsUseCase from '../../useCases/GetTransactionsUseCase/GetTransactionsUseCase';

import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';
import {
  HomeWrapper,
  PriceHighlight,
  TransactionTable,
  TransactionsContainer,
  TransactionsTableEmpty,
} from './styles';

import { DeleteModal } from '../../components/Header/DeleteModal';

export const Home = () => {
  const { isLoading, transactions } = useStore(TransactionStore);

  const money = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const date = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' });

  useEffect(() => {
    GetTransactionsUseCase.execute();
  }, []);

  return (
    <HomeWrapper>
      <Header />
      <Summary />

      <SearchForm />

      <TransactionsContainer>
        <TransactionTable>
          <thead>
            <tr>
              <td>Descrição</td>
              <td>Preço</td>
              <td>Categoria</td>
              <td>Data</td>
              <td>Excluir</td>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 &&
              transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type === 0 ? 'income' : 'outcome'}>
                      {money.format(transaction.amount)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category.description}</td>
                  <td>{date.format(transaction.createdAt)}</td>
                  <td>
                    <DeleteModal id={transaction.id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </TransactionTable>
        {!isLoading && transactions.length === 0 && (
          <TransactionsTableEmpty>
            Adicione uma categoria e a sua primeira transação :)
          </TransactionsTableEmpty>
        )}
      </TransactionsContainer>
    </HomeWrapper>
  );
};
