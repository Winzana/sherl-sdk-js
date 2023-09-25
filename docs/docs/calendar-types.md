---
id: calendar-types
title: Calendar types
---

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