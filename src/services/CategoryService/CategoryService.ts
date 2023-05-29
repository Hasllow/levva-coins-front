import { AxiosError } from 'axios';

import Api from '../../clients/api/Api';

import { NewCategoryParams, CategoryValues } from '../../domain/Category';
import { RequestError } from '../../domain/Request';

const createCategory = async ({ description }: NewCategoryParams): Promise<CategoryValues> => {
  return Api.post({ url: '/category', body: { description } })
    .then(response => response.data)
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

const getCategories = async (): Promise<CategoryValues[]> => {
  return Api.get({ url: '/category' })
    .then(response => response.data)
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

export const CategoryService = {
  createCategory,
  getCategories,
};
