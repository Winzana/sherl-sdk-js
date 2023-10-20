import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { CalendarEvent } from '../../entities';
import { ISearchResult } from '../../../common';
import { ICalendarEventFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';
import { StringUtils } from '../../../common/utils/string';

export const getCalendarEventsEventsWithCalendarId = async (
  fetcher: Fetcher,
  calendarId: ICalendarEventFilterDto,
  filter: ICalendarEventFilterDto,
): Promise<ISearchResult<CalendarEvent>> => {
  try {
    const response = await fetcher.get<ISearchResult<CalendarEvent>>(
      StringUtils.bindContext(endpoints.GET_CALENDAR_EVENTS_WITH_CALENDAR_ID, {
        calendarId,
      }),
      filter,
    );

    if (response.status !== 200) {
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
