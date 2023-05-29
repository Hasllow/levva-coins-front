import { CategoryService } from '../../services/CategoryService/CategoryService';

import {
  loadCategory,
  loadCreateCategoryDone,
  loadCategoryDone,
  loadCategoryFail,
} from '../../stores/CategoryStore/CategoryEvents';

import { NewCategoryParams } from '../../domain/Category';
import { RequestError } from '../../domain/Request';

const execute = async ({ description }: NewCategoryParams): Promise<void> => {
  loadCategory();

  return CategoryService.createCategory({ description })
    .then(() => {
      loadCreateCategoryDone();
    })
    .catch(({ hasError, message }: RequestError) => {
      loadCategoryFail({ hasError, message });
      throw new Error();
    });
};

const NewCategoryUseCase = {
  execute,
};

export default NewCategoryUseCase;
