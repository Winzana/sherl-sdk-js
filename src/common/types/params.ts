export interface Filters {
  [key: string]: string
}

export interface Sort<T> {
  field: keyof T;
  order: 'asc' | 'desc';
}