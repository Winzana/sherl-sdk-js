import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import { ICheckDatesDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { Availability } from '../../entities';
import { getSherlError } from '../../../common/utils';

/**
 * Retrieves availabilities from the calendar for a given set of dates.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make API requests.
 * @param {ICheckDatesDto} filter - The filter object containing the dates to check.
 * @return {Promise<Availability[]>} A promise that resolves to an array of availabilities.
 */
export const checkCalendarDates = async (
  fetcher: Fetcher,
  filter: ICheckDatesDto,
): Promise<Availability[]> => {
  try {
    const response = await fetcher.get<Availability[]>(
      endpoints.GET_CHECK_AVAILABILITIES_FOR_DATES,
      filter,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          CalendarErr.GET_AVAILABILITIES_FOR_DATES_CALENDAR_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(
          CalendarErr.GET_AVAILABILITIES_FOR_DATES_CALENDAR_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(
        CalendarErr.GET_AVAILABILITIES_FOR_DATES_CALENDAR_FAILED,
      ),
    );
  }
};
