---
id: person
title: Person
---

## Get current person

<span class="badge badge--warning">Require authentication</span>

Retrieve logged-in person information.

```ts
const me = await person(client).getMe();
```

This call returns on object of [IPerson](person-types)

## Get person by id

<span class="badge badge--warning">Require authentication</span>

Retrieve person information by ID.

```ts
const person = await person(client).getPersonById(id: string);
```

This call returns an object of [IPerson](person-types)

## Get list of persons

<span class="badge badge--warning">Require authentication</span>

Retrieve a list of persons.

```ts
const persons = await person(client).getPersons(page: number, itemPerPage: number, filters: IPersonFilters);
```

You can see **IPersonFilters** interface [here](person-types)

This call returns a [paginated](pagination) of [IPerson](person-types)

## Get person address

<span class="badge badge--warning">Require authentication</span>

Retrieve person address by position.

```ts
const address = await person(client).getCurrentAddress(position: IPositionInputDto);
```

```ts
interface IPositionInputDto {
  latitude: number;
  longitude: number;
}
```

This call returns an object of [ILocation](place-types)

## Get person configuration

<span class="badge badge--warning">Require authentication</span>

Retrieve person configuration vars.

```ts
const configs = await person(client).getConfigs();
```

This call returns the [configuration (IConfig)](config-types) array for the connected person.

## Register a user for your sherl
this function create a user

```ts
await person(client).registerWithEmailAndPassword(user: IPersonRegister);
```

user correspond to this interface 

```ts
interface IPersonRegister {
  birthDate?: string;
  firstName?: string;
  lastName?: string;
  password: string;
  confirmPassword: string;
  email: string;
  phoneNumber?: string;
  address?: {
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

## Register a user for your application

This function creates a person without creating user

```ts
const newPerson = await person(client).createPerson(user: IPersonRegister);
```

user use the same interface as previous

## Update a user

```ts
const updatedPerson = await person(client).updatePersonById(id: string, user: Partial<IPersonUpdate>);
```

```ts
interface IPersonUpdate {
  firstName: string;
  lastName: string;
  address: IPlace;
  type: PersonTypeEnum;
  phoneNumber: string;
  mobilePhoneNumber: string;
  faxNumber: string;
  nationality: string;
  affiliation: IOrganization;
  latitude: number;
  longitude: number;
  birthDate: Date;
  email: string;
  gender: GendersEnum;
  jobTitle: string;
  metadatas: { [key: string]: any };
}
```

This call returns the modified [user object](person-types)