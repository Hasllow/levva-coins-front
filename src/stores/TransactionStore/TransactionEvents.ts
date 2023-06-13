import { createEvent } from 'effector';
import { TransactionValues } from '../../domain/Transaction';
import { RequestError } from '../../domain/Request';

export const loadTransaction = createEvent('loadTransaction');
export const loadCreateTransactionDone = createEvent<TransactionValues>(
  'loadCreateTransactionDone',
);
export const loadDeleteTransactionDone = createEvent<string>('loadDeleteTransactionDone');
export const loadTransactionDone = createEvent<TransactionValues[]>('loadTransactionDone');
export const loadTransactionFail = createEvent<RequestError>('loadTransactionFail');
