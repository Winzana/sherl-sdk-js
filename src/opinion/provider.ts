import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { createOpinionClaim } from './actions/claim-opinion.action';
import { createOpinion } from './actions/create-opinion.action';
import { getOpinionsAverage } from './actions/get-opinions-average.action';
import { getOpinionsIGive } from './actions/get-opinions-i-give.action';
import { getOpinions } from './actions/get-opinions.action';
import { getPublicOpinions } from './actions/get-public-opinions.action';
import { updateOpinion } from './actions/update-opinion.action';

import { errorFactory } from './errors';

class OpinionProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Get opinions based on provided filters.
   *
   * @param {IOpinionFilters} filters - Filters to apply to the request.
   * @returns {Promise<Pagination<IOpinion<T, K>>>} A promise that resolves with paginated opinion data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/opinion#get-opinions-list Sherl SDK documentation} for further information
   */
  public getOpinions = this.withFetcher(getOpinions);

  /**
   * Get public opinions based on provided filters.
   *
   * @param {IOpinionFilters} filters - Filters to apply to the request.
   * @returns {Promise<Pagination<IOpinion<T, K>>>} A promise that resolves with paginated public opinion data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/opinion#get-opinions-list Sherl SDK documentation} for further information
   */
  public getPublicOpinions = this.withFetcher(getPublicOpinions);

  /**
   * Create an opinion.
   *
   * @param {ICreateOpinionInput} opinion - The input data for creating the opinion.
   * @returns {Promise<IOpinion<T, K>>} A promise that resolves with the created opinion data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/opinion#create-opinion Sherl SDK documentation} for further information
   */
  public createOpinion = this.withFetcher(createOpinion);

  /**
   * Update the status of an opinion based on the provided ID and updated opinion status.
   *
   * @param {string} id - The ID of the opinion to be updated.
   * @param {IOpinionUpdateStatusInputDto} updatedOpinion - The updated opinion status.
   * @returns {Promise<IOpinion<T, K>>} A promise that resolves with the updated opinion data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/opinion#update-opinion-status Sherl SDK documentation} for further information
   */
  public updateOpinion = this.withFetcher(updateOpinion);

  /**
   * Create a claim related to an opinion.
   *
   * @param {string} opinionId - The ID of the opinion to which the claim is related.
   * @param {IClaimOpinionInput} claim - The claim input data.
   * @returns {Promise<any>} A promise that resolves when the claim is successfully created.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/opinion#create-opinion-claim Sherl SDK documentation} for further information
   */
  public createOpinionClaim = this.withFetcher(createOpinionClaim);

  /**
   * Get opinions given by a user based on provided filters.
   *
   * @param {IOpinionFilters} filters - Filters to apply to the request.
   * @returns {Promise<Pagination<IOpinion<T, K>>>} A promise that resolves with paginated opinion data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/opinion#get-the-opinions-given-by-connected-user Sherl SDK documentation} for further information
   */
  public getOpinionsIGive = this.withFetcher(getOpinionsIGive);

  /**
   * Get the average opinion data for a given resource.
   *
   * @param {string} opinionToUri - The URI of the resource for which to fetch the average opinions.
   * @returns {Promise<IAverage>} A promise that resolves with the average opinion data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/opinion#get-opinion-average-score Sherl SDK documentation} for further information
   */
  public getOpinionsAverage = this.withFetcher(getOpinionsAverage);
}

export { OpinionProvider };
