import { LoginParams, LoginValues } from '../../domain/Login';
import { RequestError } from '../../domain/Request';
import { LoginService } from '../../services/LoginService/LoginService';
import { loadLogin, loadLoginDone, loadLoginFail } from '../../stores/LoginStore/LoginEvent';

const execute = async ({ email, password }: LoginParams): Promise<void> => {
  loadLogin();

  const errorCallback = ({ hasError, message }: RequestError) => {
    loadLoginFail({ hasError, message });
  };

  return LoginService.authenticateUser({ email, password })
    .then((user: LoginValues) => {
      window.localStorage.setItem('user', JSON.stringify(user));

      loadLoginDone();
    })
    .catch(errorCallback);
};

const loginUseCase = {
  execute,
};

export default loginUseCase;
