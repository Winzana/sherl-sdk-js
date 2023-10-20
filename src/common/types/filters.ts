export interface Filters {
  [key: string]: string;
}

export interface Sort<T> {
  field: keyof T;
  order: 'asc' | 'desc';
}

export interface PaginationFilters {
  page?: number;
  itemsPerPage?: number;
}

export class DateFilter {
  after?: string;
  strictlyAfter?: string;
  before?: string;
  strictlyBefore?: string;
}