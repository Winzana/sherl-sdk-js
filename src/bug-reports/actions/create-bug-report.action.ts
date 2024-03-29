import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { BugReportsErr, errorFactory } from '../errors';
import { IBugReportInputDto, IBugReport } from '../types';

export const createBugReport = async (
  fetcher: Fetcher,
  bugReport: IBugReportInputDto,
) => {
  const response = await fetcher
    .post<IBugReport>(endpoints.BUG_REPORTS, bugReport)
    .catch((_err) => {
      throw errorFactory.create(BugReportsErr.CREATE_BUG_REPORT_FAILED);
    });
  if (response.status !== 201) {
    throw errorFactory.create(BugReportsErr.CREATE_BUG_REPORT_FAILED);
  }

  return response.data;
};
