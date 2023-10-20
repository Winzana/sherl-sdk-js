import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { CalendarEvent } from '../../entities';
import { ISearchResult } from '../../../common';
import { ICalendarEventFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';

export const getCalendarEventForCurrentPerson = async (
  fetcher: Fetcher,
  filter: ICalendarEventFilterDto,
): Promise<ISearchResult<CalendarEvent>> => {
  try {
    const response = await fetcher.get<ISearchResult<CalendarEvent>>(
      endpoints.GET_CALENDAR_EVENT_FOR_CURRENT_PERSON,
      filter,
    );

    if (response.status !== 200) {
      throw errorFactory.create(
        CalendarErr.GET_CALENDAR_EVENT_FOR_CURRENT_PERSON_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(
      CalendarErr.GET_CALENDAR_EVENT_FOR_CURRENT_PERSON_FAILED,
    );
  }
};
