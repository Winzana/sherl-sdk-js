import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { CalendarEvent } from '../../entities';
import { ICalendarEventFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { StringUtils } from '../../../common/utils/string';

export const getCalendarEventsEventsWithCalendarId = async (
  fetcher: Fetcher,
  eventId: ICalendarEventFilterDto,
): Promise<CalendarEvent> => {
  try {
    const response = await fetcher.get<CalendarEvent>(
      StringUtils.bindContext(endpoints.GET_ONE_CALENDAR_EVENTS, {
        eventId,
      }),
      {},
    );

    if (response.status !== 200) {
      throw errorFactory.create(CalendarErr.FETCH_CALENDAR_EVENT_BY_ID_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CalendarErr.FETCH_CALENDAR_EVENT_BY_ID_FAILED);
  }
};
