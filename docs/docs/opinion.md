---
id: opinion
title: Opinion
---

## Get opinions list

Retrieve a list of all public opinions, which you can filter with parameters (page, itemsPerPage, ...)

```ts
// Require authentication
const opinions = await Sherl.opinion.getOpinions({
  /* Filters */
});

// Public
const publicOpinions = await Sherl.opinion.getPublicOpinions({
  /* Filters */
});
```

Return [Pagination](https://www.google.fr)

## Create opinion

```ts
const newOpinion = await Sherl.opinion.createOpinion(data);
```

## Update opinion status

```ts
const opinionUpdated = await Sherl.opinion.updateOpinion(opinionId, {
  status: 'published',
});
```

## Create opinion claim

```ts
const claim = await Sherl.opinion.createOpinionClaim(opinionId, {
  claimComment: 'My claim commentary',
});
```

## Get opinion average score

```ts
const averageScore = await Sherl.opinion.getOpinionsAverage({
  opinionToUri: 'myUri',
});
```

## Get the opinions given by connected user

```ts
const givenOpinions = await Sherl.opinion.getOpinionsIGive({
  /* Filters */
});
```
