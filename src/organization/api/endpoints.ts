export const endpoints = {
  GET_ORGANIZATION: '/api/organizations/:id',
  GET_ORGANIZATIONS: '/api/organizations',
  GET_PUBLIC_ORGANIZATIONS: '/api/public/organizations',
  GET_PUBLIC_ORGANIZATION_SLUG:
    '/api/public/organizations/find-one-by-slug/:slug',
  GET_PUBLIC_ORGANIZATION_ID: '/api/public/organizations/:id',
  ADD_DOCUMENT: '/api/organizations/:organizationId/kycs',
  GET_DOCUMENTS: '/api/organizations/:organizationId/kycs',
  UPDATE_DOCUMENT: '/api/organizations/:organizationId/kycs/:documentId',
  ADD_RIB: 'api/organizations/:organizationId/rib',
  GET_RIB: 'api/organizations/:organizationId/rib',
  POST_SET_COMMUNICATION: '/api/organizations/:organizationId/communication',
  ADD_LOGO: '/api/organizations/:organizationId/logo/create/:logoId',
  DELETE_LOGO: '/api/organizations/:organizationId/logo/delete/:logoId',
};
