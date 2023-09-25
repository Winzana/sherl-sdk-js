---
id: opinion-types
title: Opinion types
---

# Opinion Types

## IOpinion
```ts
interface IOpinion<T,K> {
  id: string;
  opinionToUri: string;
  comment: string;
  score: number;
  opinionFromUri: string;
  createdAt: string;
  uri: string;
  status: string;
  opinionFrom: T;
  refusedComment?: string;
  opinionTo: K;
  isClaimed?: boolean;
  claimComment?: string;
  updatedAt?: string;
}
```

In this interface, we have 2 dynamics parameters **T** and **K**.
- T represent the entity which create opinion to K
- K represent the entity which receive opinion from T

## IAverage

```ts
interface IAverage {
  average: number; // Average score (sum of each score / count)
  count: number; // Represent the number of voters
}
```


