import { RequestError } from '../../domain/Request';
import { TransactionValues } from '../../domain/Transaction';
import TransactionService from '../../services/TransactionService/TransactionService';
import {
  loadTransaction,
  loadTransactionDone,
  loadTransactionFail,
} from '../../stores/TransactionStore/TransactionEvents';

const execute = async (): Promise<void> => {
  loadTransaction();

  return TransactionService.getTransactions()
    .then((transactions: TransactionValues[]) => {
      loadTransactionDone(transactions);
    })
    .catch(({ hasError, message }: RequestError) => {
      loadTransactionFail({ hasError, message });
      throw new Error();
    });
};

const GetTransactionsUseCase = {
  execute,
};

export default GetTransactionsUseCase;
