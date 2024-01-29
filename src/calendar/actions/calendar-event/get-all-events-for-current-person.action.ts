import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { ICalendarEvent } from '../../entities';
import { ISearchResult } from '../../../common';
import { IGetCalendarEventsForCurrentPersonInputDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { getSherlError } from '../../../common/utils';

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

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch (error.status) {
      case 403:
        throw errorFactory.create(
          CalendarErr.GET_CALENDAR_EVENTS_FOR_CURRENT_PERSON_FORBIDDEN,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(
            CalendarErr.GET_CALENDAR_EVENTS_FOR_CURRENT_PERSON_FAILED,
          ),
        );
    }
  }
};
