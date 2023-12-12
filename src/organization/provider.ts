import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  getOrganization,
  getOrganizations,
  getPublicOrganization,
  getPublicOrganizationBySlug,
  getPublicOrganizations,
  getAllRibs,
  addKycDocument,
  updateKycDocument,
  getAllKycDocuments,
  addRib,
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

  // GET
  public getOrganization = this.withFetcher(getOrganization);
  public getOrganizations = this.withFetcher(getOrganizations);
  public getPublicOrganization = this.withFetcher(getPublicOrganization);
  public getPublicOrganizationBySlug = this.withFetcher(
    getPublicOrganizationBySlug,
  );
  public getPublicOrganizations = this.withFetcher(getPublicOrganizations);
  public getAllKycDocuments = this.withFetcher(getAllKycDocuments);
  public getAllRibs = this.withFetcher(getAllRibs);

  // ADD
  public addKycDocument = this.withFetcher(addKycDocument);
  public addRib = this.withFetcher(addRib);
  public addLogo = this.withFetcher(addLogo);
  public addAddress = this.withFetcher(addAddress);

  // CREATE
  public createOpeningHoursSpecification = this.withFetcher(
    createOpeningHoursSpecification,
  );
  public createEmployee = this.withFetcher(createEmployee);
  public createOrganization = this.withFetcher(createOrganization);
  public createFounder = this.withFetcher(createFounder);
  public createPicture = this.withFetcher(createPicture);
  public createPictureFromMedia = this.withFetcher(createPictureFromMedia);
  public createBackgroundImage = this.withFetcher(createBackgroundImage);
  public createBackgroundImageFromMedia = this.withFetcher(
    createBackgroundImageFromMedia,
  );
  public registerOrganization = this.withFetcher(registerOrganization);
  public registerOrganizationToPerson = this.withFetcher(
    registerOrganizationToPerson,
  );

  // UPDATE
  public updateKycDocument = this.withFetcher(updateKycDocument);
  public updateOpeningHoursSpecification = this.withFetcher(
    updateOpeningHoursSpecification,
  );
  public updateAddress = this.withFetcher(updateAddress);
  public updateFounder = this.withFetcher(updateFounder);
  public updateEmployee = this.withFetcher(updateEmployee);
  public updateOrganization = this.withFetcher(updateOrganization);
  public setCommunication = this.withFetcher(setCommunication);

  // DELETE
  public deleteLogo = this.withFetcher(deleteLogo);
  public deleteBackgroundImage = this.withFetcher(deleteBackgroundImage);
  public deletePicture = this.withFetcher(deletePicture);
  public deleteOpeningHoursSpecification = this.withFetcher(
    deleteOpeningHoursSpecification,
  );
  public deleteEmployee = this.withFetcher(deleteEmployee);
  public deleteFounder = this.withFetcher(deleteFounder);
  public deleteAddress = this.withFetcher(deleteAddress);
  public disableRoaming = this.withFetcher(disableRoaming);

  // OTHERS
  public enableRoaming = this.withFetcher(enableRoaming);
  public suggestOrganization = this.withFetcher(suggestOrganization);
}

export { OrganizationProvider };
