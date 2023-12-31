import { CategoryService } from '../../services/CategoryService/CategoryService';

import {
  loadCategory,
  loadCreateCategoryDone,
  loadCategoryFail,
} from '../../stores/CategoryStore/CategoryEvents';

import { NewCategoryParams } from '../../domain/Category';
import { RequestError } from '../../domain/Request';

const execute = async ({ description }: NewCategoryParams): Promise<void> => {
  loadCategory();

  return CategoryService.createCategory({ description })
    .then(category => {
      loadCreateCategoryDone(category);
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
