import { TransactionValues } from '../../domain/Transaction';

export interface TransactionState {
  isLoading: boolean;
  isSearchLoading: boolean;
  transactions: TransactionValues[];
  hasError: boolean;
  errorMessage: string;
  hasSearchError: boolean;
  errorSearchMessage: string;
}
