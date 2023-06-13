import { RequestError } from '../../domain/Request';
import { TransactionValues } from '../../domain/Transaction';
import TransactionService from '../../services/TransactionService/TransactionService';
import {
  loadTransaction,
  loadTransactionDone,
  loadTransactionFail,
} from '../../stores/TransactionStore/TransactionEvents';

interface SearchParam {
  search: string;
}

const execute = async ({ search }: SearchParam): Promise<void> => {
  loadTransaction();

  return TransactionService.searchTransaction(search)
    .then((transactions: TransactionValues[]) => {
      loadTransactionDone(transactions);
    })
    .catch(({ hasError, message }: RequestError) => {
      loadTransactionFail({ hasError, message });
      throw new Error();
    });
};

const SearchTransactionsUseCase = {
  execute,
};

export default SearchTransactionsUseCase;
