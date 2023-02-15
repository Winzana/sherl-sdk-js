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
  CREATE_BACKGROUND_IMAGE: '/api/organizations/:organizationId',
  CREATE_BACKGROUND_IMAGE_FROM_MEDIA:
    '/api/organizations/:organizationId/from-media',
  DELETE_BACKGROUND_IMAGE:
    '/api/organizations/:organizationId/background-image',
  CREATE_PICTURE: '/api/organizations/:organizationId/pictures/:pictureId',
  CREATE_PICTURE_FROM_MEDIA:
    '/api/organizations/:organizationId/pictures/:pictureId/from-media',
  DELETE_PICTURE: '/api/organizations/:organizationId/pictures/:pictureId',
  CREATE_OPENING_HOURS_SPECIFICATION:
    '/api/organizations/:organizationId/opening-hours-specification',
  UPDATE_OPENING_HOURS_SPECIFICATION:
    '/api/organizations/:organizationId/opening-hours-specification/:openingHoursSpecificationId',
  DELETE_OPENING_HOURS_SPECIFICATION:
    '/api/organizations/:organizationId/opening-hours-specification/:openingHoursSpecificationId',
};
