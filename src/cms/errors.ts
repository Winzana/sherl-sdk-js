import { ErrorFactory } from '../common/errors';

export enum CmsErr {
  CMS_CREATE_FAILED = 'bug-reports/cms-bug-report-failed',
}

export const errors = {
  [CmsErr.CMS_CREATE_FAILED]: 'Failed to cms report',
};

export const errorFactory = new ErrorFactory<CmsErr>('CMS', errors);
