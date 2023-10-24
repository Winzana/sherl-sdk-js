import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { ICalendarEvent } from '../../entities';
import { ISearchResult } from '../../../common';
import { ICalendarEventFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';

export const getCalendarEventForOwner = async (
  fetcher: Fetcher,
  filter: ICalendarEventFilterDto,
): Promise<ISearchResult<ICalendarEvent>> => {
  try {
    const response = await fetcher.get<ISearchResult<ICalendarEvent>>(
      endpoints.GET_ALL_CALENDAR_EVENTS_FOR_OWNER,
      filter,
    );

    if (response.status >= 300) {
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
