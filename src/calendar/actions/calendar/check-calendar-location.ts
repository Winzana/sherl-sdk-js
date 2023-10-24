import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import { ICheckLocationInputDto, ICheckLocationResult } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';

export const checkCalendarLocation = async (
  fetcher: Fetcher,
  filter: ICheckLocationInputDto,
): Promise<ICheckLocationResult[]> => {
  try {
    const response = await fetcher.get<ICheckLocationResult[]>(
      endpoints.GET_CHECK_LOCATION_AVAILABILITIES,
      filter,
    );

    if (response.status >= 300) {
      throw errorFactory.create(
        CalendarErr.FETCH_AVAILABILITIES_FOR_LOCATION_CALENDAR_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(
      CalendarErr.FETCH_AVAILABILITIES_FOR_LOCATION_CALENDAR_FAILED,
    );
  }
};
