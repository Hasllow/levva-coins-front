import { createStore } from 'effector';

import { TransactionState } from './TransactionState';

import {
  loadCreateTransactionDone,
  loadTransaction,
  loadTransactionDone,
  loadTransactionFail,
} from './TransactionEvents';

const initialState: TransactionState = {
  isLoading: false,
  transactions: [],
  hasError: false,
  errorMessage: '',
};

const TransactionStore = createStore<TransactionState>(initialState)
  .on(loadTransaction, state => ({
    ...state,
    isLoading: true,
    hasError: false,
    errorMessage: '',
  }))
  .on(loadCreateTransactionDone, state => ({
    ...state,
    isLoading: false,
    hasError: false,
    errorMessage: '',
  }))
  .on(loadTransactionDone, (_, data) => ({
    isLoading: false,
    transactions: data,
    hasError: false,
    errorMessage: '',
  }))
  .on(loadTransactionFail, (state, data) => ({
    ...state,
    isLoading: false,
    hasError: data.hasError,
    errorMessage: data.message,
  }));

export default TransactionStore;