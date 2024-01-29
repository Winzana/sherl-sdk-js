import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { BugReportsErr, errorFactory } from '../errors';
import { IBugReport } from '../types';
/**
 * Retrieves a bug report by its ID.
 *
 * @param {Fetcher} fetcher - The fetcher used to make HTTP requests.
 * @param {string} id - The ID of the bug report to retrieve.
 * @return {Promise<IBugReport>} A promise that resolves to the bug report.
 */
export const getBugReportById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IBugReport> => {
  try {
    const response = await fetcher.get<IBugReport>(
      StringUtils.bindContext(endpoints.BUG_REPORT_BY_ID, { id }),
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(BugReportsErr.GET_BUG_REPORT_BY_ID_FORBIDDEN);
      case 404:
        throw errorFactory.create(BugReportsErr.BUG_REPORT_NOT_FOUND);

      default:
        throw getSherlError(
          error,
          errorFactory.create(BugReportsErr.GET_BUG_REPORT_BY_ID_FAILED),
        );
    }
  }
};
