---
id: person-crud
title: CRUD
---

## Get current person

<span class="badge badge--warning">Require authentication</span>

Retrieve logged-in person information.

```ts
const me = await person(client).getMe();
```

This call returns on object of [IPerson](../person-types#iperson) object.

## Get person by id

<span class="badge badge--warning">Require authentication</span>

Retrieve person information by ID.

```ts
const person = await person(client).getPersonById(id: string);
```

This call returns on object of [IPerson](../person-types#iperson) object.

## Get list of persons

<span class="badge badge--warning">Require authentication</span>

Retrieve a list of persons.

```ts
const persons = await person(client).getPersons(page: number, itemPerPage: number, filters: IPersonFilters);
```

You can see **IPersonFilters** interface [here](../person-types#ipersonfilters)

This call returns a [paginated](../pagination#pagination) of [IPerson](../person-types#iperson)

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

This call returns an object of [ILocation](../place-types#ilocation)

## Register a user for your sherl

<span class="badge badge--success">Public</span>

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

<span class="badge badge--warning">Require authentication</span>

This function creates a person without creating user

```ts
const newPerson = await person(client).createPerson(user: IPersonRegister);
```

This call returns an [IPerson](../person-types#iperson) object.

## Update a user

<span class="badge badge--warning">Require authentication</span>

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

This call returns the modified [IPerson](../person-types#iperson)