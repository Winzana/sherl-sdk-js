import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/calendar-event/endpoints';
import { ICalendarEvent } from '../../entities';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { ICreateCalendarEventInputDto } from '../../types';

/**
 * Creates a calendar event using the provided fetcher, calendar ID, and calendar event data.
 *
 * @param {Fetcher} fetcher - the fetcher used to make the API call
 * @param {string} calendarId - the ID of the calendar
 * @param {ICreateCalendarEventInputDto} calendarEvent - the data for the calendar event
 * @return {Promise<ICalendarEvent>} a promise that resolves to the created calendar event
 */
export const createCalendarEvent = async (
  fetcher: Fetcher,
  calendarId: string,
  calendarEvent: ICreateCalendarEventInputDto,
): Promise<ICalendarEvent> => {
  try {
    const response = await fetcher.post<ICalendarEvent>(
      StringUtils.bindContext(endpoints.CREATE_CALENDAR_EVENT, {
        calendarId,
      }),
      calendarEvent,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch (error.status) {
      case 403:
        throw errorFactory.create(
          CalendarErr.CREATE_CALENDAR_EVENT_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(CalendarErr.CALENDAR_NOT_FOUND);
      case 409:
        throw errorFactory.create(
          CalendarErr.CREATE_CALENDAR_EVENT_FAILED_EVENT_ALREADY_EXIST,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(CalendarErr.CREATE_CALENDAR_EVENT_FAILED),
        );
    }
  }
};
