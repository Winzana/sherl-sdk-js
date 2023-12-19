import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  getAllIamProfiles,
  getIamProfileById,
  getIamRoleById,
} from './actions';
import { errorFactory } from './errors';

class IamProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Get all IAM profiles based on the provided filters.
   *
   * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
   * @param {IIamProfilesFilters} filters - Filters to apply when fetching IAM profiles.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/iam#get-all-iam-profiles Sherl SDK documentation} for further
   */
  public getAllIamProfiles = this.withFetcher(getAllIamProfiles);

  /**
   * Get an IAM profile by its unique identifier (ID).
   *
   * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
   * @param {string} id - The unique identifier (ID) of the IAM profile to retrieve.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/iam#get-iam-profile-by-id Sherl SDK documentation} for further
   */
  public getIamProfileById = this.withFetcher(getIamProfileById);

  /**
   * Get an IAM role by its unique identifier (ID).
   *
   * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
   * @param {string} id - The unique identifier (ID) of the IAM role to retrieve.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/iam#get-iam-role-by-id Sherl SDK documentation} for further
   */
  public getIamRoleById = this.withFetcher(getIamRoleById);
}

export { IamProvider };
