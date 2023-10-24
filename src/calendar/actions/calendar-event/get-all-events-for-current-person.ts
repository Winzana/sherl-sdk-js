import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar-event/endpoints';
import { ICalendarEvent } from '../../entities';
import { ISearchResult } from '../../../common';
import { IGetCalendarEventForCurrentPersonInputDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';

export const getCalendarEventForCurrentPerson = async (
  fetcher: Fetcher,
  filter: IGetCalendarEventForCurrentPersonInputDto,
): Promise<ISearchResult<ICalendarEvent>> => {
  try {
    const response = await fetcher.get<ISearchResult<ICalendarEvent>>(
      endpoints.GET_CALENDAR_EVENT_FOR_CURRENT_PERSON,
      filter,
    );

    if (response.status >= 300) {
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
