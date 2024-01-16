import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/calendar-event/endpoints';
import { ICalendarEvent } from '../../entities';
import { errorFactory, CalendarErr } from '../../errors/errors';

/**
 * Deletes a calendar event.
 *
 * @param {Fetcher} fetcher - The fetcher used to make API requests.
 * @param {string} calendarId - The ID of the calendar.
 * @param {string} eventId - The ID of the event to be deleted.
 * @return {Promise<ICalendarEvent>} A Promise that resolves to the deleted calendar event.
 */
export const deleteCalendarEvent = async (
  fetcher: Fetcher,
  calendarId: string,
  eventId: string,
): Promise<ICalendarEvent> => {
  try {
    const response = await fetcher.delete<ICalendarEvent>(
      StringUtils.bindContext(endpoints.DELETE_CALENDAR_EVENT, {
        calendarId,
        eventId,
      }),
      {},
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          CalendarErr.UPDATE_CALENDAR_EVENT_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(CalendarErr.CALENDAR_NOT_FOUND);
      default:
        throw errorFactory.create(CalendarErr.UPDATE_CALENDAR_EVENT_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(CalendarErr.UPDATE_CALENDAR_EVENT_FAILED),
    );
  }
};
