import { DateFilter, PaginationFilters } from '../common';
import { IGeoCoordinates } from '../place';

export interface ICalendarEventFilterDto extends PaginationFilters {
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

export interface IDays {
  closed: boolean;
  day: string;
  morningTime: string;
  nightTime: string;
}
