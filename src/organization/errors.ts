import { ErrorFactory } from '../common/errors';

export enum OrganizationErr {
  // FETCH
  FETCH_FAILED = 'organization/fetch-failed',
  NOT_FOUND = 'organization/not-found',
  FECTH_FORBIDDEN = 'organization/forbidden',

  ADD_DOCUMENT_FAILED = 'organization/add-failed',
  UPDATE_DOCUMENT_FAILED = 'organization/update-failed',
  ADD_RIB_FAILED = 'organization/add-rib-failed',
  GET_RIBS_FAILED = 'organization/fetch-documents-failed',
  SET_COMMUNICATION_FAILED = 'organization/set-communication-failed',
  ADD_LOGO_FAILED = 'organization/add-logo-failed',
  DELETE_LOGO_FAILED = 'organization/delete-logo-failed',
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

  // CREATE ORGANIZATION
  CREATE_ORGANIZATION_FAILED = 'organization/create-organization-failed',
  CREATE_ORGANIZATION_FORBIDDEN = 'organization/create-organization-forbidden',
  CREATE_ORGANIZATION_NOT_FOUND = 'organization/create-organization-not-found',
  CREATE_ORGANIZATION_ALREADY_EXISTS = 'organization/create-organization-already-exists',

  // CREATE BACKGROUND IMAGE FROM MEDIA
  CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FAILED = 'organization/create-background-image-from-media-failed',
  CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FORBIDDEN = 'organization/create-background-image-from-media-forbidden',
  CREATE_BACKGROUND_IMAGE_FROM_MEDIA_NOT_FOUND = 'organization/create-background-image-from-media-not-found',
  CREATE_BACKGROUND_IMAGE_FROM_MEDIA_ALREADY_EXISTS = 'organization/create-background-image-from-media-already-exists',

  // CREATE BACKGROUND IMAGE
  CREATE_BACKGROUND_IMAGE_FAILED = 'organization/create-background-image-failed',
  CREATE_BACKGROUND_IMAGE_FORBIDDEN = 'organization/create-background-image-forbidden',
  CREATE_BACKGROUND_IMAGE_NOT_FOUND = 'organization/create-background-image-not-found',
  CREATE_BACKGROUND_IMAGE_ALREADY_EXISTS = 'organization/create-background-image-already-exists',

  // ADD ADDRESS
  ADD_ADDRESS_FAILED = 'organization/add-address-failed',
  ADD_ADDRESS_FORBIDDEN = 'organization/add-address-forbidden',
  ADD_ADDRESS_NOT_FOUND = 'organization/add-address-not-found',
  ADD_ADDRESS_ALREADY_EXISTS = 'organization/add-address-already-exists',

  // REGISTER ORGANIZATION
  REGISTER_ORGANIZATION_FAILED = 'organization/register-organization-failed',

  // REGISTER ORGANIZATION TO PERSON
  REGISTER_ORGANIZATION_TO_PERSON_FAILED = 'organization/register-organization-to-person-failed',
  REGISTER_ORGANIZATION_TO_PERSON_FORBIDDEN = 'organization/register-organization-to-person-forbidden',
  REGISTER_ORGANIZATION_TO_PERSON_NOT_FOUND = 'organization/register-organization-to-person-not-found',
  REGISTER_ORGANIZATION_TO_PERSON_ALREADY_EXISTS = 'organization/register-organization-to-person-already-exists',

  // SUGGEST ORGANIZATION
  SUGGEST_ORGANIZATION_FAILED = 'organization/suggest-organization-failed',
  SUGGEST_ORGANIZATION_FORBIDDEN = 'organization/suggest-organization-forbidden',
  SUGGEST_ORGANIZATION_NOT_FOUND = 'organization/suggest-organization-not-found',

  // UPDATE ORGANIZATION
  UPDATE_ORGANIZATION_FAILED = 'organization/update-organization-failed',
  UPDATE_ORGANIZATION_FORBIDDEN = 'organization/update-organization-forbidden',
  UPDATE_ORGANIZATION_NOT_FOUND = 'organization/update-organization-not-found',

  // UPDATE ADDRESS
  UPDATE_ADDRESS_FAILED = 'organization/update-address-failed',
  UPDATE_ADDRESS_FORBIDDEN = 'organization/update-address-forbidden',
  UPDATE_ADDRESS_NOT_FOUND = 'organization/update-address-not-found',

  // DELETE ADDRESS
  DELETE_ADDRESS_FAILED = 'organization/delete-address-failed',
  DELETE_ADDRESS_FORBIDDEN = 'organization/delete-address-forbidden',
  DELETE_ADDRESS_NOT_FOUND = 'organization/delete-address-not-found',
  DELETE_ADDRESS_ALREADY_EXISTS = 'organization/delete-address-already-exists',

  // DELETE BACKGROUND IMAGE
  DELETE_BACKGROUND_IMAGE_FAILED = 'organization/delete-background-image-failed',
  DELETE_BACKGROUND_IMAGE_FORBIDDEN = 'organization/delete-background-image-forbidden',
  DELETE_BACKGROUND_IMAGE_NOT_FOUND = 'organization/delete-background-image-not-found',

  UPDATE_IS_PUBLIC_ORGANIZATION_FAILED = 'organization/update-is-public-organization-failed',
  ENABLE_ROAMING_FAILED = 'organization/enable-roaming-failed',
  DISABLE_ROAMING_FAILED = 'organization/disable-roaming-failed',
  UPDATE_THIRD_PARTY_FAILED = 'organization/update-third-party-failed',
  UPDATE_THIRD_PARTY_IMPOSSIBLE = 'organization/update-third-party-impossible',
  ADD_KYC_FAILED = 'organization/add-kyc-failed',
  GET_KYCS_FAILED = 'organization/get-kycs-failed',
}

export const errors = {
  // FETCH
  [OrganizationErr.FETCH_FAILED]: 'Failed to fetch organization API',
  [OrganizationErr.FECTH_FORBIDDEN]:
    'Failed to fetch organization API. Forbidden access',
  [OrganizationErr.NOT_FOUND]: 'Failed to fetch organization. Page not found',

  [OrganizationErr.ADD_DOCUMENT_FAILED]: 'Failed to add document',
  [OrganizationErr.UPDATE_DOCUMENT_FAILED]: 'Failed to update document',
  [OrganizationErr.ADD_RIB_FAILED]: 'Failed to add RIB',
  [OrganizationErr.SET_COMMUNICATION_FAILED]: 'Failed to set communication',
  [OrganizationErr.ADD_LOGO_FAILED]: 'Failed to add logo',
  [OrganizationErr.DELETE_LOGO_FAILED]: 'Failed to delete logo',

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

  // CREATE ORGANIZATION
  [OrganizationErr.CREATE_ORGANIZATION_FAILED]: 'Failed to create organization',
  [OrganizationErr.CREATE_ORGANIZATION_NOT_FOUND]:
    'Failed to create organization. Organization not found',
  [OrganizationErr.CREATE_ORGANIZATION_ALREADY_EXISTS]:
    'Failed to create organization. Organization already exists',
  [OrganizationErr.CREATE_ORGANIZATION_FORBIDDEN]:
    'Failed to create organization. Forbidden access',

  // CREATE BACKGROUND IMAGE FROM MEDIA
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FAILED]:
    'Failed to create background image from media',
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FORBIDDEN]:
    'Failed to create background image from media. Forbidden access',
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_NOT_FOUND]:
    'Failed to create background image from media. Media not found',
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_ALREADY_EXISTS]:
    'Failed to create background image from media. Background image already exists',

  // CREATE BACKGROUND IMAGE
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_FAILED]:
    'Failed to create background image',
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_FORBIDDEN]:
    'Failed to create background image. Forbidden access',
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_NOT_FOUND]:
    'Failed to create background image. Image not found',
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_ALREADY_EXISTS]:
    'Failed to create background image. Background image already exists',

  [OrganizationErr.REGISTER_ORGANIZATION_FAILED]:
    'Failed to register organization',
  [OrganizationErr.UPDATE_IS_PUBLIC_ORGANIZATION_FAILED]:
    'Failed to update isPublic organization',
  [OrganizationErr.ENABLE_ROAMING_FAILED]: 'Failed to enable roaming',
  [OrganizationErr.DISABLE_ROAMING_FAILED]: 'Failed to disable roaming',
  [OrganizationErr.UPDATE_THIRD_PARTY_FAILED]: 'Failed to update third party',
  [OrganizationErr.UPDATE_THIRD_PARTY_IMPOSSIBLE]:
    'Impossible to update third party',

  // REGISTER ORGANIZATION TO PERSON
  [OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED]:
    'Failed to register organization to person',
  [OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FORBIDDEN]:
    'Failed to register organization to person. Forbidden access',
  [OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_NOT_FOUND]:
    'Failed to register organization to person. Organization not found',
  [OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_ALREADY_EXISTS]:
    'Failed to register organization to person. Person already exists in organization',

  // UPDATE ORGANIZATION
  [OrganizationErr.UPDATE_ORGANIZATION_FAILED]: 'Failed to update organization',
  [OrganizationErr.UPDATE_ORGANIZATION_FORBIDDEN]:
    'Failed to update organization',
  [OrganizationErr.UPDATE_ORGANIZATION_NOT_FOUND]:
    'Failed to update organization',

  // UPDATE ADDRESS
  [OrganizationErr.UPDATE_ADDRESS_FAILED]: 'Failed to update address',
  [OrganizationErr.UPDATE_ADDRESS_FORBIDDEN]:
    'Failed to update address. Forbidden access',
  [OrganizationErr.UPDATE_ADDRESS_NOT_FOUND]:
    'Failed to update address. Address not found',

  // SUGGEST ORGANIZATION
  [OrganizationErr.SUGGEST_ORGANIZATION_FAILED]:
    'Failed to suggest organization',
  [OrganizationErr.SUGGEST_ORGANIZATION_FORBIDDEN]:
    'Failed to suggest organization. Forbidden access',
  [OrganizationErr.SUGGEST_ORGANIZATION_NOT_FOUND]:
    'Failed to suggest organization. Organization not found',

  // DELETE ADDRESS
  [OrganizationErr.DELETE_ADDRESS_FAILED]: 'Failed to delete address',
  [OrganizationErr.DELETE_ADDRESS_FORBIDDEN]:
    'Failed to delete address. Forbidden access',
  [OrganizationErr.DELETE_ADDRESS_NOT_FOUND]:
    'Failed to delete address. Address not found',
  [OrganizationErr.DELETE_ADDRESS_ALREADY_EXISTS]:
    "Failed to delete address. Address doesn't exists",

  // DELETE BACKGROUND IMAGE
  [OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED]:
    'Failed to delete background image',
  [OrganizationErr.DELETE_BACKGROUND_IMAGE_FORBIDDEN]:
    'Failed to delete background image. Forbidden access',
  [OrganizationErr.DELETE_BACKGROUND_IMAGE_NOT_FOUND]:
    'Failed to delete background image. Background image not found',

  [OrganizationErr.GET_RIBS_FAILED]: 'Failed to fetch all organization ribs',
  [OrganizationErr.ADD_KYC_FAILED]: 'Failed to add KYC',
  [OrganizationErr.GET_KYCS_FAILED]: 'Failed to get KYCs',
};

export const errorFactory = new ErrorFactory<OrganizationErr>(
  'Organization',
  errors,
);
