import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  addOrganizationRib,
  getAllOrganizationDocuments,
  getOrganization,
  getOrganizations,
  getPublicOrganization,
  getPublicOrganizationBySlug,
  getPublicOrganizations,
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
  public addOrganizationRib = this.withFetcher(addOrganizationRib);
  public getAllOrganizationDocuments = this.withFetcher(
    getAllOrganizationDocuments,
  );
}

export { OrganizationProvider };
