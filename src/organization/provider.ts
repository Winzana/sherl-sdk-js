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
   * This function sends a GET request to fetch details of an organization based on its unique identifier.
   * The organization ID is used to construct the endpoint for the GET request. If the request is successful,
   * it returns the organization's information encapsulated in an IOrganizationResponse object.
   * In case of any errors, such as a non-200 status response or other issues, a specific error indicating the
   * failure to fetch the organization's information is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization to be retrieved.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the information of the specified organization.
   * @throws {OrganizationErr.FETCH_FAILED} Throws an error if the operation to fetch the organization's information fails.
   */
  public getOrganization = this.withFetcher(getOrganization);

  /**
   * Retrieves a paginated list of organizations based on provided filters.
   *
   * This function sends a GET request to fetch a list of organizations, allowing for filtering based on various criteria.
   * The filters are specified through the OrganizationFiltersDto object. It returns a paginated response containing
   * a list of organizations. If the request fails, it throws an error with a specific code indicating the failure in
   * fetching the organizations.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {OrganizationFiltersDto} filters - The filtering criteria to apply to the organization list.
   * @returns {Promise<Pagination<IOrganizationResponse>>} A promise that resolves to a paginated response containing the list of organizations.
   * @throws {OrganizationErr.FETCH_FAILED} Throws an error if the fetching of organizations fails.
   */
  public getOrganizations = this.withFetcher(getOrganizations);

  /**
   * Retrieves public information about an organization using its unique ID.
   *
   * This function sends a GET request to fetch public-facing details of an organization based on its unique identifier.
   * The organization ID is used to construct the endpoint for the GET request. If the request is successful, it returns
   * the organization's public information encapsulated in an IOrganizationResponse object. In case of any
   * errors, such as a non-200 status response or other issues, a specific error indicating the failure to fetch
   * the organization's information is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the public organization to be retrieved.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the public information of the specified organization.
   * @throws {OrganizationErr.FETCH_FAILED} Throws an error if the operation to fetch the organization's information fails.
   */
  public getPublicOrganization = this.withFetcher(getPublicOrganization);

  /**
   * Retrieves public information about an organization using its slug.
   *
   * This function sends a GET request to fetch details of a public-facing organization based on its slug.
   * The slug is used to construct the endpoint for the GET request. If the request is successful, it returns
   * the organization's public information encapsulated in an IOrganizationResponse object. In case of any
   * errors, such as a non-200 status response or other issues, a specific error indicating the failure to fetch
   * the organization's information is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} slug - The slug identifier of the public organization to be retrieved.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the public information of the specified organization.
   * @throws {OrganizationErr.FETCH_FAILED} Throws an error if the operation to fetch the organization's information fails.
   */
  public getPublicOrganizationBySlug = this.withFetcher(
    getPublicOrganizationBySlug,
  );

  /**
   * Retrieves a paginated list of public organizations based on provided filters.
   *
   * This function sends a GET request to fetch a list of public-facing organizations, allowing for filtering based on various criteria.
   * The filters are specified through the OrganizationFiltersDto object. It returns a paginated response containing
   * a list of public organizations. If the request fails, it throws an error with a specific code indicating the failure in
   * fetching the organizations.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {OrganizationFiltersDto} filters - The filtering criteria to apply to the list of public organizations.
   * @returns {Promise<Pagination<IOrganizationResponse>>} A promise that resolves to a paginated response containing the list of public organizations.
   * @throws {OrganizationErr.FETCH_FAILED} Throws an error if the fetching of public organizations fails.
   */
  public getPublicOrganizations = this.withFetcher(getPublicOrganizations);

  /**
   * Adds a KYC document to a specified organization.
   *
   * This function sends a POST request to add a KYC document to an organization. It uses the organization's unique ID
   * to construct the endpoint, and the KYC document details are provided in the IAddKYCDocument object. An optional
   * onUploadProgress function can be provided to monitor the upload progress. On successful addition, it returns the
   * newly added KYC document's information encapsulated in an IKYCDocument object. If the document addition process
   * encounters any errors, such as a non-201 status response or connectivity issues, a specific error indicating
   * the failure of the document addition is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization to which the KYC document is being added.
   * @param {IAddKYCDocument} document - The KYC document details to be added.
   * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
   * @returns {Promise<IKYCDocument>} A promise that resolves to the information of the newly added KYC document.
   * @throws {OrganizationErr.ADD_DOCUMENT_FAILED} Throws an error if the KYC document addition fails.
   */
  public addKycDocument = this.withFetcher(addKycDocument);

  /**
   * Updates a specific KYC document for an organization.
   *
   * This function sends a PUT request to update a KYC document associated with an organization. It requires the
   * organization's unique ID and the KYC document's unique ID to construct the endpoint for the request. The updated
   * document details are provided in the IImageObject. An optional onUploadProgress function can be provided to
   * monitor the upload progress. On successful update, it returns the updated KYC document's information encapsulated
   * in an IKYCDocument object. If the update process encounters any errors, such as a non-200 status response or
   * connectivity issues, a specific error indicating the failure of updating the KYC document is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization to which the KYC document belongs.
   * @param {string} kycId - The unique identifier of the KYC document to be updated.
   * @param {IImageObject} document - The updated KYC document details.
   * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
   * @returns {Promise<IKYCDocument>} A promise that resolves to the information of the updated KYC document.
   * @throws {OrganizationErr.UPDATE_DOCUMENT_FAILED} Throws an error if the KYC document update fails.
   */
  public updateKycDocument = this.withFetcher(updateKycDocument);

  /**
   * Retrieves all KYC documents for a specified organization.
   *
   * This function sends a GET request to fetch all KYC documents associated with an organization. It uses the
   * organization's unique ID to construct the endpoint for the request. On successful retrieval, it returns an array
   * of KYC documents, each encapsulated in an IKYCDocument object. If the retrieval process encounters any errors,
   * such as a non-200 status response or connectivity issues, a specific error indicating the failure of fetching the
   * KYC documents is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization for which the KYC documents are being retrieved.
   * @returns {Promise<IKYCDocument[]>} A promise that resolves to an array of KYC documents for the specified organization.
   * @throws {OrganizationErr.GET_KYCS_FAILED} Throws an error if the retrieval of KYC documents fails.
   */
  public getAllKycDocuments = this.withFetcher(getAllKycDocuments);

  /**
   * Adds a RIB to a specified organization.
   *
   * This function sends a POST request to add a RIB to an organization. It requires the organization's
   * unique ID to construct the endpoint. The RIB details are provided in the IAddRibBody object. On successful
   * addition, it returns the newly added RIB's information encapsulated in an IRib object. If the addition process
   * encounters any errors, such as a non-200 status response or connectivity issues, a specific error indicating
   * the failure of the RIB addition is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization to which the RIB is being added.
   * @param {IAddRibBody} request - The details of the RIB to be added.
   * @returns {Promise<IRib>} A promise that resolves to the information of the newly added RIB.
   * @throws {OrganizationErr.ADD_RIB_FAILED} Throws an error if the RIB addition fails.
   */
  public addRib = this.withFetcher(addRib);

  /**
   * Retrieves all RIBs associated with a specified organization.
   *
   * This function sends a GET request to fetch all RIBs related to an organization. It uses the
   * organization's unique ID to construct the endpoint for the request. On successful retrieval,
   * it returns an array of RIBs, each encapsulated in an IRib object. If the retrieval process
   * encounters any errors, such as a non-200 status response or connectivity issues, a specific error
   * indicating the failure of fetching the RIBs is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization for which the RIBs are being retrieved.
   * @returns {Promise<IRib[]>} A promise that resolves to an array of RIBs for the specified organization.
   * @throws {OrganizationErr.GET_RIBS_FAILED} Throws an error if the retrieval of RIBs fails.
   */
  public getAllRibs = this.withFetcher(getAllRibs);

  /**
   * Sets communication details for an organization specified by its unique ID.
   *
   * This function sends a POST request to set or update the communication details for an organization.
   * It uses the organization's unique ID to construct the endpoint and the communication information
   * provided in the ICommunicationInputDto object. On successful setting or updating, it returns the
   * updated organization's information encapsulated in an IOrganizationResponse object.
   * If the setting or updating process encounters any errors, such as a non-201 status response or
   * connectivity issues, a specific error indicating the failure of setting the communication details is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization for which the communication details are being set.
   * @param {ICommunicationInputDto} communicationInfo - The communication details to be set for the organization.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after setting the communication details.
   * @throws {OrganizationErr.SET_COMMUNICATION_FAILED} Throws an error if the operation to set the communication details fails.
   */
  public setCommunication = this.withFetcher(setCommunication);

  /**
   * Adds a logo to an organization using a media file.
   *
   * This function sends a POST request to upload and set a logo for an organization. It requires the organization's unique ID
   * and the media ID to construct the endpoint. The logo file is sent as form data. An optional onUploadProgress function
   * can be provided to monitor the upload progress. On successful upload and addition, it returns the updated organization's
   * information encapsulated in an IOrganizationResponse object. If the upload or addition process encounters any errors,
   * such as a non-200 status response or connectivity issues, a specific error indicating the failure of adding the logo is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization for which the logo is being set.
   * @param {string} mediaId - The unique identifier of the media to be used as the logo.
   * @param {File} logo - The logo file to be uploaded and set.
   * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the logo addition.
   * @throws {OrganizationErr.ADD_LOGO_FAILED} Throws an error if the logo addition fails.
   */
  public addLogo = this.withFetcher(addLogo);

  /**
   * Deletes the logo of an organization specified by its unique ID.
   *
   * This function sends a DELETE request to remove the logo of an organization. The organization's unique ID
   * is used to construct the endpoint for the request. On successful deletion, it returns the updated
   * organization's information encapsulated in an IOrganizationResponse object. If the deletion process encounters
   * any errors, such as a non-200 status response or connectivity issues, a specific error indicating the
   * failure of the logo deletion is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization whose logo is being deleted.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the logo deletion.
   * @throws {OrganizationErr.DELETE_LOGO_FAILED} Throws an error if the logo deletion fails.
   */
  public deleteLogo = this.withFetcher(deleteLogo);

  /**
   * Creates a background image for an organization by uploading a file.
   *
   * This function sends a POST request to upload and set a background image for an organization using a file object.
   * The organization's unique ID and media ID are used to construct the endpoint, and the file is sent as form data.
   * An optional onUploadProgress function can be provided to monitor the upload progress. On successful upload and
   * creation, it returns the updated organization's information encapsulated in an IOrganizationResponse object.
   * If the upload or creation process encounters any errors, such as a non-200 status response or connectivity issues,
   * a specific error indicating the failure of creating the background image is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization for which the background image is being set.
   * @param {string} mediaId - The unique identifier of the media associated with the background image.
   * @param {File} file - The image file to be uploaded and set as the background.
   * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the background image creation.
   * @throws {OrganizationErr.CREATE_BACKGROUND_IMAGE_FAILED} Throws an error if the background image creation fails.
   */
  public createBackgroundImage = this.withFetcher(createBackgroundImage);

  /**
   * Creates a background image for an organization from a media object.
   *
   * This function sends a POST request to set a background image for an organization using a media object.
   * The organization's unique ID and the media ID are used to construct the endpoint, and the image data is
   * provided in the IImageObject. On successful creation, it returns the updated organization's information
   * encapsulated in an IOrganizationResponse object. If the creation process encounters any errors, such as
   * a non-200 status response or connectivity issues, a specific error indicating the failure of creating the
   * background image from media is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization for which the background image is being set.
   * @param {string} mediaId - The unique identifier of the media to be used as the background image.
   * @param {IImageObject} image - The image object to be set as the background.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the background image creation.
   * @throws {OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FAILED} Throws an error if the background image creation fails.
   */
  public createBackgroundImageFromMedia = this.withFetcher(
    createBackgroundImageFromMedia,
  );

  /**
   * Deletes the background image of an organization identified by its unique ID.
   *
   * This function sends a DELETE request to remove the background image of an organization. The organization's
   * unique ID is used to construct the endpoint for the request. On successful deletion, it returns the updated
   * organization's information encapsulated in an IOrganizationResponse object. If the deletion process encounters
   * any errors, such as a non-200 status response or connectivity issues, a specific error indicating the failure
   * of the background image deletion is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization whose background image is being deleted.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the background image deletion.
   * @throws {OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED} Throws an error if the background image deletion fails.
   */
  public deleteBackgroundImage = this.withFetcher(deleteBackgroundImage);

  /**
   * Uploads and creates a picture for an organization from a file.
   *
   * This function sends a POST request to upload a picture for an organization. It uses the organization's unique ID
   * and the picture's unique ID to construct the endpoint. The picture file is sent as form data. An optional
   * onUploadProgress function can be provided to monitor the upload progress. On successful upload and creation,
   * it returns the updated organization's information encapsulated in an IOrganizationResponse object. If the upload
   * or creation process encounters any errors, such as a non-200 status response or connectivity issues, a specific
   * error indicating the failure of creating the picture is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization for which the picture is being created.
   * @param {string} pictureId - The unique identifier of the picture to be created.
   * @param {File} picture - The picture file to be uploaded.
   * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after creating the picture.
   * @throws {OrganizationErr.CREATE_PICTURE_FAILED} Throws an error if the creation of the picture fails.
   */
  public createPicture = this.withFetcher(createPicture);

  /**
   * Creates a picture for an organization from a specified media.
   *
   * This function sends a POST request to create a picture for an organization using media data. It requires the
   * organization's unique ID and the picture's unique ID to construct the endpoint. The picture's data is provided
   * in the IMediaCreateInputDto object. On successful creation, it returns the updated organization's information
   * encapsulated in an IOrganizationResponse object. If the creation process encounters any errors, such as a
   * non-200 status response or connectivity issues, a specific error indicating the failure of creating the picture
   * from media is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization for which the picture is being created.
   * @param {string} pictureId - The unique identifier of the picture to be created.
   * @param {IMediaCreateInputDto} picture - The media data for creating the picture.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after creating the picture.
   * @throws {OrganizationErr.CREATE_PICTURE_FROM_MEDIA_FAILED} Throws an error if the creation of the picture from media fails.
   */
  public createPictureFromMedia = this.withFetcher(createPictureFromMedia);

  /**
   * Deletes a picture from a specified organization.
   *
   * This function sends a DELETE request to remove a picture from an organization. It requires the organization's
   * unique ID and the picture's unique ID to construct the endpoint for the request. On successful deletion, it
   * returns the updated organization's information encapsulated in an IOrganizationResponse object. If the deletion
   * process encounters any errors, such as a non-200 status response or connectivity issues, a specific error
   * indicating the failure of the picture deletion is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization from which the picture is being deleted.
   * @param {string} pictureId - The unique identifier of the picture to be deleted.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the picture deletion.
   * @throws {OrganizationErr.DELETE_PICTURE_FAILED} Throws an error if the picture deletion fails.
   */
  public deletePicture = this.withFetcher(deletePicture);

  /**
   * Creates an opening hours specification for a specified organization.
   *
   * This function sends a POST request to set the opening hours for an organization. It requires the organization's
   * unique ID to construct the endpoint and the opening hours details provided in the IOpeningHoursSpecificationInputDto.
   * On successful creation, it returns the updated organization's information encapsulated in an IOrganizationResponse object.
   * If the creation process encounters any errors, such as a non-201 status response or connectivity issues, a specific error
   * indicating the failure of creating the opening hours specification is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization for which the opening hours are being set.
   * @param {IOpeningHoursSpecificationInputDto} data - The details of the opening hours specification to be created.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after creating the opening hours specification.
   * @throws {OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FAILED} Throws an error if the creation of the opening hours specification fails.
   */
  public createOpeningHoursSpecification = this.withFetcher(
    createOpeningHoursSpecification,
  );

  /**
   * Updates an opening hours specification for a specified organization.
   *
   * This function sends a PUT request to modify an existing opening hours specification of an organization. It uses the
   * organization's unique ID and the opening hours specification's unique ID to construct the endpoint for the request.
   * The updated opening hours details are provided in the IOpeningHoursSpecificationInputDto object. On successful update,
   * it returns the updated organization's information encapsulated in an IOrganizationResponse object. If the update process
   * encounters any errors, such as a non-200 status response or connectivity issues, a specific error indicating the failure
   * of updating the opening hours specification is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization whose opening hours specification is being updated.
   * @param {string} hoursSpecId - The unique identifier of the opening hours specification to be updated.
   * @param {IOpeningHoursSpecificationInputDto} data - The updated opening hours details.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the update of the opening hours specification.
   * @throws {OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FAILED} Throws an error if the update of the opening hours specification fails.
   */
  public updateOpeningHoursSpecification = this.withFetcher(
    updateOpeningHoursSpecification,
  );

  /**
   * Deletes an opening hours specification from a specified organization.
   *
   * This function sends a DELETE request to remove an opening hours specification from an organization. It requires the
   * organization's unique ID and the opening hours specification's unique ID to construct the endpoint for the request.
   * On successful deletion, it returns the updated organization's information encapsulated in an IOrganizationResponse object.
   * If the deletion process encounters any errors, such as a non-200 status response or connectivity issues, a specific error
   * indicating the failure of deleting the opening hours specification is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization from which the opening hours specification is being deleted.
   * @param {string} hoursSpecId - The unique identifier of the opening hours specification to be deleted.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the deletion of the opening hours specification.
   * @throws {OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FAILED} Throws an error if the deletion of the opening hours specification fails.
   */
  public deleteOpeningHoursSpecification = this.withFetcher(
    deleteOpeningHoursSpecification,
  );

  /**
   * Creates a new employee record for a specified organization.
   *
   * This function sends a POST request to add a new employee to an organization. It requires the organization's unique ID
   * to construct the endpoint, and the employee's details are provided in the IOrganizationMemberInputDto object.
   * On successful creation, it returns the newly created employee's information encapsulated in an IEmployee object.
   * If the employee creation process encounters any errors, such as a non-201 status response or connectivity issues,
   * a specific error indicating the failure of the employee creation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization to which the employee is being added.
   * @param {IOrganizationMemberInputDto} employee - The details of the employee to be added.
   * @returns {Promise<IEmployee>} A promise that resolves to the information of the newly created employee.
   * @throws {OrganizationErr.CREATE_EMPLOYEE_FAILED} Throws an error if the employee creation fails.
   */
  public createEmployee = this.withFetcher(createEmployee);

  /**
   * Updates an employee's details within a specified organization.
   *
   * This function sends a PUT request to modify the details of an existing employee in an organization.
   * It requires the organization's unique ID and the employee's unique ID to construct the endpoint for the request.
   * The updated employee details are provided in a Partial<IOrganizationMemberInputDto> object. On successful update,
   * it returns the information of the updated employee encapsulated in an IEmployee object. If the update process
   * encounters any errors, such as a non-200 status response or connectivity issues, a specific error indicating
   * the failure of the employee update is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization to which the employee belongs.
   * @param {string} employeeId - The unique identifier of the employee to be updated.
   * @param {Partial<IOrganizationMemberInputDto>} updatedEmployee - The partial data of the employee to be updated.
   * @returns {Promise<IEmployee>} A promise that resolves to the information of the updated employee.
   * @throws {OrganizationErr.UPDATE_EMPLOYEE_FAILED} Throws an error if the employee update fails.
   */
  public updateEmployee = this.withFetcher(updateEmployee);

  /**
   * Deletes an employee record from a specified organization.
   *
   * This function sends a DELETE request to remove an employee from an organization. It uses the organization's unique ID
   * and the employee's unique ID to construct the endpoint for the request. On successful deletion, it returns the information
   * of the deleted employee encapsulated in an IEmployee object. If the deletion process encounters any errors, such as
   * a non-200 status response or connectivity issues, a specific error indicating the failure of the employee deletion is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization from which the employee is being deleted.
   * @param {string} employeeId - The unique identifier of the employee to be deleted.
   * @returns {Promise<IEmployee>} A promise that resolves to the information of the deleted employee.
   * @throws {OrganizationErr.DELETE_EMPLOYEE_FAILED} Throws an error if the employee deletion fails.
   */
  public deleteEmployee = this.withFetcher(deleteEmployee);

  /**
   * Creates a new founder record for a specified organization.
   *
   * This function sends a POST request to add a new founder to an organization. It uses the organization's unique ID
   * to construct the endpoint, and the founder's details are provided in the ICreateFounderDto object. On successful
   * creation, it returns the newly created founder's information encapsulated in an IFounder object. If the founder
   * creation process encounters any errors, such as a non-201 status response or connectivity issues, a specific error
   * indicating the failure of the founder creation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization to which the founder is being added.
   * @param {ICreateFounderDto} founder - The details of the founder to be added.
   * @returns {Promise<IFounder>} A promise that resolves to the information of the newly created founder.
   * @throws {OrganizationErr.CREATE_FOUNDER_FAILED} Throws an error if the founder creation fails.
   */
  public createFounder = this.withFetcher(createFounder);

  /**
   * Updates the details of a founder within a specified organization.
   *
   * This function sends a PUT request to modify the details of an existing founder in an organization.
   * It requires the organization's unique ID and the founder's unique ID to construct the endpoint for the request.
   * The updated founder details are provided in a Partial<IOrganizationMemberInputDto> object. On successful update,
   * it returns the information of the updated founder encapsulated in an IFounder object. If the update process
   * encounters any errors, such as a non-200 status response or connectivity issues, a specific error indicating
   * the failure of the founder update is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization to which the founder belongs.
   * @param {string} founderId - The unique identifier of the founder to be updated.
   * @param {Partial<IOrganizationMemberInputDto>} updatedFounder - The partial data of the founder to be updated.
   * @returns {Promise<IFounder>} A promise that resolves to the information of the updated founder.
   * @throws {OrganizationErr.UPDATE_FOUNDER_FAILED} Throws an error if the founder update fails.
   */
  public updateFounder = this.withFetcher(updateFounder);

  /**
   * Deletes a founder record from a specified organization.
   *
   * This function sends a DELETE request to remove a founder from an organization. It uses the organization's unique ID
   * and the founder's unique ID to construct the endpoint for the request. On successful deletion, it returns the information
   * of the deleted founder encapsulated in an IFounder object. If the deletion process encounters any errors, such as
   * a non-200 status response or connectivity issues, a specific error indicating the failure of the founder deletion is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization from which the founder is being deleted.
   * @param {string} founderId - The unique identifier of the founder to be deleted.
   * @returns {Promise<IFounder>} A promise that resolves to the information of the deleted founder.
   * @throws {OrganizationErr.DELETE_FOUNDER_FAILED} Throws an error if the founder deletion fails.
   */
  public deleteFounder = this.withFetcher(deleteFounder);

  /**
   * Adds an address to an organization specified by its ID.
   *
   * This function sends a POST request to add an address to a specified organization. The organization's unique ID and
   * the address details are provided in the IAddressRequest object. On successful addition, it returns the updated
   * organization's information encapsulated in an IOrganizationResponse object. If the addition process encounters any
   * errors, such as a non-201 status response or connectivity issues, a specific error indicating the failure of the
   * address addition is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization to which the address is being added.
   * @param {IAddressRequest} address - The details of the address to be added.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information post address addition.
   * @throws {OrganizationErr.ADD_ADDRESS_FAILED} Throws an error if the address addition fails.
   */
  public addAddress = this.withFetcher(addAddress);

  /**
   * Updates an address of an organization specified by IDs.
   *
   * This function sends a PUT request to update an existing address of an organization. The function requires
   * the organization's unique ID, the address's unique ID, and the updated address details provided in the
   * IAddressRequest object. On successful update, it returns the updated organization's information
   * encapsulated in an IOrganizationResponse object. If the update process encounters any errors, such as
   * a non-200 status response or connectivity issues, a specific error indicating the failure of the address
   * update is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization whose address is being updated.
   * @param {string} addressId - The unique identifier of the address to be updated.
   * @param {IAddressRequest} request - The updated address details.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the address update.
   * @throws {OrganizationErr.UPDATE_ADDRESS_FAILED} Throws an error if the address update fails.
   */
  public updateAddress = this.withFetcher(updateAddress);

  /**
   * Deletes an address from an organization using the specified IDs.
   *
   * This function sends a DELETE request to remove an address from an organization. It requires both the organization's
   * unique ID and the address's unique ID to construct the endpoint for the request. On successful deletion, it returns
   * the updated organization's information encapsulated in an IOrganizationResponse object. If the deletion process encounters
   * any errors, such as a non-200 status response or connectivity issues, a specific error indicating the failure of the
   * address deletion is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization from which the address is being deleted.
   * @param {string} addressId - The unique identifier of the address to be deleted.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information post address deletion.
   * @throws {OrganizationErr.DELETE_ADDRESS_FAILED} Throws an error if the address deletion fails.
   */
  public deleteAddress = this.withFetcher(deleteAddress);

  /**
   * Creates a new organization with the given details.
   *
   * This function sends a POST request to create a new organization. It uses the data provided in the
   * ICreateOrganizationInputDto object to create the organization. On successful creation, it returns the
   * newly created organization's information encapsulated in an IOrganizationResponse object. If the creation
   * process encounters any errors, such as a non-201 status response or connectivity issues, a specific error
   * indicating the failure of the organization creation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {ICreateOrganizationInputDto} organization - The data for creating a new organization.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the newly created organization's information.
   * @throws {OrganizationErr.CREATE_ORGANIZATION_FAILED} Throws an error if the organization creation fails.
   */
  public createOrganization = this.withFetcher(createOrganization);

  /**
   * Updates an existing organization's details using the provided information.
   *
   * This function sends a PUT request to update an organization identified by its unique ID with the new details
   * provided in the IUpdateOrganizationDto object. On successful update, it returns the updated organization's
   * information encapsulated in an IOrganizationResponse object. If the update process encounters any errors,
   * such as a non-200 status response or connectivity issues, a specific error indicating the failure of the
   * organization update is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization to be updated.
   * @param {IUpdateOrganizationDto} updatedOrganization - The new details for updating the organization.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information.
   * @throws {OrganizationErr.UPDATE_ORGANIZATION_FAILED} Throws an error if the organization update fails.
   */
  public updateOrganization = this.withFetcher(updateOrganization);

  /**
   * Disables the roaming feature for a specified organization.
   *
   * This function sends a POST request to disable the roaming feature within an organization. It uses the
   * organization's unique ID to construct the endpoint for the request. On successful operation, it returns the
   * updated organization's information encapsulated in an IOrganizationResponse object. If the process of
   * disabling roaming encounters any errors, such as a non-200 status response or connectivity issues, a specific
   * error indicating the failure of the operation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization for which roaming is being disabled.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after disabling roaming.
   * @throws {OrganizationErr.DISABLE_ROAMING_FAILED} Throws an error if the operation to disable roaming fails.
   */
  public disableRoaming = this.withFetcher(disableRoaming);

  /**
   * Enables the roaming feature for a specified organization.
   *
   * This function sends a POST request to enable the roaming feature within an organization. It uses the
   * organization's unique ID to construct the endpoint for the request. On successful operation, it returns the
   * updated organization's information encapsulated in an IOrganizationResponse object. If the process of
   * enabling roaming encounters any errors, such as a non-200 status response or connectivity issues, a specific
   * error indicating the failure of the operation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} organizationId - The unique identifier of the organization for which roaming is being enabled.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after enabling roaming.
   * @throws {OrganizationErr.ENABLE_ROAMING_FAILED} Throws an error if the operation to enable roaming fails.
   */
  public enableRoaming = this.withFetcher(enableRoaming);

  /**
   * Registers an organization to a person using the provided data.
   *
   * This function sends a POST request to associate an organization with a person. The association details are provided
   * in the IRegisterOrganizationToPerson object. On successful registration, it returns the organization's information
   * encapsulated in an IOrganizationResponse object. If the registration process encounters any errors, such as a
   * non-200 status response or connectivity issues, a specific error indicating the failure of the registration operation
   * is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IRegisterOrganizationToPerson} organizationToPerson - The data for registering an organization to a person.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the organization's information post-registration.
   * @throws {OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED} Throws an error if the registration operation fails.
   */
  public registerOrganizationToPerson = this.withFetcher(
    registerOrganizationToPerson,
  );

  /**
   * Registers a new organization with the provided request details.
   *
   * This function sends a POST request to register a new organization using the details provided in the
   * IRegisterOrganizationRequest object. On successful registration, it returns the newly registered
   * organization's information encapsulated in an IOrganizationResponse object. If the registration process
   * encounters any errors, such as a non-201 status response or connectivity issues, a specific error
   * indicating the failure of the organization registration is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IRegisterOrganizationRequest} request - The registration request details for the new organization.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the information of the newly registered organization.
   * @throws {OrganizationErr.REGISTER_ORGANIZATION_FAILED} Throws an error if the organization registration fails.
   */
  public registerOrganization = this.withFetcher(registerOrganization);

  /**
   * Submits a suggestion for an organization based on the provided request details.
   *
   * This function sends a POST request to submit a suggestion for a new or existing organization using the details
   * provided in the ISuggestOrganizationRequest object. On successful submission, it returns the response encapsulated
   * in an IOrganizationResponse object. If the suggestion submission process encounters any errors, such as a
   * non-201 status response or connectivity issues, a specific error indicating the failure of the suggestion
   * submission is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {ISuggestOrganizationRequest} suggestion - The details of the organization suggestion.
   * @returns {Promise<IOrganizationResponse>} A promise that resolves to the response related to the organization suggestion.
   * @throws {OrganizationErr.SUGGEST_ORGANIZATION_FAILED} Throws an error if the organization suggestion submission fails.
   */
  public suggestOrganization = this.withFetcher(suggestOrganization);
}

export { OrganizationProvider };
