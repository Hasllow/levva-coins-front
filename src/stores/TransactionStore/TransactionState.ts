import { TransactionValues } from '../../domain/Transaction';

export interface TransactionState {
  isLoading: boolean;
  transactions: TransactionValues[];
  hasError: boolean;
  errorMessage: string;
}
