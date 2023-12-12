import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';

import { errorFactory, CalendarErr } from '../../errors/errors';
import { StringUtils } from '../../../common/utils/string';
import { ICalendar } from '../../entities';
import { getSherlError } from '../../../common/utils';

/**
 * Retrieves a calendar by its ID.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make the API request.
 * @param {string} calendarId - The ID of the calendar to retrieve.
 * @return {Promise<ICalendar>} A promise that resolves to the retrieved calendar.
 */
export const getCalendarById = async (
  fetcher: Fetcher,
  calendarId: string,
): Promise<ICalendar> => {
  try {
    const response = await fetcher.get<ICalendar>(
      StringUtils.bindContext(endpoints.GET_CALENDAR_WITH_ID, {
        calendarId,
      }),
      {},
    );

    if (response.status >= 400) {
      throw errorFactory.create(CalendarErr.GET_ONE_CALENDAR_FAILED);
    }

    return response.data;
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(CalendarErr.GET_ONE_CALENDAR_FAILED),
    );
  }
};
