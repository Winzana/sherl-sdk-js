import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { deleteFile, getFile, uploadFile } from './actions';
import { errorFactory } from './errors';

class MediaProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  public uploadFile = this.withFetcher(uploadFile);
  public getFile = this.withFetcher(getFile);
  public deleteFile = this.withFetcher(deleteFile);
}

export { MediaProvider };
