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
  /**
   * Create a new static page in the CMS.
   *
   * @param {ICMSArticleStaticPageCreateInputDto} data - The data for creating a new static page in the CMS.
   * @returns {Promise<IArticle>} A promise that resolves to the newly created static page information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#create-static-page Sherl SDK documentation} for further information
   */
  public createStaticPage = this.withFetcher(createStaticPage);
  /**
   * Add media to an existing CMS page.
   *
   * @param {string} id - The identifier of the CMS page to which media is being added.
   * @param {ICMSArticleAddMediaDto} data - The data for adding media to the CMS page.
   * @returns {Promise<IArticle>} A promise that resolves to the updated article information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#add-media Sherl SDK documentation} for further information
   */
  public addMediaPage = this.withFetcher(addMediaPage);

  /**
   * Delete a media page in the CMS.
   *
   * @param {string} id - The unique identifier of the media page to be deleted.
   * @returns {Promise<IArticle>} A promise that resolves to the deleted media page information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#delete-media Sherl SDK documentation} for further information
   */
  public deleteMediaPage = this.withFetcher(deleteMediaPage);

  /**
   * Get an article by its slug.
   *
   * @param {string} slug - The slug of the article to be retrieved.
   * @returns {Promise<IArticle>} A promise that resolves to the retrieved article information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#get-article-by-slug Sherl SDK documentation} for further information
   */
  public getArticleBySlug = this.withFetcher(getArticleBySlug);

  /**
   * Get an article by its unique identifier.
   *
   * @param {string} id - The unique identifier of the article to be retrieved.
   * @returns {Promise<IArticle>} A promise that resolves to the retrieved article information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#get-article-by-id Sherl SDK documentation} for further information
   */
  public getArticleById = this.withFetcher(getArticleById);

  /**
   * Delete an article by its unique identifier.
   *
   * @param {string} id - The unique identifier of the article to be deleted.
   * @returns {Promise<IArticle>} A promise that resolves to the deleted article information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#delete-article-by-id Sherl SDK documentation} for further information
   */
  public deleteArticleById = this.withFetcher(deleteArticleById);

  /**
   * Update an article by its unique identifier.
   *
   * @param {string} id - The unique identifier of the article to be updated.
   * @param {ICMSArticleUpdateInputDto} updatedArticle - The updated article data.
   * @returns {Promise<IArticle>} A promise that resolves to the updated article information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#update-article-by-id Sherl SDK documentation} for further information
   */
  public updateArticleById = this.withFetcher(updateArticleById);

  /**
   * Create a new training page in the CMS.
   *
   * @param {ICMSArticleTrainingCreateInputDto} data - The data for creating a new training page in the CMS.
   * @returns {Promise<IArticle>} A promise that resolves to the newly created training page information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#create-trainings-pages Sherl SDK documentation} for further information
   */
  public createTrainingsPage = this.withFetcher(createTrainingsPage);

  /**
   * Create a new stories page in the CMS.
   *
   * @param {ICMSArticleStoryCreateInputDto} data - The data for creating a new stories page in the CMS.
   * @returns {Promise<IArticle>} A promise that resolves to the newly created stories page information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#create-stories-pages Sherl SDK documentation} for further information
   */
  public createStoriesPage = this.withFetcher(createStoriesPage);
  /**
   * Create a FAQs page in the CMS.
   *
   * @param {ICMSArticleFaqCreateInputDto} data - The data for creating a FAQs page in the CMS.
   * @returns {Promise<IArticle>} A promise that resolves to the created FAQs page information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#create-faqs-pages Sherl SDK documentation} for further information
   */
  public createFaqsPage = this.withFetcher(createFaqsPage);
  /**
   * Create a new posts page in the CMS.
   *
   * @param {ICMSArticleCreateInputDto} data - The data for creating a new posts page in the CMS.
   * @returns {Promise<IArticle>} A promise that resolves to the newly created posts page information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#create-posts-pages Sherl SDK documentation} for further information
   */
  public createPostsPage = this.withFetcher(createPostsPage);

  /**
   * Get a list of articles based on filters.
   *
   * @param {FindPostsFilters} filters - Filters to apply when retrieving articles.
   * @returns {Promise<ISearchResult<IArticle>>} A promise that resolves to a search result containing articles.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#finds-posts Sherl SDK documentation} for further information
   */
  public getPosts = this.withFetcher(getPosts);

  /**
   * Get a public article by its slug.
   *
   * @param {string} slug - The slug of the public article to be retrieved.
   * @returns {Promise<IArticle>} A promise that resolves to the retrieved public article information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#find-article-by-slug Sherl SDK documentation} for further information
   */
  public getPublicArticleBySlug = this.withFetcher(getPublicArticleBySlug);

  /**
   * Get a public article by its unique identifier.
   *
   * @param {string} id - The unique identifier of the public article to be retrieved.
   * @returns {Promise<IArticle>} A promise that resolves to the retrieved public article information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#find-article-by-id Sherl SDK documentation} for further information
   */
  public getPublicArticleById = this.withFetcher(getPublicArticleById);

  /**
   * Get a list of public articles based on filters.
   *
   * @param {FindPostsFilters} filters - Filters to apply when retrieving public articles.
   * @returns {Promise<ISearchResult<IArticle>>} A promise that resolves to a search result containing public articles.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/cms#find-article Sherl SDK documentation} for further information
   */
  public getPublicArticles = this.withFetcher(getPublicArticles);
}

export { CmsProvider };
