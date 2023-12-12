import { ISearchResult } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { BugReportsErr, errorFactory } from '../errors';
import { IBugReport } from '../types';

export const getBugReports = async (
  fetcher: Fetcher,
): Promise<ISearchResult<IBugReport>> => {
  try {
    const response = await fetcher.get<ISearchResult<IBugReport>>(
      endpoints.BUG_REPORTS,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(BugReportsErr.GET_BUG_REPORTS_FORBIDDEN);
      case 404:
        throw errorFactory.create(BugReportsErr.GET_BUG_REPORTS_NOT_FOUND);

      default:
        throw errorFactory.create(BugReportsErr.GET_BUG_REPORTS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(BugReportsErr.GET_BUG_REPORTS_FAILED),
    );
  }
};
