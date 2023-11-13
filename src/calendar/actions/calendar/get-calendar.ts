import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';

import { errorFactory, CalendarErr } from '../../errors/errors';
import { StringUtils } from '../../../common/utils/string';
import { ICalendar } from '../../entities';

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
      throw errorFactory.create(CalendarErr.FETCH_ONE_CALENDAR_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CalendarErr.FETCH_ONE_CALENDAR_FAILED);
  }
};
