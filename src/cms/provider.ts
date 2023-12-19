import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  createStaticPage,
  addMediaPage,
  deleteMediaPage,
  getArticleBySlug,
  getArticleById,
  deleteArticleById,
  updateArticleById,
  createTrainingsPage,
  createStoriesPage,
  createFaqsPage,
  createPostsPage,
  getPosts,
  getPublicArticleBySlug,
  getPublicArticleById,
  getPublicArticles,
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
  public updateArticleById = this.withFetcher(updateArticleById);
  public createTrainingsPage = this.withFetcher(createTrainingsPage);
  public createStoriesPage = this.withFetcher(createStoriesPage);
  public createFaqsPage = this.withFetcher(createFaqsPage);
  public createPostsPage = this.withFetcher(createPostsPage);
  public getPosts = this.withFetcher(getPosts);
  public getPublicArticleBySlug = this.withFetcher(getPublicArticleBySlug);
  public getPublicArticleById = this.withFetcher(getPublicArticleById);
  public getPublicArticles = this.withFetcher(getPublicArticles);
}

export { CmsProvider };
