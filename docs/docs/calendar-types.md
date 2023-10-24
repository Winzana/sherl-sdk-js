---
id: calendar-types
title: Calendar types
---

## ICalendar

```ts
interface ICalendar {
  id: string;
  uri: string;
  availabilities: string[];
  unaivailabilities: string[];
  ownerUri: string;
  aboutUri: string;
  enabled: boolean;
  consumerId: string;
  createdAt: Date;
  updatedAt: Date;
  metadatas: {
    [key: string]: any;
  };
}
```

## IOpeningHoursSpecification
```ts
interface IOpeningHoursSpecification {
  id: string;
  dayOfWeek: string;
  closes: Date;
  opens: Date;
  validFrom: Date;
  validThrough: Date;
}
```

## ICalendarEvent
```ts
interface ICalendarEvent {
  id?: string;
  uri?: string;
  aboutUri?: string;
  calendarUri?: string;
  startDate?: Date;
  endDate?: Date;
  location?: IGeoCoordinates;
  createdAt?: Date;
  updatedAt?: Date;
  metadatas?: {
    [key: string]: any;
  };
}
```

`location` refers to [IGeoCoordinates](place-types#igeocoordinates)

## IDays
```ts
interface IDays {
  closed: boolean;
  day: string;
  morningTime: string;
  nightTime: string;
}
```

## Availability
```ts
interface Availability {
  from: string;
  to: string;
  available: boolean;
  isRoaming?: boolean;
  place?: IPlace;
}
```
`place`refers to [IPlace](place-types#iplace)

## ICheckLocationResult

```ts
export interface ICheckLocationResult {
  id: string;
  uri: string;
  aboutUri: string;
  ownerUri: string;
  calendarUri: string;
  startDate: string;
  endDate: string;
  location: IGeoCoordinates;
  createdAt: string;
  updatedAt: string;
  metadatas: { [key: string]: any };
}
```