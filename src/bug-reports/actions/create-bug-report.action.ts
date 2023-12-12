import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { BugReportsErr, errorFactory } from '../errors';
import { IBugReportInputDto, IBugReport } from '../types';

export const createBugReport = async (
  fetcher: Fetcher,
  bugReport: IBugReportInputDto,
) => {
  try {
    const response = await fetcher.post<IBugReport>(
      endpoints.BUG_REPORTS,
      bugReport,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(BugReportsErr.CREATE_BUG_REPORT_FORBIDDEN);
      case 404:
        throw errorFactory.create(BugReportsErr.CREATE_BUG_REPORT_NOT_FOUND);

      default:
        throw errorFactory.create(BugReportsErr.CREATE_BUG_REPORT_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(BugReportsErr.CREATE_BUG_REPORT_FAILED),
    );
  }
};
