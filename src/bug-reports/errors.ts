import { ErrorFactory } from '../common/errors';

export enum BugReportsErr {
  CREATE_BUG_REPORT_FAILED = 'bug-reports/create-bug-report-failed',
  GET_BUG_REPORTS_FAILED = 'bug-reports/get-bug-reports-failed',
  GET_BUG_REPORT_BY_ID_FAILED = 'bug-reports/get-bug-reports-failed',
}

export const errors = {
  [BugReportsErr.CREATE_BUG_REPORT_FAILED]: 'Failed to create bug report',
  [BugReportsErr.GET_BUG_REPORTS_FAILED]: 'Failed to get bug reports',
  [BugReportsErr.GET_BUG_REPORT_BY_ID_FAILED]: 'Failed to get bug report by id',
};

export const errorFactory = new ErrorFactory<BugReportsErr>(
  'Bug reports',
  errors,
);
