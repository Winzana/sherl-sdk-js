---
id: organization-address
title: Address
---

This page lists all the actions you can perform on the organisation's address.

## Create an address

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).addAddress(organizationId: string, address: IAddressRequest)
```

```ts
interface IAddressRequest extends IAddress {
  originId: string;
  latitude: number;
  longitude: number;
  organizationId: string;
}
```
This interface extends an other interface [IAddress](../place-types#iaddress).

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Update address

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).updateAddress(organizationId: string, addressId: string, address: IAddressRequest)
```

```ts
interface IAddressRequest extends IAddress {
  originId: string;
  latitude: number;
  longitude: number;
  organizationId: string;
}
```
This interface extends an other interface [IAddress](../place-types#iaddress).

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Delete address

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).deleteAddress(organizationId: string, addressId: string)
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.
