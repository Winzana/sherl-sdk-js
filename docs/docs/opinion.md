---
id: opinion
title: Opinion
---


## Get opinions list

<span class="badge badge--warning">Required authentication</span>

```ts
const opinions = await opinion(client).getOpinions(filter: IOpinionFilters);
```

<span class="badge badge--success">Public</span>

```ts
const publicOpinions = await opinion(client).getPublicOpinions(filters: IOpinionFilters);
```


**IOpinionFilters** extends [PaginationFilters](pagination#pagination-filters)

```ts
interface IOpinionFilters extends PaginationFilters {
  opnionToUri: string;
}
```

This call returns [paginated](pagination#pagination) array of [IOpinion](opinion-types#iopinion) objects

## Create opinion

<span class="badge badge--warning">Required authentication</span>

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

<span class="badge badge--warning">Required authentication</span>

```ts
const opinionUpdated = await opinion(client).updateOpinion(opinionId: string, status: IOpinionUpdateStatusInputDto);
```

```ts
interface IOpinionUpdateStatusInputDto {
  status: OpinionStatusEnum;
  refusedComment?: string;
}

enum OpinionStatusEnum {
  PUBLISHED = 'published',
  REFUSED = 'refused',
  IS_CLAIMED = 'is_claimed',
}
```

This call returns an [IOpinion](opinion-types#iopinion) object.

## Create opinion claim

<span class="badge badge--warning">Required authentication</span>

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

<span class="badge badge--warning">Required authentication</span>

```ts
const averageScore = await opinion(client).getOpinionsAverage(opinionToUri: string);
```

This call returns an [IAverage](opinion-types#iaverage) object

## Get the opinions given by connected user

<span class="badge badge--warning">Required authentication</span>

```ts
const givenOpinions = await opinion(client).getOpinionsIGive(filters: IOpinionFilters);
```

This call returns [paginated](pagination#pagination) array of [IOpinion](opinion-types#iopinion) objects.