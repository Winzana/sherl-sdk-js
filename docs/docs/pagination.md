---
id: pagination
title: Pagination
---

This section contains all interfaces associated to pagination

## Pagination

```ts
export interface Pagination<Data> {
  results: Data;
  view: View;
}
```

## View

```ts
export interface View {
  total: number;
  page: number;
  itemsPerPage: number;
}
```
