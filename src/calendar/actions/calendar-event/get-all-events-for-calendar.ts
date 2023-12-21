import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { ICalendarEvent } from '../../entities';
import { ISearchResult } from '../../../common';
import { ICalendarEventFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { StringUtils } from '../../../common/utils/string';
import { getSherlError } from '../../../common/utils';

/**
 * Retrieves calendar events by calendar ID.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make HTTP requests.
 * @param {string} calendarId - The ID of the calendar to retrieve events from.
 * @param {ICalendarEventFilterDto} filter - The filter to apply when retrieving events.
 * @return {Promise<ISearchResult<ICalendarEvent>>} A promise that resolves to the search result of calendar events.
 */
export const getCalendarEventsByCalendarId = async (
  fetcher: Fetcher,
  calendarId: string,
  filter: ICalendarEventFilterDto,
): Promise<ISearchResult<ICalendarEvent>> => {
  try {
    const response = await fetcher.get<ISearchResult<ICalendarEvent>>(
      StringUtils.bindContext(endpoints.GET_CALENDAR_EVENTS_WITH_CALENDAR_ID, {
        calendarId,
      }),
      filter,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          CalendarErr.GET_CALENDAR_EVENTS_WITH_CALENDAR_ID_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(CalendarErr.CALENDAR_NOT_FOUND);
      default:
        throw errorFactory.create(
          CalendarErr.GET_CALENDAR_EVENTS_WITH_CALENDAR_ID_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(
        CalendarErr.GET_CALENDAR_EVENTS_WITH_CALENDAR_ID_FAILED,
      ),
    );
  }
};
