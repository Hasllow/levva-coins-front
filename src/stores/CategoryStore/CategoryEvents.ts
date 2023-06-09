import { createEvent } from 'effector';

import { RequestError } from '../../domain/Request';
import { CategoryValues } from '../../domain/Category';

export const loadCategory = createEvent('loadCategory');
export const loadCreateCategoryDone = createEvent<CategoryValues>('loadCreateCategoryDone');
export const loadCategoryDone = createEvent<CategoryValues[]>('loadCategoryDone');
export const loadCategoryFail = createEvent<RequestError>('loadCategoryFail');
