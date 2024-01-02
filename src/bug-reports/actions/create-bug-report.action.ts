import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { BugReportsErr, errorFactory } from '../errors';
import { IBugReportInputDto, IBugReport } from '../types';
/**
 * Creates a bug report.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make HTTP requests.
 * @param {IBugReportInputDto} bugReport - The bug report data.
 * @return {Promise<IBugReport>} The created bug report.
 */
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
