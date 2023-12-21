import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import { ICheckLocationInputDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { getSherlError } from '../../../common/utils';

/**
 * Checks the availability of a location for the calendar.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make API requests.
 * @param {ICheckLocationInputDto} filter - The filter object containing the location details.
 * @return {Promise<boolean>} A promise that resolves to a boolean indicating the availability of the location.
 */
export const checkLocationForCalendar = async (
  fetcher: Fetcher,
  filter: ICheckLocationInputDto,
): Promise<boolean> => {
  try {
    const response = await fetcher.get<boolean>(
      endpoints.GET_CHECK_LOCATION_AVAILABILITIY,
      filter,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          CalendarErr.GET_AVAILABILITIY_FOR_LOCATION_CALENDAR_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(
          CalendarErr.GET_AVAILABILITIY_FOR_LOCATION_CALENDAR_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(
        CalendarErr.GET_AVAILABILITIY_FOR_LOCATION_CALENDAR_FAILED,
      ),
    );
  }
};
