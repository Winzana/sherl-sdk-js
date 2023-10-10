---
id: place
title: Place
---

## Get places list

<span class="badge badge--warning">Required authentication</span>

Retrieve places by query.

```ts
const places = await place(client).getPlaces(1, 10, {
  query: 'your_query_value',
});
```

This call returns a [paginated](pagination#pagination) array of [IPlace](place-types#iplace) objects.
