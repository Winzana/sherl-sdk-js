import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/calendar/endpoints';
import { ICalendar } from '../../entities';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { IUpdateCalendarInputDto } from '../../types';

/**
 * Updates the calendar with the specified ID.
 *
 * @param {Fetcher} fetcher - The fetcher used to make API requests.
 * @param {string} calendarId - The ID of the calendar to update.
 * @param {IUpdateCalendarInputDto} calendarData - The data to update the calendar with.
 * @return {Promise<ICalendar>} The updated calendar.
 */
export const updateCalendar = async (
  fetcher: Fetcher,
  calendarId: string,
  calendarData: IUpdateCalendarInputDto,
): Promise<ICalendar> => {
  try {
    const response = await fetcher.put<ICalendar>(
      StringUtils.bindContext(endpoints.UPDATE_CALENDAR, {
        calendarId,
      }),
      calendarData,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch (error.status) {
      case 403:
        throw errorFactory.create(CalendarErr.UPDATE_CALENDAR_FORBIDDEN);
      case 404:
        throw errorFactory.create(CalendarErr.CALENDAR_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(CalendarErr.UPDATE_CALENDAR_FAILED),
        );
    }
  }
};
