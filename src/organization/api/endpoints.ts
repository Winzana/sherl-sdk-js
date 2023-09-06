export const endpoints = {
  GET_ORGANIZATION: '/api/organizations/:id',
  GET_ORGANIZATIONS: '/api/organizations',
  GET_PUBLIC_ORGANIZATIONS: '/api/public/organizations',
  GET_PUBLIC_ORGANIZATION_SLUG:
    '/api/public/organizations/find-one-by-slug/:slug',
  GET_PUBLIC_ORGANIZATION_ID: '/api/public/organizations/:id',
  ADD_ORGANIZATION_RIB: '/api/organizations/:id/rib',
  GET_ALL_ORGANIZATION_DOCUMENTS: '/api/organizations/:id/rib',
};
