---
id: claim
title: Claim
---

## Get all claims

<span class="badge badge--warning">Require authentication</span>

Retrieve all claims.

```ts
await Sherl.claim(client).getAllClaims(filters?: IClaimTicketFilters);
```

```ts
interface IClaimTicketFilters extends PaginationFilters {
    id?: string;
  personId?: string;
  orderId?: string;
  consumerId?: string;
  status?: ClaimStatusEnum;
} 
```

This interface extends [PaginationFilters](pagination#pagination-filters).

- *status* [ClaimStatusEnum](claim-types#claimstatusenum).

Return a [paginated](pagination#pagination) array of [IClaim](claim-types#iclaim).

## Get claim by id

<span class="badge badge--warning">Require authentication</span>

Retrieve claim informations by ID.

```ts
await Sherl.claim(client).getClaimById(id: string);
```

This call returns an object of [IClaim](claim-types#iclaim)

## Find claim with filters

<span class="badge badge--warning">Require authentication</span>


```ts
await Sherl.claim(client).findClaimBy(filters?: FindClaimFilter);
```

```ts
interface FindClaimFilter {
  id?: string;
  personId?: string;
  orderId?: string;
  consumerId?: string;
}
```

This call returns an object of [IClaim](claim-types#iclaim)

## Create claim ticket

<span class="badge badge--warning">Require authentication</span>

Allows you to create a claim ticket

```ts
await Sherl.claim(client).createClaimTicket(claim: IClaimCreate);
```

```ts
interface IClaimCreate {
  id: string;
  personId: string;
  issueTitle: string;
  issueMessage: string;
  schedules: ISchedules;
}
```

See [ISchedules](claim-types#ischedules).

This call returns the new [IClaim](claim-types#iclaim) object created.

## Update claim ticket

<span class="badge badge--warning">Require authentication</span>

Allows you to update a claim ticket using its id

```ts
await Sherl.claim(client).updateClaim(id:string, status: ClaimStatusEnum);
```

See [ClaimStatusEnum](claim-types#claimstatusenum).

This call returns the updated [IClaim](claim-types#iclaim) object.

## Reply to claim

<span class="badge badge--warning">Require authentication</span>

```ts
await Sherl.claim(client).replyClaim(claimId: string, replyContent: string);
```

This call returns an [IClaim](claim-types#iclaim) object.

## Refund claim

<span class="badge badge--warning">Require authentication</span>

```ts
await Sherl.claim(client).refundClaim(claimId: string);
```

This call returns an [IClaim](claim-types#iclaim) object.
