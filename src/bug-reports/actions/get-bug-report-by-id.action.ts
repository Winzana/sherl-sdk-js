import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { BugReportsErr, errorFactory } from '../errors';
import { IBugReport } from '../types';

export const getBugReportById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IBugReport> => {
  const response = await fetcher
    .get<IBugReport>(
      StringUtils.bindContext(endpoints.GET_BUG_REPORT_BY_ID, { id }),
    )
    .catch((_err) => {
      throw errorFactory.create(BugReportsErr.GET_BUG_REPORT_BY_ID_FAILED);
    });
  if (response.status !== 200) {
    throw errorFactory.create(BugReportsErr.GET_BUG_REPORT_BY_ID_FAILED);
  }
  return response.data;
};
