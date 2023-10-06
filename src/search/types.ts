import { PaginationFilters } from '../common';
import { IOrganizationResponse } from '../organization';
import { ICategoryResponse } from '../shop/types';

export interface ISearchFilters extends PaginationFilters {
  q?: string;
  indexes?: string[];
}

export interface ISearchResult {
  organization?: IOrganizationResponse[];
  category?: ICategoryResponse[];
}
