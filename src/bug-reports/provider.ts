import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { createBugReport, getBugReportById, getBugReports } from './actions';
import { errorFactory } from './errors';

class BugReportProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  public createBugReport = this.withFetcher(createBugReport);
  public getBugReports = this.withFetcher(getBugReports);
  public getBugReportById = this.withFetcher(getBugReportById);
}

export { BugReportProvider };
