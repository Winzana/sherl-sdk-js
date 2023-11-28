import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { ICalendarEvent } from '../../entities';
import { ISearchResult } from '../../../common';
import { IGetCalendarEventsForCurrentPersonInputDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';

/**
 * Retrieves calendar events for the current person.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make API calls.
 * @param {IGetCalendarEventsForCurrentPersonInputDto} filter - The filter object used to specify the search criteria for the calendar events.
 * @return {Promise<ISearchResult<ICalendarEvent>>} A promise that resolves to a search result containing the calendar events.
 */
export const getCalendarEventsForCurrentPerson = async (
  fetcher: Fetcher,
  filter: IGetCalendarEventsForCurrentPersonInputDto,
): Promise<ISearchResult<ICalendarEvent>> => {
  try {
    const response = await fetcher.get<ISearchResult<ICalendarEvent>>(
      endpoints.GET_CALENDAR_EVENTS_FOR_CURRENT_PERSON,
      filter,
    );

    if (response.status >= 400) {
      throw errorFactory.create(
        CalendarErr.GET_CALENDAR_EVENTS_FOR_CURRENT_PERSON_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(
      CalendarErr.GET_CALENDAR_EVENTS_FOR_CURRENT_PERSON_FAILED,
    );
  }
};
