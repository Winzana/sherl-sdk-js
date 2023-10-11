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
  createPostsPage,
  getFindPosts,
  getPublicFindArticleBySlug,
  getPublicArticleById,
  getPublicFindArticle,
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
  public createPostsPage = this.withFetcher(createPostsPage);
  public getFindPosts = this.withFetcher(getFindPosts);
  public getPublicFindArticleBySlug = this.withFetcher(
    getPublicFindArticleBySlug,
  );
  public getPublicArticleById = this.withFetcher(getPublicArticleById);
  public getPublicFindArticle = this.withFetcher(getPublicFindArticle);
}

export { CmsProvider };
