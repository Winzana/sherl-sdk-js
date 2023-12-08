import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils';
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

    if (response.status >= 400) {
      throw errorFactory.create(CalendarErr.DELETE_CALENDAR_FAILED);
    }

    return response.data;
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(CalendarErr.DELETE_CALENDAR_FAILED),
    );
    throw filteredError;
  }
};
