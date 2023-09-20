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
