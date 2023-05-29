import jwt from 'jsonwebtoken';
import { LoginValues } from '../domain/Login';

export const validateToken = () => {
  const user = JSON.parse(window.localStorage.getItem('user') ?? '{}') as LoginValues;

  if (!user.token) return false;

  return jwt.verify(user.token.split(' ')[1], 'levva-coins-secret', error =>
    error ? false : true,
  );
};
