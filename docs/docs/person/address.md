---
id: person-address
title: Address
---

This page list all actions of person's address.

**These calls create, modify and delete a logged-in user.**

## Create address to person

<span class="badge badge--warning">Require authentication</span>

```ts
await person(client).createAddress(address: IPlace);
```

See [**IPlace**](../place-types#iplace)(`address`).

This call returns an [IPerson](../person-types#iperson) object.

## Update address by id

<span class="badge badge--warning">Require authentication</span>

```ts
await person(client).updateAddress(addressId: string, updatedAddress: IPlace);
```

See [**IPlace**](../place-types#iplace)(`address`).

This call returns an [IPerson](../person-types#iperson) object.

## Delete address by id

<span class="badge badge--warning">Require authentication</span>

```ts
await person(client).deleteAddress(addressId: string);
```

This call returns an [IPerson](../person-types#iperson) object.