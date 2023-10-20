import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { CalendarEvent } from '../../entities';
import { ISearchResult } from '../../../common';
import { ICalendarEventFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';

export const getCalendarEventForOwnerUri = async (
  fetcher: Fetcher,
  filter: ICalendarEventFilterDto,
): Promise<ISearchResult<CalendarEvent>> => {
  try {
    const response = await fetcher.get<ISearchResult<CalendarEvent>>(
      endpoints.GET_ALL_CALENDAR_EVENTS_FOR_OWNER,
      filter,
    );

    if (response.status !== 200) {
      throw errorFactory.create(
        CalendarErr.FETCH_CALENDAR_EVENT_FOR_OWNER_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(
      CalendarErr.FETCH_CALENDAR_EVENT_FOR_OWNER_FAILED,
    );
  }
};
