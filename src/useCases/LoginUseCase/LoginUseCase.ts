import { LoginParams, LoginValues } from '../../domain/Login';
import { RequestError } from '../../domain/Request';
import { LoginService } from '../../services/LoginService/LoginService';

const execute = async ({ email, password }: LoginParams): Promise<void> => {
  const errorCallback = ({ hasError, message }: RequestError) => {};

  return LoginService.authenticateUser({ email, password }).then((user: LoginValues) => {
    window.localStorage.setItem('user', JSON.stringify(user));
  });
};

const loginUseCase = {
  execute,
};

export default loginUseCase;
