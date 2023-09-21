import { ErrorFactory } from '../common/errors';

export enum OrganizationErr {
  FETCH_FAILED = 'organization/fetch-failed',
  NOT_FOUND = 'organization/not-found',
  FAILED_ADD_ORGANIZATION_RIB = 'organization/failed-to-add-rib',
}

export const errors = {
  [OrganizationErr.FETCH_FAILED]: 'Failed to fetch organization API',
  [OrganizationErr.NOT_FOUND]: 'Organization not found',
  [OrganizationErr.FAILED_ADD_ORGANIZATION_RIB]:
    'Failed to add organization rib',
};

export const errorFactory = new ErrorFactory<OrganizationErr>(
  'Organization',
  errors,
);
