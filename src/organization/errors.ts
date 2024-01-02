import { ErrorFactory } from '../common/errors';

export enum OrganizationErr {
  // FETCH
  FETCH_FAILED = 'organization/fetch-failed',
  NOT_FOUND = 'organization/not-found',
  FECTH_FORBIDDEN = 'organization/forbidden',

  // GET PUBLIC ORGANIZATION
  GET_PUBLIC_ORGANIZATION_FAILED = 'organization/get-public-organization-failed',
  GET_PUBLIC_ORGANIZATION_FORBIDDEN = 'organization/get-public-organization-forbidden',

  // GET PUBLIC ORGANIZATIONS
  GET_PUBLIC_ORGANIZATIONS_FAILED = 'organization/get-public-organizations-failed',
  GET_PUBLIC_ORGANIZATIONS_FORBIDDEN = 'organization/get-public-organizations-forbidden',

  // GET ORGANIZATION BY SLUG
  GET_PUBLIC_ORGANIZATION_BY_SLUG_FAILED = 'organization/get-public-organization-by-slug-failed',
  GET_PUBLIC_ORGANIZATION_BY_SLUG_FORBIDDEN = 'organization/get-public-organization-by-slug-forbidden',

  // GET RIBS
  GET_RIBS_FAILED = 'organization/fetch-documents-failed',
  GET_RIBS_FORBIDDEN = 'organization/fetch-documents-forbidden',

  // GET KYCS
  GET_KYCS_FAILED = 'organization/get-kycs-failed',
  GET_KYCS_FORBIDDEN = 'organization/get-kycs-forbidden',
  GET_KYCS_NOT_FOUND = 'organization/get-kycs-not-found',

  // CREATE ORGANIZATION
  CREATE_ORGANIZATION_FAILED = 'organization/create-organization-failed',
  CREATE_ORGANIZATION_FORBIDDEN = 'organization/create-organization-forbidden',

  // CREATE PICTURE FROM MEDIA
  CREATE_PICTURE_FROM_MEDIA_FAILED = 'organization/create-picture-from-media-failed',
  CREATE_PICTURE_FROM_MEDIA_FORBIDDEN = 'organization/create-picture-from-media-forbidden',
  PICTURE_FROM_MEDIA_NOT_FOUND = 'organization/picture-from-media-not-found',

  // CREATE PICTURE
  CREATE_PICTURE_FAILED = 'organization/create-picture-failed',
  CREATE_PICTURE_FORBIDDEN = 'organization/create-picture-forbidden',
  PICTURE_NOT_FOUND = 'organization/picture-not-found',

  // CREATE BACKGROUND IMAGE FROM MEDIA
  CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FAILED = 'organization/create-background-image-from-media-failed',
  CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FORBIDDEN = 'organization/create-background-image-from-media-forbidden',

  // CREATE BACKGROUND IMAGE
  CREATE_BACKGROUND_IMAGE_FAILED = 'organization/create-background-image-failed',
  CREATE_BACKGROUND_IMAGE_FORBIDDEN = 'organization/create-background-image-forbidden',
  ORGANIZATION_NOT_FOUND = 'organization/create-background-organization-not-found',

  // CREATE OPENING HOURS SPECIFICATION
  CREATE_OPENING_HOURS_SPECIFICATION_FAILED = 'organization/create-opening-hours-specification-failed',
  CREATE_OPENING_HOURS_SPECIFICATION_FORBIDDEN = 'organization/create-opening-hours-specification-forbidden',
  OPENING_HOURS_SPECIFICATION_NOT_FOUND = 'organization/opening-hours-specification-not-found',

  // CREATE EMPLOYEE
  CREATE_EMPLOYEE_FAILED = 'organization/create-employee-failed',
  CREATE_EMPLOYEE_FORBIDDEN = 'organization/create-employee-forbidden',
  EMPLOYEE_NOT_FOUND = 'organization/employee-not-found',

  // CREATE FOUNDER
  CREATE_FOUNDER_FAILED = 'organization/create-founder-failed',
  CREATE_FOUNDER_FORBIDDEN = 'organization/create-founder-forbidden',
  FOUNDER_NOT_FOUND = 'organization/founder-not-found',

  // ADD LOGO
  ADD_LOGO_FAILED = 'organization/add-logo-failed',
  ADD_LOGO_FORBIDDEN = 'organization/add-logo-forbidden',
  LOGO_NOT_FOUND = 'organization/logo-not-found',

  // ADD RIB
  ADD_RIB_FAILED = 'organization/add-rib-failed',
  ADD_RIB_FORBIDDEN = 'organization/add-rib-forbidden',
  RIB_NOT_FOUND = 'organization/rib-not-found',

  // ADD ADDRESS
  ADD_ADDRESS_FAILED = 'organization/add-address-failed',
  ADD_ADDRESS_FORBIDDEN = 'organization/add-address-forbidden',

  // ADD KYC
  ADD_DOCUMENT_FAILED = 'organization/add-failed',
  ADD_DOCUMENT_FORBIDDEN = 'organization/add-forbidden',
  KYC_NOT_FOUND = 'organization/kyc-not-found',

  // REGISTER ORGANIZATION
  REGISTER_ORGANIZATION_FAILED = 'organization/register-organization-failed',
  REGISTER_ORGANIZATION_FORBIDDEN = 'organization/register-organization-forbidden',

  // REGISTER ORGANIZATION TO PERSON
  REGISTER_ORGANIZATION_TO_PERSON_FAILED = 'organization/register-organization-to-person-failed',
  REGISTER_ORGANIZATION_TO_PERSON_FORBIDDEN = 'organization/register-organization-to-person-forbidden',
  REGISTER_ORGANIZATION_TO_PERSON_NOT_FOUND = 'organization/register-organization-to-person-not-found',

  // SET COMMUNICATION
  SET_COMMUNICATION_FAILED = 'organization/set-communication-failed',
  SET_COMMUNICATION_FORBIDDEN = 'organization/set-communication-forbidden',
  COMMUNICATION_NOT_FOUND = 'organization/set-communication-not-found',

  // SUGGEST ORGANIZATION
  SUGGEST_ORGANIZATION_FAILED = 'organization/suggest-organization-failed',
  SUGGEST_ORGANIZATION_FORBIDDEN = 'organization/suggest-organization-forbidden',
  SUGGEST_ORGANIZATION_NOT_FOUND = 'organization/suggest-organization-not-found',

  // UPDATE ORGANIZATION
  UPDATE_ORGANIZATION_FAILED = 'organization/update-organization-failed',
  UPDATE_ORGANIZATION_FORBIDDEN = 'organization/update-organization-forbidden',

  // UPDATE ADDRESS
  UPDATE_ADDRESS_FAILED = 'organization/update-address-failed',
  UPDATE_ADDRESS_FORBIDDEN = 'organization/update-address-forbidden',

  // UPDATE EMPLOYEE
  UPDATE_EMPLOYEE_FAILED = 'organization/update-employee-failed',
  UPDATE_EMPLOYEE_FORBIDDEN = 'organization/update-employee-forbidden',

  // UPDATE FOUNDER
  UPDATE_FOUNDER_FAILED = 'organization/update-founder-failed',
  UPDATE_FOUNDER_FORBIDDEN = 'organization/update-founder-forbidden',

  // UPDATE OPENING HOURS SPECIFICATIONS
  UPDATE_OPENING_HOURS_SPECIFICATION_FAILED = 'organization/update-opening-hours-specification-failed',
  UPDATE_OPENING_HOURS_SPECIFICATION_FORBIDDEN = 'organization/update-opening-hours-specification-forbidden',

  // UPDATE DOCUMENT
  UPDATE_DOCUMENT_FAILED = 'organization/update-failed',
  UPDATE_DOCUMENT_FORBIDDEN = 'organization/update-forbidden',

  // DELETE ADDRESS
  DELETE_ADDRESS_FAILED = 'organization/delete-address-failed',
  DELETE_ADDRESS_FORBIDDEN = 'organization/delete-address-forbidden',
  ADDRESS_NOT_FOUND = 'organization/address-not-found',

  // DELETE BACKGROUND IMAGE
  DELETE_BACKGROUND_IMAGE_FAILED = 'organization/delete-background-image-failed',
  DELETE_BACKGROUND_IMAGE_FORBIDDEN = 'organization/delete-background-image-forbidden',
  BACKGROUND_IMAGE_NOT_FOUND = 'organization/delete-background-image-not-found',

  // DELETE EMPLOYEE
  DELETE_EMPLOYEE_FAILED = 'organization/delete-employee-failed',
  DELETE_EMPLOYEE_FORBIDDEN = 'organization/delete-employee-forbidden',

  // DELETE FOUNDER
  DELETE_FOUNDER_FAILED = 'organization/delete-founder-failed',
  DELETE_FOUNDER_FORBIDDEN = 'organization/delete-founder-forbidden',

  // DELETE LOGO
  DELETE_LOGO_FAILED = 'organization/delete-logo-failed',
  DELETE_LOGO_FORBIDDEN = 'organization/delete-logo-forbidden',

  // DELETE OPENING HOURS SPECIFICATION
  DELETE_OPENING_HOURS_SPECIFICATION_FAILED = 'organization/delete-opening-hours-specification-failed',
  DELETE_OPENING_HOURS_SPECIFICATION_FORBIDDEN = 'organization/delete-opening-hours-specification-forbidden',

  // DELETE PICTURE
  DELETE_PICTURE_FAILED = 'organization/delete-picture-failed',
  DELETE_PICTURE_FORBIDDEN = 'organization/delete-picture-forbidden',

  // DISABLE ROAMING
  DISABLE_ROAMING_FAILED = 'organization/disable-roaming-failed',
  DISABLE_ROAMING_FORBIDDEN = 'organization/disable-roaming-forbidden',
  ROAMING_NOT_FOUND = 'organization/roaming-not-found',

  // ENABLE ROAMING
  ENABLE_ROAMING_FAILED = 'organization/enable-roaming-failed',
  ENABLE_ROAMING_FORBIDDEN = 'organization/enable-roaming-forbidden',

  // UNUSED
  UPDATE_IS_PUBLIC_ORGANIZATION_FAILED = 'organization/update-is-public-organization-failed',
  UPDATE_THIRD_PARTY_FAILED = 'organization/update-third-party-failed',
  UPDATE_THIRD_PARTY_IMPOSSIBLE = 'organization/update-third-party-impossible',
  ADD_KYC_FAILED = 'organization/add-kyc-failed',
}

export const errors = {
  // UNUSED
  [OrganizationErr.ADD_KYC_FAILED]: 'Failed to add KYC',
  [OrganizationErr.ADD_ADDRESS_FAILED]: 'Failed to add address',
  [OrganizationErr.UPDATE_IS_PUBLIC_ORGANIZATION_FAILED]:
    'Failed to update isPublic organization',
  [OrganizationErr.UPDATE_THIRD_PARTY_FAILED]: 'Failed to update third party',
  [OrganizationErr.UPDATE_THIRD_PARTY_IMPOSSIBLE]:
    'Impossible to update third party',

  // ADDRESS
  [OrganizationErr.ADDRESS_NOT_FOUND]:
    'Failed to delete address. Address not found',

  // FETCH
  [OrganizationErr.FETCH_FAILED]: 'Failed to fetch organization API',
  [OrganizationErr.FECTH_FORBIDDEN]:
    'Failed to fetch organization API. Forbidden access',
  [OrganizationErr.NOT_FOUND]: 'Failed to fetch organization. Page not found',

  // GET PUBLIC ORGANIZATION
  [OrganizationErr.GET_PUBLIC_ORGANIZATION_FAILED]:
    'Failed to fetch public organization',
  [OrganizationErr.GET_PUBLIC_ORGANIZATION_FORBIDDEN]:
    'Failed to fetch public organization. Forbidden access',

  // GET PUBLIC ORGANIZATIONS
  [OrganizationErr.GET_PUBLIC_ORGANIZATIONS_FAILED]:
    'Failed to fetch public organizations',
  [OrganizationErr.GET_PUBLIC_ORGANIZATIONS_FORBIDDEN]:
    'Failed to fetch public organizations. Forbidden access',

  // GET ORGANIZATION BY SLUG
  [OrganizationErr.GET_PUBLIC_ORGANIZATION_BY_SLUG_FAILED]:
    'Failed to fetch organization by slug',
  [OrganizationErr.GET_PUBLIC_ORGANIZATION_BY_SLUG_FORBIDDEN]:
    'Failed to fetch organization by slug. Forbidden access',

  // GET RIBs
  [OrganizationErr.GET_RIBS_FAILED]: 'Failed to fetch all organization RIBs',
  [OrganizationErr.GET_RIBS_FORBIDDEN]:
    'Failed to fetch all organization RIBs. Forbidden access',

  // GET KYCS
  [OrganizationErr.GET_KYCS_FAILED]: 'Failed to get KYCs',
  [OrganizationErr.GET_KYCS_FORBIDDEN]: 'Failed to get KYCs. Forbidden access',
  [OrganizationErr.GET_KYCS_NOT_FOUND]: 'Failed to get KYCs. KYCs not found',

  // CREATE ORGANIZATION
  [OrganizationErr.CREATE_ORGANIZATION_FAILED]: 'Failed to create organization',
  [OrganizationErr.CREATE_ORGANIZATION_FORBIDDEN]:
    'Failed to create organization. Forbidden access',

  // CREATE BACKGROUND IMAGE FROM MEDIA
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FAILED]:
    'Failed to create background image from media',
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FORBIDDEN]:
    'Failed to create background image from media. Forbidden access',

  // CREATE BACKGROUND IMAGE
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_FAILED]:
    'Failed to create background image',
  [OrganizationErr.CREATE_BACKGROUND_IMAGE_FORBIDDEN]:
    'Failed to create background image. Forbidden access',
  [OrganizationErr.ORGANIZATION_NOT_FOUND]:
    'Failed to create background image. Organization not found',

  // CREATE PICTURE FROM MEDIA
  [OrganizationErr.CREATE_PICTURE_FROM_MEDIA_FAILED]:
    'Failed to create picture from media',
  [OrganizationErr.CREATE_PICTURE_FROM_MEDIA_FORBIDDEN]:
    'Failed to create picture from media. Forbidden access',
  [OrganizationErr.PICTURE_FROM_MEDIA_NOT_FOUND]:
    'Failed to reach picture API. Media not found',

  // CREATE PICTURE
  [OrganizationErr.CREATE_PICTURE_FAILED]: 'Failed to create picture',
  [OrganizationErr.CREATE_PICTURE_FORBIDDEN]:
    'Failed to create picture. Forbidden access',
  [OrganizationErr.PICTURE_NOT_FOUND]:
    'Failed to reach picture API. Picture not found',

  // CREATE EMPLOYEE
  [OrganizationErr.CREATE_EMPLOYEE_FAILED]: 'Failed to create employee',
  [OrganizationErr.CREATE_EMPLOYEE_FORBIDDEN]:
    'Failed to create employee. Forbidden access',
  [OrganizationErr.EMPLOYEE_NOT_FOUND]:
    'Failed to reach employee API. Employee not found',

  // CREATE FOUNDER
  [OrganizationErr.CREATE_FOUNDER_FAILED]: 'Failed to create founder',
  [OrganizationErr.CREATE_FOUNDER_FORBIDDEN]:
    'Failed to create founder. Forbidden access',
  [OrganizationErr.FOUNDER_NOT_FOUND]:
    'Failed to reach founder API. Founder not found',

  // REGISTER ORGANIZATION
  [OrganizationErr.REGISTER_ORGANIZATION_FAILED]:
    'Failed to register organization',
  [OrganizationErr.REGISTER_ORGANIZATION_FORBIDDEN]:
    'Failed to register organization. Forbidden access',

  // REGISTER ORGANIZATION TO PERSON
  [OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED]:
    'Failed to register organization to person',
  [OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FORBIDDEN]:
    'Failed to register organization to person. Forbidden access',
  [OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_NOT_FOUND]:
    'Failed to register organization to person. Organization not found',

  // CREATE OPENING HOURS SPECIFICATION
  [OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FAILED]:
    'Failed to create opening hours specification',
  [OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FORBIDDEN]:
    'Failed to create opening hours specification. Forbidden access',
  [OrganizationErr.OPENING_HOURS_SPECIFICATION_NOT_FOUND]:
    'Failed to reach opening hours specification API. Opening hours specification not found',

  // ADD LOGO
  [OrganizationErr.ADD_LOGO_FAILED]: 'Failed to add logo',
  [OrganizationErr.ADD_LOGO_FORBIDDEN]: 'Failed to add logo. Forbidden access',
  [OrganizationErr.LOGO_NOT_FOUND]: 'Failed to reach logo API. Logo not found',

  // ADD KYC
  [OrganizationErr.ADD_DOCUMENT_FAILED]: 'Failed to add document',
  [OrganizationErr.ADD_DOCUMENT_FORBIDDEN]:
    'Failed to add document. Forbidden access',
  [OrganizationErr.KYC_NOT_FOUND]:
    'Failed to reach document API. KYC not found',

  // ADD RIB
  [OrganizationErr.ADD_RIB_FAILED]: 'Failed to add RIB',
  [OrganizationErr.ADD_RIB_FORBIDDEN]: 'Failed to add RIB. Forbidden access',
  [OrganizationErr.RIB_NOT_FOUND]: 'Failed to add RIB. RIB not found',

  // SET COMMUNICATION
  [OrganizationErr.SET_COMMUNICATION_FAILED]: 'Failed to set communication',
  [OrganizationErr.SET_COMMUNICATION_FORBIDDEN]:
    'Failed to set communication. Forbidden access',
  [OrganizationErr.COMMUNICATION_NOT_FOUND]:
    'Failed to set communication. Communication not found',

  // UPDATE ORGANIZATION
  [OrganizationErr.UPDATE_ORGANIZATION_FAILED]: 'Failed to update organization',
  [OrganizationErr.UPDATE_ORGANIZATION_FORBIDDEN]:
    'Failed to update organization',

  // UPDATE EMPLOYEE
  [OrganizationErr.UPDATE_EMPLOYEE_FAILED]: 'Failed to update employee',
  [OrganizationErr.UPDATE_EMPLOYEE_FORBIDDEN]:
    'Failed to update employee. Forbidden access',

  // UPDATE FOUNDER
  [OrganizationErr.UPDATE_FOUNDER_FAILED]: 'Failed to update founder',
  [OrganizationErr.UPDATE_FOUNDER_FORBIDDEN]:
    'Failed to update founder. Forbidden access',

  // UPDATE DOCUMENT
  [OrganizationErr.UPDATE_DOCUMENT_FAILED]: 'Failed to update document',
  [OrganizationErr.UPDATE_DOCUMENT_FORBIDDEN]:
    'Failed to update document. Forbidden access',

  // UPDATE OPENING HOURS SPECIFICATION
  [OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FAILED]:
    'Failed to update opening hours specification',
  [OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FORBIDDEN]:
    'Failed to update opening hours specification. Forbidden access',

  // UPDATE ADDRESS
  [OrganizationErr.UPDATE_ADDRESS_FAILED]: 'Failed to update address',
  [OrganizationErr.UPDATE_ADDRESS_FORBIDDEN]:
    'Failed to update address. Forbidden access',

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

  // DELETE LOGO
  [OrganizationErr.DELETE_LOGO_FAILED]: 'Failed to delete logo',
  [OrganizationErr.DELETE_LOGO_FORBIDDEN]:
    'Failed to delete logo. Forbidden access',

  // DELETE BACKGROUND IMAGE
  [OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED]:
    'Failed to delete background image',
  [OrganizationErr.DELETE_BACKGROUND_IMAGE_FORBIDDEN]:
    'Failed to delete background image. Forbidden access',
  [OrganizationErr.BACKGROUND_IMAGE_NOT_FOUND]:
    'Failed to delete background image. Background image not found',

  // DELETE EMPLOYEE
  [OrganizationErr.DELETE_EMPLOYEE_FAILED]: 'Failed to delete employee',
  [OrganizationErr.DELETE_EMPLOYEE_FORBIDDEN]:
    'Failed to delete employee. Forbidden access',

  // DELETE FOUNDER
  [OrganizationErr.DELETE_FOUNDER_FAILED]: 'Failed to delete founder',
  [OrganizationErr.DELETE_FOUNDER_FORBIDDEN]:
    'Failed to delete founder. Forbidden access',

  // DELETE OPENING HOURS SPECIFICATION
  [OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FAILED]:
    'Failed to delete opening hours specification',
  [OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FORBIDDEN]:
    'Failed to delete opening hours specification. Forbidden access',

  // DELETE PICTURE
  [OrganizationErr.DELETE_PICTURE_FAILED]: 'Failed to delete picture',
  [OrganizationErr.DELETE_PICTURE_FORBIDDEN]:
    'Failed to delete picture. Forbidden access',

  // DISABLE ROAMING
  [OrganizationErr.DISABLE_ROAMING_FAILED]: 'Failed to disable roaming',
  [OrganizationErr.DISABLE_ROAMING_FORBIDDEN]:
    'Failed to disable roaming. Forbidden access',
  [OrganizationErr.ROAMING_NOT_FOUND]:
    'Failed to manage roaming. Roaming not found',

  // ENABLE ROAMING
  [OrganizationErr.ENABLE_ROAMING_FAILED]: 'Failed to enable roaming',
  [OrganizationErr.ENABLE_ROAMING_FORBIDDEN]:
    'Failed to enable roaming. Forbidden access',
};

export const errorFactory = new ErrorFactory<OrganizationErr>(
  'Organization',
  errors,
);
