---
id: calendar
title: Calendar
---

## Create a calendar

<span class="badge badge--warning">Require authentication</span>

Create a calendar with basic informations

```ts
const calendar = await Sherl.claim(client).createCalendar(calendar: ICreateCalendarInputDto);
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
const calendar = await Sherl.claim(client).updateCalendar(calendarId: string, calendarData:IUpdateCalendarInputDto );
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

Get a calendar with a specidic id

```ts
const calendar = await Sherl.calendar(client).getCalendarWithId(calendarId: string);
```
Return a [ICalendar](calendar-types#icalendar) if found.


## Find one calendar with filters
<span class="badge badge--warning">Require authentication</span>

Find a calendar by using a ICalendarFilterDto

```ts
const calendar = await Sherl.calendar(client).fintCalendarWithFilter(filter: ICalendarFilterDto);
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
Return a [ICalendar](calendar-types#icalendar) if found.


## Find availabitilies

<span class="badge badge--warning">Require authentication</span>

Find a calendar by using a ICalendarFilterDto

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

Check avaibalities for given date and return availabilities.

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

Check availabalities for given location and return calendar.

```ts
const avaibalities = await Sherl.calendar(client).checkCalendarLocation(filter: ICheckLocationInputDto);
```

```ts
interface ICheckDatesDto {
  ownerUri: string;
  metadatas?: { [key: string]: any };
  dates: Availability[];
} 
```
This call return an [CheckLocationResult](calendar-types#ICheckLocationResult) array