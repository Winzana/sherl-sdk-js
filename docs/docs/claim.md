---
id: claim
title: Claim
---

## Get all claims

<span class="badge badge--warning">Require authentication</span>

Retrieve all claims.

```ts
const claims = await Sherl.claim(client).getAllClaims(page?: number, itemsPerPage?: number, filters?: IClaimTicketFilters);
```

```ts
interface IClaimTicketFilters = {
  [key: string]: any;
} 
```

Return a [paginated](pagination) array of [IClaim](claim-types#iclaim).

## Get claim by id

<span class="badge badge--warning">Require authentication</span>

Retrieve claim informations by ID.

```ts
const claim = await Sherl.claim(client).getClaimById(id: string);
```

This call returns an object of [IClaim](claim-types#iclaim)

## Create claim ticket

<span class="badge badge--warning">Require authentication</span>

Allows you to create a claim ticket

```ts
const claim = await Sherl.claim(client).createClaimTicket(claim: <Partial<IClaimCreate>>);
```

```ts
interface IClaimCreate {
  id: string;
  personId: string;
  issueTitle: string;
  issueMessage: string;
  schedules: Schedules;
}

interface Schedules{
  allowedFromDate: string;
  allowedUntilDate: string;
}
```

This call returns the new [IClaim](claim-types#iclaim) object created

## Update claim ticket

<span class="badge badge--warning">Require authentication</span>

Allows you to update a claim ticket using its id

```ts
const claim = await Sherl.claim(client).updateClaim(id:string, data: IClaimUpdate);
```

This call returns the updated [IClaim](claim-types#iclaim) object
