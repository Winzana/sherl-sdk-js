import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { checkCalendarDates } from './actions/calendar/check-calendar-dates.action';
import { checkLocationForCalendar } from './actions/calendar/check-calendar-location.action';

import { createCalendar } from './actions/calendar/create-calendar.action';
import { deleteCalendar } from './actions/calendar/delete-calendar.action';
import { findOneCalendarWithFilter } from './actions/calendar/find-calendar.action';
import { findCalendarAvailabilitiesWithFilter } from './actions/calendar/find-calendar-availabilities.action';
import { getCalendarById } from './actions/calendar/get-calendar.action';
import { updateCalendar } from './actions/calendar/update-calendar.action';

import { createCalendarEvent } from './actions/calendar-event/create-calendar-event.action';

import { updateCalendarEvent } from './actions/calendar-event/update-calendar-event.action';
import { deleteCalendarEvent } from './actions/calendar-event/delete-calendar-event.action';
import { getCalendarEventsForCurrentPerson } from './actions/calendar-event/get-all-events-for-current-person.action';
import { getCalendarEventsForOwner } from './actions/calendar-event/get-all-events-for-calendar-by-owner.action';
import { getCalendarEventsByCalendarId } from './actions/calendar-event/get-all-events-for-calendar.action';
import { errorFactory } from './errors/errors';

class CalendarProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Creates a calendar.
   *
   * @param {ICreateCalendarInputDto} calendar - The input data for creating a calendar.
   * @return {Promise<ICalendar>} The created calendar.
   * @see {@link https://developers.sherlock.com/api-docs/calendar/#create-a-calendar/ Sherl SDK documentation} for further information.
   */
  public createCalendar = this.withFetcher(createCalendar);

  /**
   * Updates the calendar with the specified ID.
   *
   * @param {Fetcher} fetcher - The fetcher used to make API requests.
   * @param {string} calendarId - The ID of the calendar to update.
   * @param {IUpdateCalendarInputDto} calendarData - The data to update the calendar with.
   * @return {Promise<ICalendar>} The updated calendar.
   * @see {@link https://developers.sherlock.com/api-docs/calendar/#update-a-calendar/ Sherl SDK documentation} for further information.
   */
  public updateCalendar = this.withFetcher(updateCalendar);

  /**
   * Deletes a calendar.
   *
   * @param {string} calendarId - The ID of the calendar to delete.
   * @return {Promise<ICalendar>} The deleted calendar object.
   * @see {@link https://developers.sherlock.com/api-docs/calendar/#delete-a-calendar/ Sherl SDK documentation} for further information.
   */
  public deleteCalendar = this.withFetcher(deleteCalendar);

  /**
   * Retrieves a calendar by its ID.
   *
   * @param {string} calendarId - The ID of the calendar to retrieve.
   * @return {Promise<ICalendar>} A promise that resolves to the retrieved calendar.
   * @see {@link https://developers.sherlock.com/api-docs/calendar/#Retrieve-a-calendar-with-an-id/ Sherl SDK documentation} for further information.
   */
  public getCalendarById = this.withFetcher(getCalendarById);

  /**
   * Retrieves availabilities from the calendar for a given set of dates.
   *
   * @param {ICheckDatesDto} filter - The filter object containing the dates to check.
   * @return {Promise<Availability[]>} A promise that resolves to an array of availabilities.
   * @see {@link https://developers.sherlock.com/api-docs/calendar/#check-availabilities-for-dates/ Sherl SDK documentation} for further information.
   */
  public checkCalendarDates = this.withFetcher(checkCalendarDates);

  /**
   * Checks the availability of a location for the calendar.
   *
   * @param {ICheckLocationInputDto} filter - The filter object containing the location details.
   * @return {Promise<boolean>} A promise that resolves to a boolean indicating the availability of the location.
   * @see {@link https://developers.sherlock.com/api-docs/calendar/#Check-calendar-available-for-user-location/ Sherl SDK documentation} for further information.
   */
  public checkLocationForCalendar = this.withFetcher(checkLocationForCalendar);

  /**
   * Finds calendar availabilities with a filter.
   *
   * @param {IFindAvailabilitiesInputDto} filter - The filter to apply when finding availabilities.
   * @return {Promise<IFindAvailabilitiesResult>} A promise that resolves to the result of finding availabilities.
   * @see {@link https://developers.sherlock.com/api-docs/calendar/#find-availabilities/ Sherl SDK documentation} for further information.
   */
  public findCalendarAvailabilitiesWithFilter = this.withFetcher(
    findCalendarAvailabilitiesWithFilter,
  );

  /**
   * Retrieves a calendar that matches the specified filter criteria.
   *
   * @param {ICalendarFilterDto} filter - The filter criteria used to search for a calendar.
   * @returns {Promise<ICalendar>} A promise that resolves to the found calendar.
   * @see {@link https://developers.sherlock.com/api-docs/calendar/Find-one-calendar-with-filters/ Sherl SDK documentation} for further information.
   */
  public findOneCalendarWithFilter = this.withFetcher(
    findOneCalendarWithFilter,
  );

  /**
   * Creates a calendar event using the calendar ID, and calendar event data.
   *
   * @param {string} calendarId - the ID of the calendar
   * @param {ICreateCalendarEventInputDto} calendarEvent - the data for the calendar event
   * @return {Promise<ICalendarEvent>} a promise that resolves to the created calendar event
   * @see {@link https://developers.sherlock.com/api-docs/calendar-event/#create-a-calendar-event/ Sherl SDK documentation} for further information.
   */
  public createCalendarEvent = this.withFetcher(createCalendarEvent);

  /**
   * Updates a calendar event.
   *
   * @param {string} calendarId - The ID of the calendar.
   * @param {string} eventId - The ID of the event.
   * @param {IUpdateCalendarEventInputDto} calendarEventData - The data to update the calendar event.
   * @return {Promise<ICalendarEvent>} The updated calendar event.
   * @see {@link https://developers.sherlock.com/api-docs/calendar-event/#update-a-calendar-event/ Sherl SDK documentation} for further information.
   */
  public updateCalenderEvent = this.withFetcher(updateCalendarEvent);

  /**
   * Deletes a calendar event.
   *
   * @param {string} calendarId - The ID of the calendar.
   * @param {string} eventId - The ID of the event to be deleted.
   * @return {Promise<ICalendarEvent>} A Promise that resolves to the deleted calendar event.
   * @see {@link https://developers.sherlock.com/api-docs/calendar-event/#delete/ Sherl SDK documentation} for further information.
   */
  public deleteCalenderEvent = this.withFetcher(deleteCalendarEvent);

  /**
   * Retrieves calendar events for the current person.
   *
   * @param {IGetCalendarEventsForCurrentPersonInputDto} filter - The filter object used to specify the search criteria for the calendar events.
   * @return {Promise<ISearchResult<ICalendarEvent>>} A promise that resolves to a search result containing the calendar events.
   * @see {@link https://developers.sherlock.com/api-docs/calendar-event/#get-all-calendar-events-for-current-person/ Sherl SDK documentation} for further information.
   */
  public getCalendarEventsForCurrentPerson = this.withFetcher(
    getCalendarEventsForCurrentPerson,
  );

  /**
   * Retrieves calendar events by calendar ID.
   *
   * @param {string} calendarId - The ID of the calendar to retrieve events from.
   * @param {ICalendarEventFilterDto} filter - The filter to apply when retrieving events.
   * @return {Promise<ISearchResult<ICalendarEvent>>} A promise that resolves to the search result of calendar events.
   * @see {@link https://developers.sherlock.com/api-docs/calendar-event/#Get-all-calendar-events/ Sherl SDK documentation} for further information.
   */
  public getCalendarEventsByCalendarId = this.withFetcher(
    getCalendarEventsByCalendarId,
  );

  /**
   * Retrieves a calendar event by its ID.
   *
   * @param {ICalendarEventFilterDto} eventId - The ID of the calendar event to retrieve.
   * @return {Promise<ICalendarEvent>} - The retrieved calendar event.
   * @see {@link https://developers.sherlock.com/api-docs/calendar-event/#Get-a-calendar-event-with-its-id/ Sherl SDK documentation} for further information.
   */
  public getCalendarEventById = this.withFetcher(getCalendarEventsByCalendarId);

  /**
   * Retrieves calendar events for a specific owner.
   *
   * @param {ICalendarEventFilterDto} filter - The filter object containing criteria for retrieving calendar events.
   * @return {Promise<ISearchResult<ICalendarEvent>>} A promise that resolves to the search result containing calendar events.
   * @see {@link https://developers.sherlock.com/api-docs/calendar-event/#get-all-calendar-events-for-calendar-owner-uri/ Sherl SDK documentation} for further information.
   */
  public getCalendarEventsForOwner = this.withFetcher(
    getCalendarEventsForOwner,
  );
}

export { CalendarProvider };
