import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import { ICheckDatesDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { Availability } from '../../entities';
import { filterSherlError } from '../../../common/utils';

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

    if (response.status >= 400) {
      throw errorFactory.create(
        CalendarErr.GET_AVAILABILITIES_FOR_DATES_CALENDAR_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(
        CalendarErr.GET_AVAILABILITIES_FOR_DATES_CALENDAR_FAILED,
      ),
    );
    throw filteredError;
  }
};
