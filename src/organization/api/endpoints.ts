export const endpoints = {
  GET_ORGANIZATION: '/api/organizations/:id',
  GET_ORGANIZATIONS: '/api/organizations',
  GET_PUBLIC_ORGANIZATIONS: '/api/public/organizations',
  GET_PUBLIC_ORGANIZATION_SLUG:
    '/api/public/organizations/find-one-by-slug/:slug',
  GET_PUBLIC_ORGANIZATION_ID: '/api/public/organizations/:id',
  ADD_DOCUMENT: '/api/organizations/:id/kycs',
  GET_DOCUMENTS: '/api/organizations/:id/kycs',
  UPDATE_DOCUMENT: '/api/organizations/:organizationId/kycs/:documentId',
  ADD_RIB: '/api/organizations/:id/rib',
  GET_RIB: '/api/organizations/:id/rib',
  POST_SET_COMMUNICATION: '/api/organizations/:organizationId/communication',
  ADD_LOGO: '/api/organizations/:id/logo/create/:mediaId',
  DELETE_LOGO: '/api/organizations/:id/logo/',
  CREATE_BACKGROUND_IMAGE: '/api/organizations/:organizationId',
  CREATE_BACKGROUND_IMAGE_FROM_MEDIA:
    '/api/organizations/:organizationId/background-image/create/3835d8aa-469a-4702-9721-2f80f0c192df/from-media',
  DELETE_BACKGROUND_IMAGE:
    '/api/organizations/:organizationId/background-image',
  CREATE_PICTURE: '/api/organizations/:organizationId/pictures/:pictureId',
  CREATE_PICTURE_FROM_MEDIA:
    '/api/organizations/:id/pictures/:mediaId/from-media',
  DELETE_PICTURE: '/api/organizations/:id/pictures/:mediaId',
  CREATE_OPENING_HOURS_SPECIFICATION:
    '/api/organizations/:organizationId/opening-hours-specification',
  UPDATE_OPENING_HOURS_SPECIFICATION:
    '/api/organizations/:organizationId/opening-hours-specification/:id',
  DELETE_OPENING_HOURS_SPECIFICATION:
    '/api/organizations/:organizationId/opening-hours-specification/:id',
  CREATE_EMPLOYEE: '/api/organizations/:id/employees',
  UPDATE_EMPLOYEE: '/api/organizations/:id/employees/:employeeId',
  DELETE_EMPLOYEE: '/api/organizations/:id/employees/:employeeId',
  CREATE_FOUNDER: '/api/organizations/:id/founders',
  UPDATE_FOUNDER: '/api/organizations/:id/founders/:founderId',
  DELETE_FOUNDER: '/api/organizations/:id/founders/:founderId',
  ADD_ADDRESS: '/api/organizations/:organizationId/addresses',
  UPDATE_ADDRESS: '/api/organizations/:organizationId/addresses/:addressId',
  DELETE_ADDRESS: '/api/organizations/:organizationId/addresses/:addressId',
  CREATE_ORGANIZATION: '/api/organizations',
  REGISTER_ORGANIZATION: '/api/organizations/register',
  REGISTER_ORGANIZATION_TO_PERSON: '/api/organizations/register-to-person',
  SUGGEST_ORGANIZATION: '/api/organizations/suggest',
  UPDATE_ORGANIZATION: '/api/organizations/:id',
  UPDATE_IS_PUBLIC_ORGANIZATION: '/api/organizations/:organizationId',
  ENABLE_ROAMING: '/api/organizations/:organizationId/enable-roaming',
  DISABLE_ROAMING: '/api/organizations/:organizationId/disable-roaming',
  UPDATE_THIRD_PARTY: '/api/organizations/:organizationId',
  ACTIVATE_ORGANIZATION_SERVICE: '/api/organizations/:id/activate-the-service',
  TEMPORARY_SUSPEND_ORGANIZATION_SERVICE:
    '/api/organizations/:id/temporarily-suspend-the-service',
};
