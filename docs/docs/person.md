---
id: person
title: Person
---

## Get current person

<span class="badge badge--warning">Require authentication</span>

Retrieve logged-in person informations.

```ts
const me = await Sherl.person.getMe();
```

Return a Person.

## Get person by id

<span class="badge badge--warning">Require authentication</span>

Retrieve person informations by ID.

```ts
const person = await Sherl.person.getPersonById('id');
```

Return a Person.

## Get list of persons

<span class="badge badge--warning">Require authentication</span>

Retrieve a list of persons.

```ts
const persons = await Sherl.person.getPersons(1, 10, {
  /* Filters */
});
```

Return a paginated array of Person.

## Get person address

<span class="badge badge--warning">Require authentication</span>

Retrieve person address by position.

```ts
const address = await Sherls.person.getCurrentAddress({
  longitude: 'your_longitude',
  latitude: 'your_latitude',
});
```

Return a Place.

## Get person configuration

<span class="badge badge--warning">Require authentication</span>

Retrieve person configuration vars.

```ts
const config = await Sherl.person.getConfigs();
```

Return an array of Configuration.
