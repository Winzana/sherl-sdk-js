---
id: opinion
title: Opinion
---


## Get opinions list

Retrieve a list of all public opinions, which you can filter with parameters (page, itemsPerPage, ...)

```ts
// Require authentication
const opinions = await opinion(client).getOpinions(filter: IOpinionFilters);

// Public
const publicOpinions = await opinion(client).getPublicOpinions(filters: IOpinionFilters);
```

**IOpinionFilters** extends [PaginationFilters](pagination#pagination-filters)

```ts
interface IOpinionFilters {
  opnionToUri: string;
}
```

This call returns [paginated](pagination#pagination) array of [IOpinion](opinion-types#iopinion) objects

## Create opinion

```ts
const newOpinion = await opinion(client).createOpinion(data: ICreateOpinionInput);
```

```ts
interface ICreateOpinionInput {
  comment: string;
  id: string;
  opinionToUri: string;
  score: number;
}
```

This call returns an [IOpinion](opinion-types#iopinion) object.

## Update opinion status

```ts
const opinionUpdated = await opinion(client).updateOpinion(opinionId: string, opinion: Partial<IOpinion<T, K>>);
```

This call returns an [IOpinion](opinion-types#iopinion) object.

## Create opinion claim

```ts
const claim = await opinion(client).createOpinionClaim(opinionId: string, data: IClaimOpinionInput);
```

```ts
interface IClaimOpinionInput {
  claimComment: string
}
```

This call returns an [IOpinion](opinion-types#iopinion) object.

## Get opinion average score

```ts
const averageScore = await opinion(client).getOpinionsAverage(opinionToUri: string);
```

This call returns an [IAverage](opinion-types#iaverage) object

## Get the opinions given by connected user

```ts
const givenOpinions = await opinion(client).getOpinionsIGive(filters: IOpinionFilters);
```

This call returns [paginated](pagination#pagination) array of [IOpinion](opinion-types#iopinion) objects.