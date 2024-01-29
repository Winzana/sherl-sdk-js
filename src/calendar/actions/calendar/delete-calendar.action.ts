import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/calendar/endpoints';
import { ICalendar } from '../../entities';
import { errorFactory, CalendarErr } from '../../errors/errors';

/**
 * Deletes a calendar.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make API calls.
 * @param {string} calendarId - The ID of the calendar to delete.
 * @return {Promise<ICalendar>} The deleted calendar object.
 */
export const deleteCalendar = async (
  fetcher: Fetcher,
  calendarId: string,
): Promise<ICalendar> => {
  try {
    const response = await fetcher.delete<ICalendar>(
      StringUtils.bindContext(endpoints.DELETE_CALENDAR, {
        calendarId,
      }),
      {},
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch (error.status) {
      case 403:
        throw errorFactory.create(CalendarErr.DELETE_CALENDAR_FORBIDDEN);
      case 404:
        throw errorFactory.create(CalendarErr.CALENDAR_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(CalendarErr.DELETE_CALENDAR_FAILED),
        );
    }
  }
};
