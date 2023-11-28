---
id: calendar
title: Calendar
---

## Create a calendar

<span class="badge badge--warning">Require authentication</span>

Create a calendar with basic informations

```ts
const calendar = await Sherl.calendar(client).createCalendar(calendar: ICreateCalendarInputDto);
```

```ts
export interface ICreateCalendarInputDto {
  id: string;
  aboutUri: string;
  ownerUri: string;
  availabilities: IOpeningHoursSpecification[];
  metadatas?: { [key: string]: any };
}
```

Return an [ICalendar](calendar-types#icalendar).

## Update a calendar

<span class="badge badge--warning">Require authentication</span>

Update a specific calendar with new informations

```ts
const calendar = await Sherl.calendar(client).updateCalendar(
  calendarId: string,
  calendarData:IUpdateCalendarInputDto);
```

```ts
export interface IUpdateCalendarInputDto {
  aboutUri?: string;
  availabilities?: IOpeningHoursSpecification[];
  metadatas?: { [key: string]: any };
  enabled?: boolean;
}
```

Return a [ICalendar](calendar-types#icalendar).

## Delete a calendar

<span class="badge badge--warning">Require authentication</span>

Remove a specific calendar from the database

```ts
await Sherl.calendar(client).deleteCalendar(calendarId: string);
```

## Retrieve a calendar with an id

<span class="badge badge--warning">Require authentication</span>

Get a calendar by a specidic id.

```ts
const calendar = await Sherl.calendar(client).getCalendarById(calendarId: string);
```

Return a [ICalendar](calendar-types#icalendar) if found.

## Find one calendar with filters

<span class="badge badge--warning">Require authentication</span>

Find a calendar by using a ICalendarFilterDto.

```ts
const calendar = await Sherl.calendar(client).findCalendarWithFilter(filter: ICalendarFilterDto);
```

```ts
export class ICalendarFilterDto {
  id?: string;
  uri?: string;
  aboutUri?: string;
  ownerUri?: string;
  metadatas?: { [key: string]: any };
  consumerId?: string;
}
```

Return an [ICalendar](calendar-types#icalendar) if found.

## Find availabitilies

<span class="badge badge--warning">Require authentication</span>

Find a calendar by using a ICalendarFilterDto.

```ts
const availabilities = await Sherl.calendar(client).findCalendarAvailabilitiesWithFilter(filter: IFindAvailabilitiesInputDto);
```

```ts
export interface IFindAvailabilitiesInputDto {
  ownerUri: string;
  aboutUri?: string;
  userPlaceUri?: string;
  metadatas?: { [key: string]: any };
  startDate?: string;
  endDate?: string;
  scale?: string;
  scaleValue?: string;
  available?: boolean;
}
```

This call returns an array of corresponding [Availability](calendar-types#availability).

## Check availabilities for dates

<span class="badge badge--warning">Require authentication</span>

Check avaibalities for given dates and return availabilities.

```ts
const avaibalities = await Sherl.calendar(client).checkCalendarDates(filter: ICheckDatesDto);
```

```ts
interface ICheckDatesDto {
  ownerUri: string;
  metadatas?: { [key: string]: any };
  dates: Availability[];
}
```

This calls return an [availabilities](calendar-types#availability) array

## Check calendar available for user location

<span class="badge badge--warning">Require authentication</span>

Check availabilities for given location and return calendar.

```ts
const availability = await Sherl.calendar(client).checkLocationForCalendar(filter: ICheckLocationInputDto);
```

```ts
interface ICheckLocationInputDto {
  calendarOwnerUri: string;
  country?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  streetAddress?: string;
}
```

This call return a boolean, true if the location is available.
