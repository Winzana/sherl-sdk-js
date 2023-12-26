---
id: quotas
title: Quotas
---

## Find Quota with filter

<span class="badge badge--warning">Required authentication</span>

Get Quota information by using a filter or not.

```ts
await quota(client).getQuotaFindByOne(filters?: IQuotaFilter);
```

**IQuotaFilter** extends [PaginationFilters](pagination#pagination-filters)

```ts
interface IQuotaFilter extends PaginationFilters {
  page?: number;
  itemsPerPage?: number;
  id: number;
  uri: string;
  consumerId: string;
  ownerUri: string;
}
```

This call returns an [IQuota](./quotas-types#iquota) object.
