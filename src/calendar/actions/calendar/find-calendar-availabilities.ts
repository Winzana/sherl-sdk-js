import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import {
  IFindAvailabilitiesInputDto,
  IFindAvailabilitiesResult,
} from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';

export const findCalendarAvailabilitiesWithFilter = async (
  fetcher: Fetcher,
  filter: IFindAvailabilitiesInputDto,
): Promise<IFindAvailabilitiesResult> => {
  try {
    const response = await fetcher.get<IFindAvailabilitiesResult>(
      endpoints.GET_FIND_AVAILABILITIES,
      filter,
    );

    if (response.status >= 400) {
      throw errorFactory.create(
        CalendarErr.FIND_CALENDAR_AVAILABILITIES_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CalendarErr.FIND_CALENDAR_AVAILABILITIES_FAILED);
  }
};
