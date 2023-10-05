---
id: pagination
title: Pagination
---

This section contains all interfaces associated to pagination

## Pagination

```ts
interface Pagination<Data> {
  results: Data[];
  view: View;
}
```

## View

```ts
interface View {
  total: number;
  page: number;
  itemsPerPage: number;
}
```

## Pagination filters

```ts
interface PaginationFilters {
  page?: number;
  itemsPerPage?: number;
}
```

## ISearchResult
```ts
interface ISearchResult<T> extends Pagination<T> {
  aggregations?: {
    [key: string]: {
      count: number;
      id: string;
      key: string;
      sub?: {
        [key: string]: {
          count: number;
          id: string;
          key: string;
        };
      };
    };
  };
}
```
