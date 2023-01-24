import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
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
}

export { OrganizationProvider };
