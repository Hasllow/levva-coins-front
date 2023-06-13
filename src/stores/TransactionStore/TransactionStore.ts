import { createStore } from 'effector';

import { TransactionState } from './TransactionState';

import {
  loadCreateTransactionDone,
  loadDeleteTransactionDone,
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
  .on(loadCreateTransactionDone, (state, data) => ({
    ...state,
    isLoading: false,
    transactions: [data, ...state.transactions],
    hasError: false,
    errorMessage: '',
  }))
  .on(loadDeleteTransactionDone, (state, id) => ({
    ...state,
    isLoading: false,
    hasError: false,
    transactions: state.transactions.filter(transaction => transaction.id !== id),
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
