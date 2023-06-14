import { createStore } from 'effector';

import { TransactionState } from './TransactionState';

import {
  loadCreateTransactionDone,
  loadDeleteTransactionDone,
  loadSearchTransaction,
  loadSearchTransactionDone,
  loadSearchTransactionFail,
  loadTransaction,
  loadTransactionDone,
  loadTransactionFail,
} from './TransactionEvents';

const initialState: TransactionState = {
  isLoading: false,
  isSearchLoading: false,
  transactions: [],
  hasError: false,
  errorMessage: '',
  hasSearchError: false,
  errorSearchMessage: '',
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
  .on(loadTransactionDone, (state, data) => ({
    ...state,
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
  }))
  .on(loadSearchTransaction, state => ({
    ...state,
    isSearchLoading: true,
    hasSearchError: false,
    errorSearchMessage: '',
  }))
  .on(loadSearchTransactionDone, (state, data) => ({
    ...state,
    isSearchLoading: false,
    transactions: data,
    hasSearchError: false,
    errorSearchMessage: '',
  }))
  .on(loadSearchTransactionFail, (state, data) => ({
    ...state,
    isSearchLoading: false,
    hasSearchError: data.hasError,
    errorSearchMessage: data.message,
  }));

export default TransactionStore;
