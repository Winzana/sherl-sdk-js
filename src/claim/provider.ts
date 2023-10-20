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
  public getAllClaims = this.withFetcher(getAllClaims);
  public getClaimById = this.withFetcher(getClaimById);
  public createClaimById = this.withFetcher(createClaimTicket);
  public updateClaimById = this.withFetcher(updateClaim);
  public refundClaim = this.withFetcher(refundClaim);
  public replyClaim = this.withFetcher(replyClaim);
  public findClaimBy = this.withFetcher(findClaimBy);
}

export { ClaimProvider };
