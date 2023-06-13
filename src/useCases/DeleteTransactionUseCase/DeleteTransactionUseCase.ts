import { RequestError } from '../../domain/Request';
import TransactionService from '../../services/TransactionService/TransactionService';
import {
  loadDeleteTransactionDone,
  loadTransaction,
  loadTransactionFail,
} from '../../stores/TransactionStore/TransactionEvents';

const execute = async (id: string): Promise<void> => {
  loadTransaction();

  return TransactionService.deleteTransaction(id)
    .then(id => {
      loadDeleteTransactionDone(id);
    })
    .catch(({ hasError, message }: RequestError) => {
      loadTransactionFail({ hasError, message });
    });
};

const DeleteTransactionUseCase = {
  execute,
};

export default DeleteTransactionUseCase;
