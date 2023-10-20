import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/calendar-event/endpoints';
import { CalendarEvent } from '../../entities';
import { errorFactory, CalendarErr } from '../../errors/errors';

export const createCalendarEvents = async (
  fetcher: Fetcher,
  calendarId: string,
): Promise<CalendarEvent> => {
  try {
    const response = await fetcher.post<CalendarEvent>(
      StringUtils.bindContext(endpoints.CREATE_CALENDAR_EVENT, {
        calendarId,
      }),
      {},
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          CalendarErr.CREATE_CALENDAR_EVENT_FAILED_FORBIDDEN,
        );
        break;
      case 404:
        throw errorFactory.create(
          CalendarErr.CREATE_CALENDAR_EVENT_FAILED_CALENDAR_NOT_EXIST,
        );
        break;
      case 409:
        throw errorFactory.create(
          CalendarErr.CREATE_CALENDAR_EVENT_FAILED_EVENT_ALREADY_EXIST,
        );
        break;
      default:
        throw errorFactory.create(CalendarErr.CREATE_CALENDAR_EVENT_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CalendarErr.CREATE_CALENDAR_EVENT_FAILED);
  }
};
