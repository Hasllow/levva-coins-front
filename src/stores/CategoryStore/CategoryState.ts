import { CategoryValues } from '../../domain/Category';

export interface CategoryState {
  isLoading: boolean;
  categories: CategoryValues[];
  hasError: boolean;
  errorMessage: string;
}
