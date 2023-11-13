import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import { ICheckDatesDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { Availability } from '../../entities';

export const checkCalendarDates = async (
  fetcher: Fetcher,
  filter: ICheckDatesDto,
): Promise<Availability[]> => {
  try {
    const response = await fetcher.get<Availability[]>(
      endpoints.GET_CHECK_AVAILABILITIES_FOR_DATES,
      filter,
    );

    if (response.status >= 400) {
      throw errorFactory.create(
        CalendarErr.FETCH_AVAILABILITIES_FOR_DATES_CALENDAR_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(
      CalendarErr.FETCH_AVAILABILITIES_FOR_DATES_CALENDAR_FAILED,
    );
  }
};
