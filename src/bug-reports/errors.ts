import { ErrorFactory } from '../common/errors';

export enum BugReportsErr {
  CREATE_BUG_REPORT_FAILED = 'bug-reports/create-bug-report-failed',
  CREATE_BUG_REPORT_FORBIDDEN = 'bug-reports/create-bug-report-forbidden',
  GET_BUG_REPORTS_FAILED = 'bug-reports/get-bug-reports-failed',
  GET_BUG_REPORTS_FORBIDDEN = 'bug-reports/get-bug-reports-forbidden',
  GET_BUG_REPORT_BY_ID_FAILED = 'bug-reports/get-bug-report-by-id-failed',
  GET_BUG_REPORT_BY_ID_FORBIDDEN = 'bug-reports/get-bug-report-by-id-forbidden',
  BUG_REPORT_NOT_FOUND = 'bug-reports/bug-report-not-found',
}

export const errors = {
  [BugReportsErr.CREATE_BUG_REPORT_FAILED]: 'Failed to create bug report',
  [BugReportsErr.CREATE_BUG_REPORT_FORBIDDEN]:
    'Failed to create bug report, forbidden',
  [BugReportsErr.GET_BUG_REPORTS_FAILED]: 'Failed to get bug reports',
  [BugReportsErr.GET_BUG_REPORTS_FORBIDDEN]:
    'Failed to get bug reports, forbidden',
  [BugReportsErr.GET_BUG_REPORT_BY_ID_FAILED]: 'Failed to get bug report by id',
  [BugReportsErr.GET_BUG_REPORT_BY_ID_FORBIDDEN]:
    'Failed to get bug report by id, forbidden',
  [BugReportsErr.BUG_REPORT_NOT_FOUND]:
    'Failed to get bug report, id not found',
};

export const errorFactory = new ErrorFactory<BugReportsErr>(
  'Bug reports',
  errors,
);
