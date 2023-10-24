import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import { ICalendarEvent } from '../../entities';
import { ICalendarFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { StringUtils } from '../../../common/utils/string';

export const getCalendarWithId = async (
  fetcher: Fetcher,
  eventId: ICalendarFilterDto,
): Promise<ICalendarEvent> => {
  try {
    const response = await fetcher.get<ICalendarEvent>(
      StringUtils.bindContext(endpoints.GET_CALENDAR_WITH_ID, {
        eventId,
      }),
      {},
    );

    if (response.status >= 300) {
      throw errorFactory.create(CalendarErr.FETCH_ONE_CALENDAR_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CalendarErr.FETCH_ONE_CALENDAR_FAILED);
  }
};
