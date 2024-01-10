import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  createClaimTicket,
  findClaimBy,
  getAllClaims,
  getClaimById,
  refundClaim,
  replyClaim,
  updateClaim,
} from './actions';
import { errorFactory } from './errors';

class ClaimProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Creates a claim ticket with the specified ID and parameters.
   *
   * @param {string} id - The ID of the claim ticket.
   * @param {Partial<IClaimCreate>} params - The parameters used to create the claim ticket.
   * @return {Promise<IClaim>} The created claim ticket.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/claim#create-claim-ticket Sherl SDK documentation} for further information
   */
  public createClaimById = this.withFetcher(createClaimTicket);

  /**
   * Finds a claim by applying optional filters.
   *
   * @param {FindClaimFilter} filters - Optional filters to apply.
   * @return {Promise<IClaim>} A promise that resolves to the found claim.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/claim/#find-claim-with-filters Sherl SDK documentation} for further information
   */
  public findClaimBy = this.withFetcher(findClaimBy);

  /**
   * Retrieves all claims based on the provided filters.
   *
   * @param {IClaimTicketFilters} filters - The filters to apply to the claims.
   * @return {Promise<Pagination<IClaim>>} - A promise that resolves to a pagination object containing the claims.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/claim#get-all-claims Sherl SDK documentation} for further information
   */
  public getAllClaims = this.withFetcher(getAllClaims);

  /**
   * Retrieves a claim by its ID.
   *
   * @param {string} id - The ID of the claim to retrieve.
   * @return {Promise<IClaim>} A promise that resolves to the retrieved claim.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/claim#get-claim-by-id Sherl SDK documentation} for further information
   */
  public getClaimById = this.withFetcher(getClaimById);

  /**
   * Retrieves a claim refund using the provided fetcher and claim ID.
   *
   * @param {string} id - The ID of the claim to refund.
   * @return {Promise<IClaim>} A promise that resolves to the refunded claim object.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/claim#refund-claim Sherl SDK documentation} for further information
   */
  public refundClaim = this.withFetcher(refundClaim);

  /**
   * Sends a reply to a claim identified by the given ID.
   *
   * @param {string} id - The ID of the claim to reply to.
   * @param {string} replyContent - The content of the reply.
   * @returns {Promise<IClaim>} - A promise that resolves to the updated claim object.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/claim#reply-to-claim Sherl SDK documentation} for further information
   */
  public replyClaim = this.withFetcher(replyClaim);

  /**
   * Updates a claim with the specified ID and status.
   *
   * @param {string} id - The ID of the claim to update.
   * @param {ClaimStatusEnum} status - The new status for the claim.
   * @return {Promise<IClaim>} The updated claim.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/claim#update-claim-ticket Sherl SDK documentation} for further information
   */
  public updateClaimById = this.withFetcher(updateClaim);
}

export { ClaimProvider };
