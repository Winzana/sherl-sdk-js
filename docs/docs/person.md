---
id: person
title: Person
---

## Get current person

<span class="badge badge--warning">Require authentication</span>

Retrieve logged-in person informations.

```ts
const me = await person(client).getMe();
```

Return a Person.

## Get person by id

<span class="badge badge--warning">Require authentication</span>

Retrieve person informations by ID.

```ts
const person = await person(client).getPersonById('id');
```

Return a Person.

## Get list of persons

<span class="badge badge--warning">Require authentication</span>

Retrieve a list of persons.

```ts
const persons = await person(client).getPersons(page, itemPerPage, {
  /* Filters */
});
```

Return a paginated array of Person.

## Get person address

<span class="badge badge--warning">Require authentication</span>

Retrieve person address by position.

```ts
const address = await person(client).getCurrentAddress({
  longitude: 'your_longitude',
  latitude: 'your_latitude',
});
```

Return a Place.

## Get person configuration

<span class="badge badge--warning">Require authentication</span>

Retrieve person configuration vars.

```ts
const configs = await person(client).getConfigs();
```

Return an array of Configuration for this person.

## Register a user for your sherl
this function create a user link to your sherl

```ts
await person(client).registerWithEmailAndPassword(user);
```
user correspond to this interface 
```ts
interface IPersonRegister {
  id: string;
  birthDate: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
  phoneNumber: string;
  address: {
    id: string;
    uri: string;
    createdAt: string;
    country: string;
    locality: string;
    region: string;
    department: string;
    postalCode: string;
    streetAddress: string;
    complementaryStreetAddress: string;
    name: string;
    originId: string;
    latitude: number;
    longitude: number;
  };
}
```
## Register a user for your app
this function create a user link to your project

```ts
await person(client).createPerson(user);
```
user use the same interface as previous

## Update a user
```ts
await person(client).updatePersonById('id', user);
```
user is composed by anything from this interface

```ts
interface IPersonMeResponse {
  id: string;
  uri: string;
  consumerId: string;
  userId: string;
  firstName: string;
  lastName: string;
  address: IPlace;
  myAddresses: IPlace[];
  subscriptionLocation: IGeoCoordinates;
  phoneNumber: string;
  mobilePhoneNumber: string;
  faxNumber: string;
  nationality: string;
  affiliation: IOrganization;
  birthDate: Date;
  email: string;
  gender: string;
  latitude: number;
  longitude: number;
  jobTitle: string;
  enabled: boolean;
  legalNotice: ILegalNotice;
  privacyPolicy: IPrivacyPolicy;
  createdAt: Date;
  updatedAt: Date;
  picture: IImageObject;
  settings: ISettings;
  organizationFavorites: string[];
  mangopayUserId: string;
  mangopayWalletId: string;
  mangopayCards: IMangopayCard[];
  stripe: IStripe;
  lemonway: ILemonway;
  type: IPersonTypeEnum;
  frequentedEstablishments: IFrequentedEstablishments[];
  metadatas: { [key: string]: any };
  statistics: {
    lastVisit: Date;
    firstVisit: Date;
    totalVisit: number;
    amountLastOrder: number;
    amountTotalOrder: number;
    frequentedEstablishments: IFrequentedEstablishments[];
    loyalCustomer: boolean;
  };
}
```