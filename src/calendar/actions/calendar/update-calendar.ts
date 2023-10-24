import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/calendar/endpoints';
import { ICalendar } from '../../entities';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { IUpdateCalendarInputDto } from '../../types';

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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(CalendarErr.UPDATE_CALENDAR_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(CalendarErr.UPDATE_CALENDAR_FAILED_NOT_EXIST);
      default:
        throw errorFactory.create(CalendarErr.UPDATE_CALENDAR_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(CalendarErr.UPDATE_CALENDAR_FAILED);
  }
};
