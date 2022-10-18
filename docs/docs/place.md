---
id: place
title: Place
---

## Get places list

Retrieve places by query.

```ts
const places = await Sherl.place.getPlaces(1, 10, {
  query: 'your_query_value',
});
```

Return a paginated array of Place.
