---
id: search
title: Search
---

## Public search

<span class="badge badge--success">Public</span>

Enables a fulltext(`q`) search based on `indexes`.

```ts
await search(client).getPublicSearchAutocomplete(filters?: ISearchFilters);
```

```ts
interface ISearchFilters extends PaginationFilters {
  q?: string;
  indexes?: string[];
}
```

This interface extends [PaginationFilters](pagination#pagination-filters).

This call returns an [ISearchResult](search-types#isearchresult) object.
