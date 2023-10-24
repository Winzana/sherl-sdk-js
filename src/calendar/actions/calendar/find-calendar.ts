import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/calendar/endpoints';
import { ICalendar } from '../../entities';
import { ISearchResult } from '../../../common';
import { ICalendarFilterDto } from '../../types';
import { errorFactory, CalendarErr } from '../../errors/errors';

export const findCalendarWithFilter = async (
  fetcher: Fetcher,
  filter: ICalendarFilterDto,
): Promise<ISearchResult<ICalendar>> => {
  try {
    const response = await fetcher.get<ISearchResult<ICalendar>>(
      endpoints.FIND_ONE_CALENDAR,
      filter,
    );

    if (response.status >= 300) {
      throw errorFactory.create(CalendarErr.FIND_ONE_CALENDAR_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CalendarErr.FIND_ONE_CALENDAR_FAILED);
  }
};
