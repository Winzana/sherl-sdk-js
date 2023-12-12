import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { BugReportsErr, errorFactory } from '../errors';
import { IBugReport } from '../types';

export const getBugReportById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IBugReport> => {
  try {
    const response = await fetcher.get<IBugReport>(
      StringUtils.bindContext(endpoints.BUG_REPORT_BY_ID, { id }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(BugReportsErr.GET_BUG_REPORT_BY_ID_FORBIDDEN);
      case 404:
        throw errorFactory.create(BugReportsErr.GET_BUG_REPORT_BY_ID_NOT_FOUND);

      default:
        throw errorFactory.create(BugReportsErr.GET_BUG_REPORT_BY_ID_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(BugReportsErr.GET_BUG_REPORT_BY_ID_FAILED),
    );
  }
};
