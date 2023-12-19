import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  getOrganization,
  getOrganizations,
  getPublicOrganization,
  getPublicOrganizationBySlug,
  getPublicOrganizations,
  addKycDocument,
  updateKycDocument,
  getAllKycDocuments,
  addRib,
  getAllRibs,
  setCommunication,
  addLogo,
  deleteLogo,
  createBackgroundImage,
  createBackgroundImageFromMedia,
  deleteBackgroundImage,
  createPicture,
  createPictureFromMedia,
  deletePicture,
  createOpeningHoursSpecification,
  updateOpeningHoursSpecification,
  deleteOpeningHoursSpecification,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  createFounder,
  updateFounder,
  deleteFounder,
  addAddress,
  updateAddress,
  deleteAddress,
  createOrganization,
  updateOrganization,
  disableRoaming,
  enableRoaming,
  registerOrganizationToPerson,
  registerOrganization,
  suggestOrganization,
} from './actions';
import { errorFactory } from './errors';

class OrganizationProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Retrieves information about a specific organization by its ID.
   *
   * @param {string} organizationId - The unique identifier of the organization to be retrieved.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the information of the specified organization.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/#get-organization-by-id Sherl SDK documentation} for further information
   */
  public getOrganization = this.withFetcher(getOrganization);

  /**
   * Retrieves a paginated list of organizations based on provided filters.
   *
   * @param {OrganizationFiltersDto} filters - The filtering criteria to apply to the organization list.
   * @returns {Promise<Pagination<IOrganizationResponse>>} A promise that resolves to a paginated response containing the list of organizations.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/#get-organizations-list Sherl SDK documentation} for further information
   */
  public getOrganizations = this.withFetcher(getOrganizations);

  /**
   * Retrieves public information about an organization using its unique ID.
   *
   * @param {string} organizationId - The unique identifier of the public organization to be retrieved.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the public information of the specified organization.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/#get-organization-by-id Sherl SDK documentation} for further information
   */
  public getPublicOrganization = this.withFetcher(getPublicOrganization);

  /**
   * Retrieves public information about an organization using its slug.
   *
   * @param {string} slug - The slug identifier of the public organization to be retrieved.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the public information of the specified organization.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/#get-organization-by-slug Sherl SDK documentation} for further information
   */
  public getPublicOrganizationBySlug = this.withFetcher(
    getPublicOrganizationBySlug,
  );

  /**
   * Retrieves a paginated list of public organizations based on provided filters.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {OrganizationFiltersDto} filters - The filtering criteria to apply to the list of public organizations.
   * @returns {Promise<Pagination<IOrganizationResponse>>} A promise that resolves to a paginated response containing the list of public organizations.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/#get-organizations-list Sherl SDK documentation} for further information
   */
  public getPublicOrganizations = this.withFetcher(getPublicOrganizations);

  /**
   * Adds a KYC document to a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization to which the KYC document is being added.
   * @param {IAddKYCDocument} document - The KYC document details to be added.
   * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
   * @returns {Promise<IKYCDocument>} A promise that resolves to the information of the newly added KYC document.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-kyc#add-kyc-document Sherl SDK documentation} for further information
   */
  public addKycDocument = this.withFetcher(addKycDocument);

  /**
   * Updates a specific KYC document for an organization.
   *
   * @param {string} organizationId - The unique identifier of the organization to which the KYC document belongs.
   * @param {string} kycId - The unique identifier of the KYC document to be updated.
   * @param {IImageObject} document - The updated KYC document details.
   * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
   * @returns {Promise<IKYCDocument>} A promise that resolves to the information of the updated KYC document.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-kyc#update-kyc-document Sherl SDK documentation} for further information
   */
  public updateKycDocument = this.withFetcher(updateKycDocument);

  /**
   * Retrieves all KYC documents for a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization for which the KYC documents are being retrieved.
   * @returns {Promise<IKYCDocument[]>} A promise that resolves to an array of KYC documents for the specified organization.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-kyc#get-all-documents Sherl SDK documentation} for further information
   */
  public getAllKycDocuments = this.withFetcher(getAllKycDocuments);

  /**
   * Adds a RIB to a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization to which the RIB is being added.
   * @param {IAddRibBody} request - The details of the RIB to be added.
   * @returns {Promise<IRib>} A promise that resolves to the information of the newly added RIB.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-rib#add-organization-rib Sherl SDK documentation} for further information
   */
  public addRib = this.withFetcher(addRib);

  /**
   * Retrieves all RIBs associated with a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization for which the RIBs are being retrieved.
   * @returns {Promise<IRib[]>} A promise that resolves to an array of RIBs for the specified organization.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-rib#get-all-organization-ribs Sherl SDK documentation} for further information
   */
  public getAllRibs = this.withFetcher(getAllRibs);

  /**
   * Sets communication details for an organization specified by its unique ID.
   *
   * @param {string} organizationId - The unique identifier of the organization for which the communication details are being set.
   * @param {ICommunicationInputDto} communicationInfo - The communication details to be set for the organization.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after setting the communication details.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-communication#set-communication Sherl SDK documentation} for further information
   */
  public setCommunication = this.withFetcher(setCommunication);

  /**
   * Adds a logo to an organization using a media file.
   *
   * @param {string} organizationId - The unique identifier of the organization for which the logo is being set.
   * @param {string} mediaId - The unique identifier of the media to be used as the logo.
   * @param {File} logo - The logo file to be uploaded and set.
   * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the logo addition.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-logo#create-logo-from-media Sherl SDK documentation} for further information
   */
  public addLogo = this.withFetcher(addLogo);

  /**
   * Deletes the logo of an organization specified by its unique ID.
   *
   * @param {string} organizationId - The unique identifier of the organization whose logo is being deleted.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the logo deletion.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-logo#delete-logo Sherl SDK documentation} for further information
   */
  public deleteLogo = this.withFetcher(deleteLogo);

  /**
   * Creates a background image for an organization by uploading a file.
   *
   * @param {string} organizationId - The unique identifier of the organization for which the background image is being set.
   * @param {string} mediaId - The unique identifier of the media associated with the background image.
   * @param {File} file - The image file to be uploaded and set as the background.
   * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the background image creation.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-background-image#create-background-image Sherl SDK documentation} for further information
   */
  public createBackgroundImage = this.withFetcher(createBackgroundImage);

  /**
   * Creates a background image for an organization from a media object.
   *
   * @param {string} organizationId - The unique identifier of the organization for which the background image is being set.
   * @param {string} mediaId - The unique identifier of the media to be used as the background image.
   * @param {IImageObject} image - The image object to be set as the background.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the background image creation.
   */
  public createBackgroundImageFromMedia = this.withFetcher(
    createBackgroundImageFromMedia,
  );

  /**
   * Deletes the background image of an organization identified by its unique ID.
   *
   * @param {string} organizationId - The unique identifier of the organization whose background image is being deleted.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the background image deletion.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-background-image#delete-background-image Sherl SDK documentation} for further information
   */
  public deleteBackgroundImage = this.withFetcher(deleteBackgroundImage);

  /**
   * Uploads and creates a picture for an organization from a file.
   *
   * @param {string} organizationId - The unique identifier of the organization for which the picture is being created.
   * @param {string} pictureId - The unique identifier of the picture to be created.
   * @param {File} picture - The picture file to be uploaded.
   * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after creating the picture.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-picture#create-picture Sherl SDK documentation} for further information
   */
  public createPicture = this.withFetcher(createPicture);

  /**
   * Creates a picture for an organization from a specified media.
   *
   * @param {string} organizationId - The unique identifier of the organization for which the picture is being created.
   * @param {string} pictureId - The unique identifier of the picture to be created.
   * @param {IMediaCreateInputDto} picture - The media data for creating the picture.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after creating the picture.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-picture#create-picture-from-media Sherl SDK documentation} for further information
   */
  public createPictureFromMedia = this.withFetcher(createPictureFromMedia);

  /**
   * Deletes a picture from a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization from which the picture is being deleted.
   * @param {string} pictureId - The unique identifier of the picture to be deleted.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the picture deletion.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-picture#delete-a-picture Sherl SDK documentation} for further information
   */
  public deletePicture = this.withFetcher(deletePicture);

  /**
   * Creates an opening hours specification for a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization for which the opening hours are being set.
   * @param {IOpeningHoursSpecificationInputDto} data - The details of the opening hours specification to be created.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after creating the opening hours specification.
   * TODO: fix link
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-opening-hours#create-opening-hours-specification Sherl SDK documentation} for further information
   */
  public createOpeningHoursSpecification = this.withFetcher(
    createOpeningHoursSpecification,
  );

  /**
   * Updates an opening hours specification for a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization whose opening hours specification is being updated.
   * @param {string} hoursSpecId - The unique identifier of the opening hours specification to be updated.
   * @param {IOpeningHoursSpecificationInputDto} data - The updated opening hours details.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the update of the opening hours specification.
   * TODO: fix link
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-opening-hours#update-opening-hours-specification Sherl SDK documentation} for further information
   */
  public updateOpeningHoursSpecification = this.withFetcher(
    updateOpeningHoursSpecification,
  );

  /**
   * Deletes an opening hours specification from a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization from which the opening hours specification is being deleted.
   * @param {string} hoursSpecId - The unique identifier of the opening hours specification to be deleted.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the deletion of the opening hours specification.
   * TODO: fix link
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-opening-hours#delete-opening-hours-specification Sherl SDK documentation} for further information
   */
  public deleteOpeningHoursSpecification = this.withFetcher(
    deleteOpeningHoursSpecification,
  );

  /**
   * Creates a new employee record for a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization to which the employee is being added.
   * @param {IOrganizationMemberInputDto} employee - The details of the employee to be added.
   * @returns {Promise<IEmployee>} A promise that resolves to the information of the newly created employee.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-employee#create-new-employee Sherl SDK documentation} for further information
   */
  public createEmployee = this.withFetcher(createEmployee);

  /**
   * Updates an employee's details within a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization to which the employee belongs.
   * @param {string} employeeId - The unique identifier of the employee to be updated.
   * @param {Partial<IOrganizationMemberInputDto>} updatedEmployee - The partial data of the employee to be updated.
   * @returns {Promise<IEmployee>} A promise that resolves to the information of the updated employee.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-employee#update-an-employee Sherl SDK documentation} for further information
   */
  public updateEmployee = this.withFetcher(updateEmployee);

  /**
   * Deletes an employee record from a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization from which the employee is being deleted.
   * @param {string} employeeId - The unique identifier of the employee to be deleted.
   * @returns {Promise<IEmployee>} A promise that resolves to the information of the deleted employee.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-employee#delete-an-employee Sherl SDK documentation} for further information
   */
  public deleteEmployee = this.withFetcher(deleteEmployee);

  /**
   * Creates a new founder record for a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization to which the founder is being added.
   * @param {ICreateFounderDto} founder - The details of the founder to be added.
   * @returns {Promise<IFounder>} A promise that resolves to the information of the newly created founder.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-founder#create-new-founder Sherl SDK documentation} for further information
   */
  public createFounder = this.withFetcher(createFounder);

  /**
   * Updates the details of a founder within a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization to which the founder belongs.
   * @param {string} founderId - The unique identifier of the founder to be updated.
   * @param {Partial<IOrganizationMemberInputDto>} updatedFounder - The partial data of the founder to be updated.
   * @returns {Promise<IFounder>} A promise that resolves to the information of the updated founder.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-founder#update-a-founder Sherl SDK documentation} for further information
   */
  public updateFounder = this.withFetcher(updateFounder);

  /**
   * Deletes a founder record from a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization from which the founder is being deleted.
   * @param {string} founderId - The unique identifier of the founder to be deleted.
   * @returns {Promise<IFounder>} A promise that resolves to the information of the deleted founder.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-founder#delete-a-founder Sherl SDK documentation} for further information
   */
  public deleteFounder = this.withFetcher(deleteFounder);

  /**
   * Adds an address to an organization specified by its ID.
   *
   * @param {string} organizationId - The unique identifier of the organization to which the address is being added.
   * @param {IAddressRequest} address - The details of the address to be added.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information post address addition.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-address#create-an-address Sherl SDK documentation} for further information
   */
  public addAddress = this.withFetcher(addAddress);

  /**
   * Updates an address of an organization specified by IDs.
   *
   * @param {string} organizationId - The unique identifier of the organization whose address is being updated.
   * @param {string} addressId - The unique identifier of the address to be updated.
   * @param {IAddressRequest} request - The updated address details.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the address update.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-address#update-address Sherl SDK documentation} for further information
   */
  public updateAddress = this.withFetcher(updateAddress);

  /**
   * Deletes an address from an organization using the specified IDs.
   *
   * @param {string} organizationId - The unique identifier of the organization from which the address is being deleted.
   * @param {string} addressId - The unique identifier of the address to be deleted.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information post address deletion.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-address#delete-address Sherl SDK documentation} for further information
   */
  public deleteAddress = this.withFetcher(deleteAddress);

  /**
   * Creates a new organization with the given details.
   *
   * @param {ICreateOrganizationInputDto} organization - The data for creating a new organization.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the newly created organization's information.
   * TODO: fix link
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/#create-organization Sherl SDK documentation} for further information
   */
  public createOrganization = this.withFetcher(createOrganization);

  /**
   * Updates an existing organization's details using the provided information.
   *
   * @param {string} organizationId - The unique identifier of the organization to be updated.
   * @param {IUpdateOrganizationDto} updatedOrganization - The new details for updating the organization.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information.
   * TODO: fix link
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/#update-organization Sherl SDK documentation} for further information
   */
  public updateOrganization = this.withFetcher(updateOrganization);

  /**
   * Disables the roaming feature for a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization for which roaming is being disabled.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after disabling roaming.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-roaming#disable-roaming Sherl SDK documentation} for further information
   */
  public disableRoaming = this.withFetcher(disableRoaming);

  /**
   * Enables the roaming feature for a specified organization.
   *
   * @param {string} organizationId - The unique identifier of the organization for which roaming is being enabled.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after enabling roaming.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/organization-roaming#enable-roaming Sherl SDK documentation} for further information
   */
  public enableRoaming = this.withFetcher(enableRoaming);

  /**
   * Registers an organization to a person using the provided data.
   *
   * @param {IRegisterOrganizationToPerson} organizationToPerson - The data for registering an organization to a person.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the organization's information post-registration.
   * TODO: fix link (common)
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/common#register-organization-to-person Sherl SDK documentation} for further information
   */
  public registerOrganizationToPerson = this.withFetcher(
    registerOrganizationToPerson,
  );

  /**
   * Registers a new organization with the provided request details.
   *
   * @param {IRegisterOrganizationRequest} request - The registration request details for the new organization.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the information of the newly registered organization.
   * TODO: fix link (common)
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/common#register-organization Sherl SDK documentation} for further information
   */
  public registerOrganization = this.withFetcher(registerOrganization);

  /**
   * Submits a suggestion for an organization based on the provided request details.
   *
   * @param {ISuggestOrganizationRequest} suggestion - The details of the organization suggestion.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the response related to the organization suggestion.
   * TODO: fix link (common)
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/organization/common#suggest-an-organization Sherl SDK documentation} for further information
   */
  public suggestOrganization = this.withFetcher(suggestOrganization);
}

export { OrganizationProvider };
