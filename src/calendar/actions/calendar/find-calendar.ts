import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import { ICalendar } from '../../entities';
import { ICalendarFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { getSherlError } from '../../../common/utils';

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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(CalendarErr.FIND_ONE_CALENDAR_FORBIDDEN);
      default:
        throw errorFactory.create(CalendarErr.FIND_ONE_CALENDAR_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(CalendarErr.FIND_ONE_CALENDAR_FAILED),
    );
  }
};
