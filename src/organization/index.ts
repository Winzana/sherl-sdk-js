import { SherlClient } from '../common';
import { OrganizationProvider } from './provider';
import {
  IAddKYCDocument,
  IAddRib,
  IAddressRequest,
  ICaption,
  ICommunicationInputDto,
  ICreateFounderDto,
  ICreateOrganizationInputDto,
  IEmployee,
  IFounder,
  IKYCDocument,
  IMedia,
  IMediaCreateInputDto,
  IOpeningHoursSpecificationInputDto,
  IOrganizationCommunication,
  IOrganizationDocumentsResponse,
  IOrganizationMemberInputDto,
  IOrganizationResponse,
  IPersonConfigValue,
  IRegisterOrganizationRequest,
  IRegisterOrganizationToPerson,
  IRib,
  ISuggestOrganizationRequest,
  ITaxonomy,
  ITaxonomyValue,
  IUpdateDocument,
  IUpdateOrganizationDto,
  KYCDocumentRefusedReasonTypeEnum,
  KYCDocumentStatusEnum,
  KYCDocumentTypeEnum,
  OrganizationFiltersDto,
} from './types';

export const organization = (client: SherlClient) =>
  new OrganizationProvider(client);

export {
  IAddKYCDocument,
  IAddRib,
  IAddressRequest,
  ICaption,
  ICommunicationInputDto,
  ICreateFounderDto,
  ICreateOrganizationInputDto,
  IEmployee,
  IFounder,
  IKYCDocument,
  IMedia,
  IMediaCreateInputDto,
  IOpeningHoursSpecificationInputDto,
  IOrganizationCommunication,
  IOrganizationDocumentsResponse,
  IOrganizationMemberInputDto,
  IOrganizationResponse,
  IPersonConfigValue,
  IRegisterOrganizationRequest,
  IRegisterOrganizationToPerson,
  IRib,
  ISuggestOrganizationRequest,
  ITaxonomy,
  ITaxonomyValue,
  IUpdateDocument,
  IUpdateOrganizationDto,
  KYCDocumentRefusedReasonTypeEnum,
  KYCDocumentStatusEnum,
  KYCDocumentTypeEnum,
  OrganizationFiltersDto,
};
