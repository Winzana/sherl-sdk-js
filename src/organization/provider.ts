import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  getOrganization,
  getOrganizations,
  getPublicOrganization,
  getPublicOrganizationBySlug,
  getPublicOrganizations,
  addDocument,
  updateDocument,
  getAllDocuments,
  addRib,
  getAllRibs,
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
  public addDocument = this.withFetcher(addDocument);
  public updateDocument = this.withFetcher(updateDocument);
  public getAllDocuments = this.withFetcher(getAllDocuments);
  public addRib = this.withFetcher(addRib);
  public getAllRibs = this.withFetcher(getAllRibs);
}

export { OrganizationProvider };
