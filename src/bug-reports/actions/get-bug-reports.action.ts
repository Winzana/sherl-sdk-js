import { SherlError } from '../../common';
import { ISearchResult } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { BugReportsErr, errorFactory } from '../errors';
import { IBugReport } from '../types';
/**
 * Retrieves all the bug reports.
 *
 * @param {Fetcher} fetcher - The fetcher object used for making HTTP requests.
 * @return {Promise<ISearchResult<IBugReport>>} - A promise that resolves to the search result containing bug reports.
 */
export const getBugReports = async (
  fetcher: Fetcher,
): Promise<ISearchResult<IBugReport>> => {
  try {
    const response = await fetcher.get<ISearchResult<IBugReport>>(
      endpoints.BUG_REPORTS,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(BugReportsErr.GET_BUG_REPORTS_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(BugReportsErr.GET_BUG_REPORTS_FAILED),
        );
    }
  }
};
