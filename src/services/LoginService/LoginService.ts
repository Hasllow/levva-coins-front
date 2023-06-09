import { AxiosError } from 'axios';

import Api from '../../clients/api/Api';
import { LoginParams, LoginValues } from '../../domain/Login';
import { RequestError } from '../../domain/Request';

const authenticateUser = async ({ email, password }: LoginParams): Promise<LoginValues> => {
  return Api.post({ url: '/user/auth', body: { email, password } })
    .then(response => response.data)
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

export const LoginService = {
  authenticateUser,
};
