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

  public getOrganization = this.withFetcher(getOrganization);
  public getOrganizations = this.withFetcher(getOrganizations);
  public getPublicOrganization = this.withFetcher(getPublicOrganization);
  public getPublicOrganizationBySlug = this.withFetcher(
    getPublicOrganizationBySlug,
  );
  public getPublicOrganizations = this.withFetcher(getPublicOrganizations);
  public addKycDocument = this.withFetcher(addKycDocument);
  public updateKycDocument = this.withFetcher(updateKycDocument);
  public getAllKycDocuments = this.withFetcher(getAllKycDocuments);
  public addRib = this.withFetcher(addRib);
  public getAllRibs = this.withFetcher(getAllRibs);
  public setCommunication = this.withFetcher(setCommunication);
  public addLogo = this.withFetcher(addLogo);
  public deleteLogo = this.withFetcher(deleteLogo);
  public createBackgroundImage = this.withFetcher(createBackgroundImage);
  public createBackgroundImageFromMedia = this.withFetcher(
    createBackgroundImageFromMedia,
  );
  public deleteBackgroundImage = this.withFetcher(deleteBackgroundImage);
  public createPicture = this.withFetcher(createPicture);
  public createPictureFromMedia = this.withFetcher(createPictureFromMedia);
  public deletePicture = this.withFetcher(deletePicture);
  public createOpeningHoursSpecification = this.withFetcher(
    createOpeningHoursSpecification,
  );
  public updateOpeningHoursSpecification = this.withFetcher(
    updateOpeningHoursSpecification,
  );
  public deleteOpeningHoursSpecification = this.withFetcher(
    deleteOpeningHoursSpecification,
  );
  public createEmployee = this.withFetcher(createEmployee);
  public updateEmployee = this.withFetcher(updateEmployee);
  public deleteEmployee = this.withFetcher(deleteEmployee);
  public createFounder = this.withFetcher(createFounder);
  public updateFounder = this.withFetcher(updateFounder);
  public deleteFounder = this.withFetcher(deleteFounder);
  public addAddress = this.withFetcher(addAddress);
  public updateAddress = this.withFetcher(updateAddress);
  public deleteAddress = this.withFetcher(deleteAddress);
  public createOrganization = this.withFetcher(createOrganization);
  public updateOrganization = this.withFetcher(updateOrganization);
  public disableRoaming = this.withFetcher(disableRoaming);
  public enableRoaming = this.withFetcher(enableRoaming);
  public registerOrganizationToPerson = this.withFetcher(
    registerOrganizationToPerson,
  );
  public registerOrganization = this.withFetcher(registerOrganization);
  public suggestOrganization = this.withFetcher(suggestOrganization);
}

export { OrganizationProvider };
