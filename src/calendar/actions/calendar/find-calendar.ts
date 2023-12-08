import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import { ICalendar } from '../../entities';
import { ICalendarFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { filterSherlError } from '../../../common/utils';

/**
 * Retrieves a calendar that matches the specified filter criteria.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make API requests.
 * @param {ICalendarFilterDto} filter - The filter criteria used to search for a calendar.
 * @returns {Promise<ICalendar>} A promise that resolves to the found calendar.
 */
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
    const filteredError = filterSherlError(
      error,
      errorFactory.create(CalendarErr.FIND_ONE_CALENDAR_FAILED),
    );
    throw filteredError;
  }
};
