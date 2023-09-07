---
id: claim
title: Claim
---

## Get all claims

<span class="badge badge--warning">Require authentication</span>

Retrieve all claims.

```ts
const claims = await Sherl.claim.getAllClaims();
```

Return a paginated array of Claim.

## Get claim by id

<span class="badge badge--warning">Require authentication</span>

Retrieve claim informations by ID.

```ts
const claim = await Sherl.person.getClaimById('id');
```

Return a Claim.

## Create claim ticket

<span class="badge badge--warning">Require authentication</span>

Allows you to create a claim ticket

```ts
const claim = await Sherl.person.createClaimTicket({
  id: 'string',
  personId: 'string',
  issueTitle: 'string',
  issueMessage: 'string',
  schedules: {
    allowedFromDate: 'string',
    allowedUntilDate: 'string',
  },
});
```

Return a boolean.

## Update claim ticket

<span class="badge badge--warning">Require authentication</span>

Allows you to update a claim ticket using its id

```ts
const claim = await Sherl.person.createClaimTicket({
  status: 'string';
});
```

Return a boolean.
