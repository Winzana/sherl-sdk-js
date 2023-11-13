import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import { ICalendar } from '../../entities';
import { ICalendarFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';

export const findOneCalendarWithFilter = async (
  fetcher: Fetcher,
  filter: ICalendarFilterDto,
): Promise<ICalendar> => {
  try {
    const response = await fetcher.get<ICalendar>(
      endpoints.FIND_ONE_CALENDAR,
      filter,
    );

    if (response.status >= 400) {
      throw errorFactory.create(CalendarErr.FIND_ONE_CALENDAR_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CalendarErr.FIND_ONE_CALENDAR_FAILED);
  }
};
