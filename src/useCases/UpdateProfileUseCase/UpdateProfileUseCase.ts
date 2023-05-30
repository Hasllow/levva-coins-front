import { LoginValues } from '../../domain/Login';
import { ProfileParams } from '../../domain/Profile';
import { RequestError } from '../../domain/Request';

import { ProfileService } from '../../services/ProfileService/ProfileService';
import {
  loadProfile,
  loadProfileDone,
  loadProfileFail,
} from '../../stores/ProfileStore/ProfileEvents';

const execute = async ({ id, name }: ProfileParams): Promise<void> => {
  loadProfile();

  return ProfileService.updateUser({ id, name })
    .then(() => {
      const user = JSON.parse(window.localStorage.getItem('user') ?? '{}') as LoginValues;
      user.name = name;

      window.localStorage.setItem('user', JSON.stringify(user));

      loadProfileDone();
    })
    .catch(({ hasError, message }: RequestError) => {
      loadProfileFail({ hasError, message });
    });
};

const UpdateProfileUseCase = {
  execute,
};

export default UpdateProfileUseCase;
