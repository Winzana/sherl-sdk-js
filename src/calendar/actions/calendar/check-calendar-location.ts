import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import { ICheckLocationInputDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';

export const checkLocationForCalendar = async (
  fetcher: Fetcher,
  filter: ICheckLocationInputDto,
): Promise<boolean> => {
  try {
    const response = await fetcher.get<boolean>(
      endpoints.GET_CHECK_LOCATION_AVAILABILITIES,
      filter,
    );

    if (response.status >= 400) {
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
