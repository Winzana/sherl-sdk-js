import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import {
  IFindAvailabilitiesInputDto,
  IFindAvailabilitiesResult,
} from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { getSherlError } from '../../../common/utils';

/**
 * Finds calendar availabilities with a filter.
 *
 * @param {Fetcher} fetcher - The fetcher used for making API requests.
 * @param {IFindAvailabilitiesInputDto} filter - The filter to apply when finding availabilities.
 * @return {Promise<IFindAvailabilitiesResult>} A promise that resolves to the result of finding availabilities.
 */
export const findCalendarAvailabilitiesWithFilter = async (
  fetcher: Fetcher,
  filter: IFindAvailabilitiesInputDto,
): Promise<IFindAvailabilitiesResult> => {
  try {
    const response = await fetcher.get<IFindAvailabilitiesResult>(
      endpoints.GET_FIND_AVAILABILITIES,
      filter,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch (error.status) {
      case 403:
        throw errorFactory.create(
          CalendarErr.FIND_CALENDAR_AVAILABILITIES_FORBIDDEN,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(CalendarErr.FIND_CALENDAR_AVAILABILITIES_FAILED),
        );
    }
  }
};
