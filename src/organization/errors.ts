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
  CREATE_OPENING_HOURS_SPECIFICATION_FAILED = 'organization/create-opening-hours-specification-failed',
  UPDATE_OPENING_HOURS_SPECIFICATION_FAILED = 'organization/update-opening-hours-specification-failed',
  DELETE_OPENING_HOURS_SPECIFICATION_FAILED = 'organization/delete-opening-hours-specification-failed',
  CREATE_EMPLOYEE_FAILED = 'organization/create-employee-failed',
  UPDATE_EMPLOYEE_FAILED = 'organization/update-employee-failed',
  DELETE_EMPLOYEE_FAILED = 'organization/delete-employee-failed',
  CREATE_FOUNDER_FAILED = 'organization/create-founder-failed',
  UPDATE_FOUNDER_FAILED = 'organization/update-founder-failed',
  DELETE_FOUNDER_FAILED = 'organization/delete-founder-failed',
  ADD_ADDRESS_FAILED = 'organization/add-address-failed',
  UPDATE_ADDRESS_FAILED = 'organization/update-address-failed',
  DELETE_ADDRESS_FAILED = 'organization/delete-address-failed',
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
  [OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FAILED]:
    'Failed to create opening hours specification',
  [OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FAILED]:
    'Failed to update opening hours specification',
  [OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FAILED]:
    'Failed to delete opening hours specification',
  [OrganizationErr.CREATE_EMPLOYEE_FAILED]: 'Failed to create employee',
  [OrganizationErr.UPDATE_EMPLOYEE_FAILED]: 'Failed to update employee',
  [OrganizationErr.DELETE_EMPLOYEE_FAILED]: 'Failed to delete employee',
  [OrganizationErr.CREATE_FOUNDER_FAILED]: 'Failed to create founder',
  [OrganizationErr.UPDATE_FOUNDER_FAILED]: 'Failed to update founder',
  [OrganizationErr.DELETE_FOUNDER_FAILED]: 'Failed to delete founder',
  [OrganizationErr.ADD_ADDRESS_FAILED]: 'Failed to add address',
  [OrganizationErr.UPDATE_ADDRESS_FAILED]: 'Failed to update address',
  [OrganizationErr.DELETE_ADDRESS_FAILED]: 'Failed to delete address',
};

export const errorFactory = new ErrorFactory<OrganizationErr>(
  'Organization',
  errors,
);
