---
id: calendar-event
title: Calendar Events
---

## Create a calendar event

<span class="badge badge--warning">Require authentication</span>

Create a calendar event for a specific calendar

```ts
const calendarEvent = await Sherl.calendar(client).createCalendarEvent(
  calendarId: string,
  calendarEvent: ICreateCalendarEventInputDto);
```

```ts 
interface ICreateCalendarEventInputDto {
  id?: string;
  uri?: string;
  aboutUri: string;
  ownerUri: string;
  startDate: Date;
  endDate: Date;
  metadatas?: { [key: string]: any };
}
```

Return an [ICalendarEvent](calendar-types#icalendarevent).

## Update a calendar event

<span class="badge badge--warning">Require authentication</span>

Update a calendar event with new values

```ts
const calendarEvent = await Sherl.calendar(client).updateCalendarEvent(  
  calendarId: string,
  eventId: string,
  calendarEventData: IUpdateCalendarEventInputDto);
```

```ts
interface IUpdateCalendarEventInputDto {
  aboutUri?: string;
  ownerUri?: string;
  calendarUri?: string;
  startDate?: string;
  endDate?: string;
}
```

Return the updated [ICalendarEvent](calendar-types#icalendarevent).

## Delete

<span class="badge badge--warning">Require authentication</span>

Delete an event with the associated id.

```ts
 await Sherl.calendar(client).deleteCalendarEvent(c
  alendarId: string,
  eventId: string);
```

## Get a calendar event

<span class="badge badge--warning">Require authentication</span>

Get a calendar event with its id

```ts
const calendarEvent = await Sherl.calendar(client).getCalendarEventsById(  eventId: string);
```

Return an [ICalendarEvent](calendar-types#icalendarevent).

## Get all calendar events

<span class="badge badge--warning">Require authentication</span>

Get all calendar events for a calendar id

```ts
const calendarEvents = await Sherl.calendar(client).getCalendarEventsByCalendarId(  
  calendarId: string, 
  filter: ICalendarEventFilterDto);
```

```ts
interface ICalendarEventFilterDto extends PaginationFilters {
  id?: string;
  calendarAboutUri?: string;
  calendarOwnerUri?: string;
  calendarMetadatas?: string;
  ownerUri?: string;
  aboutUri?: string;
  startDate: DateFilter;
  endDate: DateFilter;
  calendarUri?: string | string[];
  consumerId?: string;
}
```

Return an array of [ICalendarEvent](calendar-types#icalendarevent).

## Get all calendar events for the current person

<span class="badge badge--warning">Require authentication</span>

Retrieve all calendar events for the current person.

```ts
const calendarEvents = await Sherl.calendar(client).getCalendarEventForCurrentPerson(filter: IGetCalendarEventForCurrentPersonInputDto);
```

```ts
interface IGetCalendarEventForCurrentPersonInputDto
  extends PaginationFilters {
  id: string;
  uri?: string;
  aboutUri: string;
  ownerUri: string;
  startDate: Date;
  endDate: Date;
}
```

Return an array of [ICalendarEvent](calendar-types#icalendarevent).

## Get all calendar events for calendar owner uri

<span class="badge badge--warning">Require authentication</span>

Retrieve all calendar events for the calendar owner uri.

```ts
const calendarEvents = await Sherl.calendar(client).getCalendarEventForCurrentPerson(filter: ICalendarEventFilterDto);
```

```ts
interface ICalendarEventFilterDto extends PaginationFilters {
  id?: string;
  calendarAboutUri?: string;
  calendarOwnerUri?: string;
  calendarMetadatas?: string;
  ownerUri?: string;
  aboutUri?: string;
  startDate: DateFilter;
  endDate: DateFilter;
  calendarUri?: string | string[];
  consumerId?: string;
}
```

This interface extends [PaginationFilters](pagination#pagination-filters).
[DateFilter](calendar-types#DateFilter)

Return a [paginated](pagination#pagination) array of [ICalendarEvent](calendar-types#icalendarevent) objects.
