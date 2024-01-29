import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { endpoints } from '../../api/calendar/endpoints';
import { ICalendar } from '../../entities';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { ICreateCalendarInputDto } from '../../types';

/**
 * Creates a calendar using the provided fetcher and calendar data.
 *
 * @param {Fetcher} fetcher - The fetcher used to make HTTP requests.
 * @param {ICreateCalendarInputDto} calendar - The input data for creating a calendar.
 * @return {Promise<ICalendar>} The created calendar.
 */
export const createCalendar = async (
  fetcher: Fetcher,
  calendar: ICreateCalendarInputDto,
): Promise<ICalendar> => {
  try {
    const response = await fetcher.post<ICalendar>(
      endpoints.POST_CALENDAR,
      calendar,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch (error.status) {
      case 403:
        throw errorFactory.create(CalendarErr.CREATE_CALENDAR_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(CalendarErr.CREATE_CALENDAR_FAILED),
        );
    }
  }
};
