import { Pagination } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { BugReportsErr, errorFactory } from '../errors';
import { IBugReport } from '../types';

export const getBugReports = async (
  fetcher: Fetcher,
): Promise<Pagination<IBugReport>> => {
  const response = await fetcher
    .get<Pagination<IBugReport>>(endpoints.BUG_REPORTS)
    .catch((_err) => {
      throw errorFactory.create(BugReportsErr.GET_BUG_REPORTS_FAILED);
    });
  if (response.status !== 200) {
    throw errorFactory.create(BugReportsErr.GET_BUG_REPORTS_FAILED);
  }

  return response.data;
};
