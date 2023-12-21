import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { ICalendarEvent } from '../../entities';
import { ICalendarEventFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { StringUtils } from '../../../common/utils/string';
import { getSherlError } from '../../../common/utils';

/**
 * Retrieves a calendar event by its ID.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make API requests.
 * @param {ICalendarEventFilterDto} eventId - The ID of the calendar event to retrieve.
 * @return {Promise<ICalendarEvent>} - The retrieved calendar event.
 */
export const getCalendarEventById = async (
  fetcher: Fetcher,
  eventId: ICalendarEventFilterDto,
): Promise<ICalendarEvent> => {
  try {
    const response = await fetcher.get<ICalendarEvent>(
      StringUtils.bindContext(endpoints.GET_ONE_CALENDAR_EVENT, {
        eventId,
      }),
      {},
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          CalendarErr.GET_CALENDAR_EVENT_BY_ID_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(CalendarErr.CALENDAR_EVENT_NOT_FOUND);
      default:
        throw errorFactory.create(CalendarErr.GET_CALENDAR_EVENT_BY_ID_FAILED);
    }
    return response.data;
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(CalendarErr.GET_CALENDAR_EVENT_BY_ID_FAILED),
    );
  }
};
