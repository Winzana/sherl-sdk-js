import { ErrorFactory } from '../common/errors';

export enum OrganizationErr {
  FETCH_FAILED = 'organization/fetch-failed',
  NOT_FOUND = 'organization/not-found',
  ADD_DOCUMENT_FAILED = 'organization/add-failed',
  UPDATE_DOCUMENT_FAILED = 'organization/update-failed',
  ADD_RIB_FAILED = 'organization/add-rib-failed',
  SET_COMMUNICATION_FAILED = 'organization/set-communication-failed',
  ADD_LOGO_FAILED = 'organization/add-logo-failed',
  DELETE_LOGO_FAILED = 'organization/delete-logo-failed',
  CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FAILED = 'organization/create-background-image-from-media-failed',
  CREATE_BACKGROUND_IMAGE_FAILED = 'organization/create-background-image-failed',
  DELETE_BACKGROUND_IMAGE_FAILED = 'organization/delete-background-image-failed',
  CREATE_PICTURE_FAILED = 'organization/create-picture-failed',
  CREATE_PICTURE_FROM_MEDIA_FAILED = 'organization/create-picture-from-media-failed',
  DELETE_PICTURE_FAILED = 'organization/delete-picture-failed',
}

export const errors = {
  [OrganizationErr.FETCH_FAILED]: 'Failed to fetch organization API',
  [OrganizationErr.NOT_FOUND]: 'Organization not found',
  [OrganizationErr.ADD_DOCUMENT_FAILED]: 'Failed to add document',
  [OrganizationErr.UPDATE_DOCUMENT_FAILED]: 'Failed to update document',
  [OrganizationErr.ADD_RIB_FAILED]: 'Failed to add RIB',
  [OrganizationErr.SET_COMMUNICATION_FAILED]: 'Failed to set communication',
  [OrganizationErr.ADD_LOGO_FAILED]: 'Failed to add logo',
  [OrganizationErr.DELETE_LOGO_FAILED]: 'Failed to delete logo',
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FAILED]:
    'Failed to create background image from media',
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_FAILED]:
    'Failed to create background image',
  [OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED]:
    'Failed to delete background image',
  [OrganizationErr.CREATE_PICTURE_FAILED]: 'Failed to create picture',
  [OrganizationErr.CREATE_PICTURE_FROM_MEDIA_FAILED]:
    'Failed to create picture from media',
  [OrganizationErr.DELETE_PICTURE_FAILED]: 'Failed to delete picture',
};

export const errorFactory = new ErrorFactory<OrganizationErr>(
  'Organization',
  errors,
);
