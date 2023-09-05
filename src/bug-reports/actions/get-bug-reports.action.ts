import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { BugReportsErr, errorFactory } from '../errors';
import { IBugReport } from '../types';

export const getBugReports = async (
  fetcher: Fetcher,
): Promise<IBugReport[]> => {
  const response = await fetcher
    .get<IBugReport[]>(endpoints.GET_BUG_REPORTS)
    .catch((_err) => {
      throw errorFactory.create(BugReportsErr.GET_BUG_REPORTS_FAILED);
    });
  if (response.status !== 200) {
    throw errorFactory.create(BugReportsErr.GET_BUG_REPORTS_FAILED);
  }

  return response.data;
};
