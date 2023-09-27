---
id: place-types
title: Place types
---

## IPlace
```ts
interface IPlace {
  id: string;
  uri: string;
  country: string;
  locality: string;
  region: string;
  department: string;
  types: string[];
  postalCode: string;
  streetAddress: string;
  complementaryStreetAddress: string;
  name: string;
  originId: string;
  latitude: number;
  longitude: number;
  consumerId: string;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  isDefault: boolean;
}
```

## IGeoCoordinates
```ts
interface IGeoCoordinates extends IAddress {
  latitude: number;
  longitude: number;
}

interface IAddress {
  id: string;
  country: string;
  locality: string;
  region: string;
  department: string;
  types: string[];
  postalCode: string;
  streetAddress: string;
  complementaryStreetAddress: string;
  name: string;
  type: string;
  isDefault: boolean;
  googleToken: string;
  uri: string;
}
```

## ILocation
```ts
interface ILocation {
  id: string;
  country: string;
  locality: string;
  region: string;
  postalCode: string;
  streetAddress: string;
  latitude: string;
  longitude: string;
}
```