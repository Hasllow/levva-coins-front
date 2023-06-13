import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useStore } from 'effector-react';

import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';
import TransactionStore from '../../stores/TransactionStore/TransactionStore';
import { FormError, FormInput } from '../../styles/global';
import SearchTransactionsUseCase from '../../useCases/SearchTransactionUseCase/SearchTransactionUseCase';

interface FormProps {
  search: string;
}
const formSchema = yup
  .object({
    search: yup.string().required('O conteúdo da pesquisa é obrigatório.'),
  })
  .required();

export const SearchForm = () => {
  const { isLoading, hasError, errorMessage } = useStore(TransactionStore);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(formSchema),
  });

  const handleSearchTransaction = async ({ search }: FormProps) => {
    SearchTransactionsUseCase.execute({ search }).finally(() => reset());
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <FormInput {...register('search')} placeholder="Busque por transações" />
      {errors.search && <FormError>{errors.search.message}</FormError>}

      {hasError && <FormError>{errorMessage}</FormError>}

      <button type="submit">
        {isLoading ? (
          'Carregando...'
        ) : (
          <>
            <MagnifyingGlass size={20} />
            Buscar
          </>
        )}
      </button>
    </SearchFormContainer>
  );
};
