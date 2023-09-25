import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { createOpinionClaim } from './actions/claim-opinion.actions';
import { createOpinion } from './actions/create-opinion.actions';
import { getOpinionsAverage } from './actions/get-opinions-average.actions';
import { getOpinionsIGive } from './actions/get-opinions-i-give.actions';
import { getOpinions } from './actions/get-opinions.actions';
import { getPublicOpinions } from './actions/get-public-opinions.actions';
import { updateOpinion } from './actions/update-opinion.actions';

import { errorFactory } from './errors';

class OpinionProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  public getOpinions = this.withFetcher(getOpinions);
  public getPublicOpinions = this.withFetcher(getPublicOpinions);
  public createOpinion = this.withFetcher(createOpinion);
  public updateOpinion = this.withFetcher(updateOpinion);
  public createOpinionClaim = this.withFetcher(createOpinionClaim);
  public getOpinionsIGive = this.withFetcher(getOpinionsIGive);
  public getOpinionsAverage = this.withFetcher(getOpinionsAverage);
}

export { OpinionProvider };
