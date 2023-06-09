import { AxiosError } from 'axios';

import Api from '../../clients/api/Api';

import { RequestError } from '../../domain/Request';
import { NewTransactionParams, TransactionValues } from '../../domain/Transaction';

async function createTransaction({
  description,
  amount,
  type,
  categoryId,
}: NewTransactionParams): Promise<TransactionValues> {
  return Api.post({
    url: '/transaction',
    body: {
      description,
      amount,
      type,
      categoryId,
    },
  })
    .then(response => response.data)
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
}

const getTransactions = async (): Promise<TransactionValues[]> => {
  return Api.get({ url: '/transaction' })
    .then(response => response.data)
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

const TransactionService = {
  createTransaction,
  getTransactions,
};

export default TransactionService;
