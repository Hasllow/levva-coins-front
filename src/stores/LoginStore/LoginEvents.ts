import { createEvent } from 'effector';

import { RequestError } from '../../domain/Request';

export const loadLogin = createEvent('loadLogin');
export const loadLoginDone = createEvent('loadLoginDone');
export const loadLoginFail = createEvent<RequestError>('loadLoginFail');
