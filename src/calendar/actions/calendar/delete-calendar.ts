import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/calendar/endpoints';
import { ICalendar } from '../../entities';
import { errorFactory, CalendarErr } from '../../errors/errors';

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

    if (response.status >= 300) {
      throw errorFactory.create(CalendarErr.DELETE_CALENDAR_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CalendarErr.DELETE_CALENDAR_FAILED);
  }
};
