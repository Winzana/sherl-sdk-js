import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import { ICalendar } from '../../entities';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { ICreateCalendarInputDto } from '../../types';

export const createCalendar = async (
  fetcher: Fetcher,
  calendar: ICreateCalendarInputDto,
): Promise<ICalendar> => {
  try {
    const response = await fetcher.post<ICalendar>(
      endpoints.POST_CALENDAR,
      calendar,
    );

    if (response.status >= 400) {
      throw errorFactory.create(CalendarErr.CREATE_CALENDAR_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CalendarErr.CREATE_CALENDAR_FAILED);
  }
};
