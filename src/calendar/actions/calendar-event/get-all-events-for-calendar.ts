import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { ICalendarEvent } from '../../entities';
import { ISearchResult } from '../../../common';
import { ICalendarEventFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { StringUtils } from '../../../common/utils/string';

export const getCalendarEventsEventsWithCalendarId = async (
  fetcher: Fetcher,
  calendarId: string,
  filter: ICalendarEventFilterDto,
): Promise<ISearchResult<ICalendarEvent>> => {
  try {
    const response = await fetcher.get<ISearchResult<ICalendarEvent>>(
      StringUtils.bindContext(endpoints.GET_CALENDAR_EVENTS_WITH_CALENDAR_ID, {
        calendarId,
      }),
      filter,
    );

    if (response.status >= 300) {
      throw errorFactory.create(
        CalendarErr.FETCH_CALENDAR_EVENT_WITH_CALENDAR_ID_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(
      CalendarErr.FETCH_CALENDAR_EVENT_WITH_CALENDAR_ID_FAILED,
    );
  }
};
