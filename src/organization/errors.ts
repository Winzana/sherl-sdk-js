import { ErrorFactory } from '../common/errors';

export enum OrganizationErr {
  FETCH_FAILED = 'organization/fetch-failed',
  NOT_FOUND = 'organization/not-found',
  ADD_DOCUMENT_FAILED = 'organization/add-failed',
  UPDATE_DOCUMENT_FAILED = 'organization/update-failed',
  ADD_RIB_FAILED = 'organization/add-rib-failed',
  GET_RIBS_FAILED = 'organization/fetch-documents-failed',
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
  CREATE_ORGANIZATION_FAILED = 'organization/create-organization-failed',
  REGISTER_ORGANIZATION_FAILED = 'organization/register-organization-failed',
  REGISTER_ORGANIZATION_TO_PERSON_FAILED = 'organization/register-organization-to-person-failed',
  SUGGEST_ORGANIZATION_FAILED = 'organization/suggest-organization-failed',
  UPDATE_ORGANIZATION_FAILED = 'organization/update-organization-failed',
  UPDATE_IS_PUBLIC_ORGANIZATION_FAILED = 'organization/update-is-public-organization-failed',
  ENABLE_ROAMING_FAILED = 'organization/enable-roaming-failed',
  DISABLE_ROAMING_FAILED = 'organization/disable-roaming-failed',
  UPDATE_THIRD_PARTY_FAILED = 'organization/update-third-party-failed',
  UPDATE_THIRD_PARTY_IMPOSSIBLE = 'organization/update-third-party-impossible',
  ADD_KYC_FAILED = 'organization/add-kyc-failed',
  GET_KYCS_FAILED = 'organization/get-kycs-failed',
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
  [OrganizationErr.CREATE_ORGANIZATION_FAILED]: 'Failed to create organization',
  [OrganizationErr.REGISTER_ORGANIZATION_FAILED]:
    'Failed to register organization',
  [OrganizationErr.SUGGEST_ORGANIZATION_FAILED]:
    'Failed to suggest organization',
  [OrganizationErr.UPDATE_ORGANIZATION_FAILED]: 'Failed to update organization',
  [OrganizationErr.UPDATE_IS_PUBLIC_ORGANIZATION_FAILED]:
    'Failed to update isPublic organization',
  [OrganizationErr.ENABLE_ROAMING_FAILED]: 'Failed to enable roaming',
  [OrganizationErr.DISABLE_ROAMING_FAILED]: 'Failed to disable roaming',
  [OrganizationErr.UPDATE_THIRD_PARTY_FAILED]: 'Failed to update third party',
  [OrganizationErr.UPDATE_THIRD_PARTY_IMPOSSIBLE]:
    'Impossible to update third party',
  [OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED]:
    'Failed to register organization to person',
  [OrganizationErr.GET_RIBS_FAILED]: 'Failed to fetch all organization ribs',
  [OrganizationErr.ADD_KYC_FAILED]: 'Failed to add KYC',
  [OrganizationErr.GET_KYCS_FAILED]: 'Failed to get KYCs',
};

export const errorFactory = new ErrorFactory<OrganizationErr>(
  'Organization',
  errors,
);
