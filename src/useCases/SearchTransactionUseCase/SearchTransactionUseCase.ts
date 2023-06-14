import { RequestError } from '../../domain/Request';
import { TransactionValues } from '../../domain/Transaction';
import TransactionService from '../../services/TransactionService/TransactionService';
import {
  loadSearchTransaction,
  loadSearchTransactionDone,
  loadSearchTransactionFail,
} from '../../stores/TransactionStore/TransactionEvents';

interface SearchParam {
  search: string;
}

const execute = async ({ search }: SearchParam): Promise<void> => {
  loadSearchTransaction();

  return TransactionService.searchTransaction(search)
    .then((transactions: TransactionValues[]) => {
      loadSearchTransactionDone(transactions);
    })
    .catch(({ hasError, message }: RequestError) => {
      loadSearchTransactionFail({ hasError, message });
      throw new Error();
    });
};

const SearchTransactionsUseCase = {
  execute,
};

export default SearchTransactionsUseCase;
