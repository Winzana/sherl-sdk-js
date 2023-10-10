import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  createStaticPage,
  addMediaPage,
  deleteMediaPage,
  getArticleBySlug,
  getArticleById,
  deleteArticleById,
  putCreateArticle,
  createTrainingsPage,
  createStoriesPage,
  createFaqsPage,
} from './actions';
import { errorFactory } from './errors';

class CmsProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  public createStaticPage = this.withFetcher(createStaticPage);
  public addMediaPage = this.withFetcher(addMediaPage);
  public deleteMediaPage = this.withFetcher(deleteMediaPage);
  public getArticleBySlug = this.withFetcher(getArticleBySlug);
  public getArticleById = this.withFetcher(getArticleById);
  public deleteArticleById = this.withFetcher(deleteArticleById);
  public putCreateArticle = this.withFetcher(putCreateArticle);
  public createTrainingsPage = this.withFetcher(createTrainingsPage);
  public createStoriesPage = this.withFetcher(createStoriesPage);
  public createFaqsPage = this.withFetcher(createFaqsPage);
}

export { CmsProvider };
