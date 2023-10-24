import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/calendar-event/endpoints';
import { ICalendarEvent } from '../../entities';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { IUpdateCalendarEventInputDto } from '../../types';

export const updateCalendarEvent = async (
  fetcher: Fetcher,
  calendarId: string,
  eventId: string,
  calendarEventData: IUpdateCalendarEventInputDto,
): Promise<ICalendarEvent> => {
  try {
    const response = await fetcher.put<ICalendarEvent>(
      StringUtils.bindContext(endpoints.CREATE_CALENDAR_EVENT, {
        calendarId,
        eventId,
      }),
      calendarEventData,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          CalendarErr.UPDATE_CALENDAR_EVENT_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(
          CalendarErr.CREATE_CALENDAR_EVENT_FAILED_CALENDAR_NOT_EXIST,
        );
      default:
        throw errorFactory.create(CalendarErr.UPDATE_CALENDAR_EVENT_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(CalendarErr.UPDATE_CALENDAR_EVENT_FAILED);
  }
};
