import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { ICalendarEvent } from '../../entities';
import { ICalendarEventFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { StringUtils } from '../../../common/utils/string';

export const getCalendarEventsById = async (
  fetcher: Fetcher,
  eventId: ICalendarEventFilterDto,
): Promise<ICalendarEvent> => {
  try {
    const response = await fetcher.get<ICalendarEvent>(
      StringUtils.bindContext(endpoints.GET_ONE_CALENDAR_EVENT, {
        eventId,
      }),
      {},
    );

    if (response.status >= 400) {
      throw errorFactory.create(CalendarErr.FETCH_CALENDAR_EVENT_BY_ID_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CalendarErr.FETCH_CALENDAR_EVENT_BY_ID_FAILED);
  }
};
