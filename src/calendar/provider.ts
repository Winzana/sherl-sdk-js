import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { checkCalendarDates } from './actions/calendar/check-calendar-dates';
import { checkCalendarLocation } from './actions/calendar/check-calendar-location';

import { createCalendar } from './actions/calendar/create-calendar';
import { deleteCalendar } from './actions/calendar/delete-calendar';
import { findCalendarWithFilter } from './actions/calendar/find-calendar';
import { findCalendarAvailabilitiesWithFilter } from './actions/calendar/find-calendar-availabilities';
import { getCalendarWithId } from './actions/calendar/get-calendar';
import { updateCalendar } from './actions/calendar/update-calendar';

import { createCalendarEvent } from './actions/calendar-event/create-calendar-event';

import { updateCalendarEvent } from './actions/calendar-event/update-calendar-event';
import { deleteCalendarEvent } from './actions/calendar-event/delete-calendar-event';
import { getCalendarEventForCurrentPerson } from './actions/calendar-event/get-all-events-for-current-person';
import { getCalendarEventForOwner } from './actions/calendar-event/get-all-events-for-calendar-by-owner';

import { errorFactory } from './errors/errors';

class CalendarProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  public createCalendar = this.withFetcher(createCalendar);
  public updateCalendar = this.withFetcher(updateCalendar);
  public deleteCalendar = this.withFetcher(deleteCalendar);
  public getCalendarWithId = this.withFetcher(getCalendarWithId);
  public checkCalendarDates = this.withFetcher(checkCalendarDates);
  public checkCalendarLocation = this.withFetcher(checkCalendarLocation);
  public findCalendarAvailabilitiesWithFilter = this.withFetcher(
    findCalendarAvailabilitiesWithFilter,
  );
  public findCalendarWithFilter = this.withFetcher(findCalendarWithFilter);

  public createCalendarEvent = this.withFetcher(createCalendarEvent);
  public updateCalenderEvent = this.withFetcher(updateCalendarEvent);
  public deleteCalenderEvent = this.withFetcher(deleteCalendarEvent);
  public getCalendarEventForCurrentPerson = this.withFetcher(
    getCalendarEventForCurrentPerson,
  );
  public getAllCalenderEvents = this.withFetcher(findCalendarWithFilter);
  public getCalenderEventWithId = this.withFetcher(getCalendarWithId);
  public getCalendarEventForOwner = this.withFetcher(getCalendarEventForOwner);
}

export { CalendarProvider };
