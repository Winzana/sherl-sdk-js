import { DateFilter, PaginationFilters } from '../common';
import { IGeoCoordinates } from '../place';

import { Availability } from './entities';

// Calendar

export interface ICreateCalendarInputDto {
  id: string;
  aboutUri: string;
  ownerUri: string;
  availabilities: IOpeningHoursSpecification[];
  metadatas?: { [key: string]: any };
}
export class ICalendarFilterDto {
  id?: string;
  uri?: string;
  aboutUri?: string;
  ownerUri?: string;
  metadatas?: { [key: string]: any };
  consumerId?: string;
}

export interface IUpdateCalendarInputDto {
  aboutUri?: string;
  availabilities?: IOpeningHoursSpecification[];
  metadatas?: { [key: string]: any };
  enabled?: boolean;
}

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

export interface IFindAvailabilitiesResult {
  id: string;
  uri: string;
  aboutUri: string;
  ownerUri: string;
  calendarUri: string;
  startDate: string;
  endDate: string;
  location: Location;
  createdAt: string;
  updatedAt: string;
  metadatas: { [key: string]: any };
}

export interface ICheckDatesDto {
  ownerUri: string;
  metadatas?: { [key: string]: any };
  dates: Availability[];
}

export interface ICheckLocationInputDto {
  calendarOwnerUri: string;
  country?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  streetAddress?: string;
}
// CalendarEvent
export interface IGetCalendarEventForCurrentPersonInputDto
  extends PaginationFilters {
  id: string;
  uri?: string;
  aboutUri: string;
  ownerUri: string;
  startDate: Date;
  endDate: Date;
}
export interface ICalendarEventFilterDto extends PaginationFilters {
  id?: string;
  calendarAboutUri?: string;
  calendarOwnerUri?: string;
  calendarMetadatas?: string;
  ownerUri?: string;
  aboutUri?: string;
  startDate: DateFilter;
  endDate: DateFilter;
}

export interface ICreateCalendarEventInputDto {
  id?: string;
  uri?: string;
  aboutUri: string;
  ownerUri: string;
  startDate: Date;
  endDate: Date;
  metadatas?: { [key: string]: any };
}
export interface IUpdateCalendarEventInputDto {
  aboutUri?: string;
  ownerUri?: string;
  calendarUri?: string;
  startDate?: string;
  endDate?: string;
}

export interface IOpeningHoursSpecification {
  id: string;
  dayOfWeek: string;
  closes: Date;
  opens: Date;
  validFrom: Date;
  validThrough: Date;
}

export interface ICalendarEvent {
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

// General
export interface IDays {
  closed: boolean;
  day: string;
  morningTime: string;
  nightTime: string;
}
