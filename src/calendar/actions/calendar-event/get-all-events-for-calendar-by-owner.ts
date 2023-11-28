import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { ICalendarEvent } from '../../entities';
import { ISearchResult } from '../../../common';
import { ICalendarEventFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';

/**
 * Retrieves calendar events for a specific owner.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make API requests.
 * @param {ICalendarEventFilterDto} filter - The filter object containing criteria for retrieving calendar events.
 * @return {Promise<ISearchResult<ICalendarEvent>>} A promise that resolves to the search result containing calendar events.
 */
export const getCalendarEventsForOwner = async (
  fetcher: Fetcher,
  filter: ICalendarEventFilterDto,
): Promise<ISearchResult<ICalendarEvent>> => {
  try {
    const response = await fetcher.get<ISearchResult<ICalendarEvent>>(
      endpoints.GET_ALL_CALENDAR_EVENTS_FOR_OWNER,
      filter,
    );

    if (response.status >= 400) {
      throw errorFactory.create(
        CalendarErr.GET_CALENDAR_EVENTS_FOR_OWNER_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CalendarErr.GET_CALENDAR_EVENTS_FOR_OWNER_FAILED);
  }
};
