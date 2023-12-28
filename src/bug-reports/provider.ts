import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { createBugReport, getBugReportById, getBugReports } from './actions';
import { errorFactory } from './errors';

class BugReportProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  /**
   * Creates a bug report.
   *
   * @param {IBugReportInputDto} bugReport - The bug report data.
   * @return {Promise<IBugReport>} The created bug report.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/bug-report#create-bug-report Sherl SDK documentation} for further information
   */
  public createBugReport = this.withFetcher(createBugReport);

  /**
   * Retrieves a bug report by its ID.
   *
   * @param {string} id - The ID of the bug report to retrieve.
   * @return {Promise<IBugReport>} A promise that resolves to the bug report.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/bug-report#get-all-bug-reports Sherl SDK documentation} for further information
   */
  public getBugReports = this.withFetcher(getBugReports);

  /**
   * Retrieves all the bug reports.
   *
   * @return {Promise<ISearchResult<IBugReport>>} - A promise that resolves to the search result containing bug reports.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/bug-report#get-bug-report-by-id Sherl SDK documentation} for further information
   */
  public getBugReportById = this.withFetcher(getBugReportById);
}

export { BugReportProvider };
