import { ErrorFactory } from '../common/errors';

export enum CmsErr {
  CMS_ADD_MEDIA_FAILED = 'cms/cms-add-media-failed',
  CREATE_CMS_STATIC_PAGES_FAILED = 'cms/cms-create-static-pages-failed',
  CMS_GET_PUBLIC_ARTICLE_BY_SLUG_FAILED = 'cms/cms-get-slug-failed',
  CMS_GET_BY_ID_FAILED = 'cms/cms-get-by-id-failed',
  CMS_DELETE_BY_ID_FAILED = 'cms/cms-delete-by-id-failed',
  CMS_UPDATE_ARTICLE_BY_ID_FAILED = 'cms/cms-update-article-by-id-failed',
  CMS_CREATE_TRAININGS_FAILED = 'cms/cms-create-trainings-failed',
  CMS_CREATE_STORIES_FAILED = 'cms/cms-create-stories-failed',
  CMS_CREATE_FAQS_FAILED = 'cms/cms-create-faqs-failed',
  CMS_CREATE_POSTS_FAILED = 'cms/cms-create-posts-failed',
  CMS_GET_POSTS_FAILED = 'cms/cms-get-posts-failed',
  CMS_GET_ARTICLE_BY_SLUG_FAILED = 'cms/cms-get-article-by-slug-failed',
  CMS_GET_PUBLIC_ARTICLE_BY_ID_FAILED = 'cms/cms-get-public-by-id-failed',
  CMS_GET_PUBLIC_ARTICLES_FAILED = 'cms/cms-get-public-articles-failed',
  CMS_ADD_MEDIA_FORBIDDEN = 'cms/cms-add-media-forbidden',
  CMS_DELETE_ARTICLE_BY_ID_FORBIDDEN = 'cms-delete/cms-create-failed-delete-forbidden',
  CMS_GET_ARTICLE_BY_ID_FORBIDDEN = 'cms-post/cms-create-failed-post-get-forbidden',
  CMS_GET_ARTICLE_BY_SLUG_FORBIDDEN = 'cms-article/cms-create-failed-article-get-slug-forbidden',
  CMS_GET_POSTS_FORBIDDEN = 'cms-post/cms-create-failed-post-get-forbidden',
  CMS_GET_PUBLIC_ARTICLE_BY_ID_FORBIDDEN = 'cms-public/cms-create-failed-post-public-forbidden',
  CMS_GET_PUBLIC_ARTICLES_FORBIDDEN = 'cms-article/cms-create-failed-article-public-forbidden',
  CREATE_FAQS_CMS_FORBIDDEN = 'cms/cms-create-cms-faqs-forbidden',
  CREATE_CMS_POSTS_CMS_FORBIDDEN = 'cms-faqs/cms-create-failed-article-slug-forbidden',
  CREATE_CMS_STATIC_PAGES_FORBIDDEN = 'cms-faqs/cms-create-failed-article-slug-forbidden',
  CREATE_CMS_TRAINING_FORBIDDEN = 'cms-faqs/cms-create-failed-article-slug-forbidden',
  CREATE_CMS_STORIES_CMS_FORBIDDEN = 'cms-faqs/cms-create-failed-article-slug-forbidden',
  DELETE_CMS_MEDIA_FORBIDDEN = 'cms-faqs/cms-create-failed-media-slug-forbidden',
  ARTICLE_NOT_FOUND = 'cms/cms-create-article-not-found',
  CMS_GET_PUBLIC_ARTICLE_BY_SLUG_FORBIDDEN = 'cms/cms-create-public-article-by-slug-forbidden',
  MEDIA_NOT_FOUND = 'cms/cms-create-media-not-found',
  CMS_UPDATE_ARTICLE_BY_ID_FORBIDDEN = 'cms/cms-create-article-update-article-by-id-forbidden',
  DELETE_CMS_MEDIA_FAILED = 'cms/cms-delete-cms-media-failed',
}

export const errors = {
  [CmsErr.MEDIA_NOT_FOUND]: 'Media not found.',
  [CmsErr.CMS_ADD_MEDIA_FORBIDDEN]: 'failed to add media forbidden',
  [CmsErr.DELETE_CMS_MEDIA_FAILED]: 'Failed to delete CMS mediareport.',
  [CmsErr.CREATE_CMS_STATIC_PAGES_FAILED]:
    'Failed to create CMS static pages report.',
  [CmsErr.CMS_ADD_MEDIA_FAILED]: 'Failed to create CMS media report.',
  [CmsErr.CMS_GET_PUBLIC_ARTICLE_BY_SLUG_FAILED]:
    'Failed to retrieve CMS slug report.',
  [CmsErr.CMS_GET_BY_ID_FAILED]: 'Failed to retrieve CMS report by ID.',
  [CmsErr.CMS_DELETE_BY_ID_FAILED]: 'Failed to delete CMS report by ID.',
  [CmsErr.CMS_UPDATE_ARTICLE_BY_ID_FAILED]:
    'Failed to update CMS report by ID.',
  [CmsErr.CMS_CREATE_TRAININGS_FAILED]:
    'Failed to create CMS trainings report.',
  [CmsErr.CMS_CREATE_STORIES_FAILED]: 'Failed to create CMS stories report.',
  [CmsErr.CMS_CREATE_FAQS_FAILED]: 'Failed to create CMS FAQs report.',
  [CmsErr.CMS_CREATE_POSTS_FAILED]: 'Failed to create CMS posts report.',
  [CmsErr.CMS_GET_POSTS_FAILED]: 'Failed to retrieve CMS posts report.',
  [CmsErr.CMS_GET_ARTICLE_BY_SLUG_FAILED]:
    'Failed to retrieve CMS report by slug.',
  [CmsErr.CMS_GET_PUBLIC_ARTICLE_BY_ID_FAILED]:
    'Failed to retrieve public CMS report by ID.',
  [CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED]:
    'Failed to retrieve public CMS articles.',
  [CmsErr.CMS_DELETE_ARTICLE_BY_ID_FORBIDDEN]:
    'Failed to create CMS delete, delete forbidden.',
  [CmsErr.CMS_GET_ARTICLE_BY_ID_FORBIDDEN]:
    'Failed to create CMS post, failed forbidden.',
  [CmsErr.CMS_GET_ARTICLE_BY_SLUG_FORBIDDEN]:
    'Failed to create CMS slug, failed article forbidden.',
  [CmsErr.CMS_GET_POSTS_FORBIDDEN]:
    'Failed to create CMS posts, failed posts forbidden.',
  [CmsErr.CMS_GET_PUBLIC_ARTICLE_BY_ID_FORBIDDEN]:
    'Failed to create CMS posts, failed public forbidden.',
  [CmsErr.CMS_GET_PUBLIC_ARTICLES_FORBIDDEN]:
    'Failed to create CMS article, failed public articles forbidden.',
  [CmsErr.CREATE_FAQS_CMS_FORBIDDEN]:
    'Failed to create CMS FAQs, failed FAQs forbidden.',
  [CmsErr.CMS_GET_PUBLIC_ARTICLE_BY_SLUG_FORBIDDEN]:
    'Failed to create CMS posts, failed posts forbidden.',
  [CmsErr.CREATE_CMS_POSTS_CMS_FORBIDDEN]:
    'Failed to create CMS posts, failed posts forbidden.',
  [CmsErr.CREATE_CMS_STATIC_PAGES_FORBIDDEN]:
    'Failed to create CMS posts, failed posts forbidden.',
  [CmsErr.CREATE_CMS_TRAINING_FORBIDDEN]:
    'Failed to create CMS training, failed training forbidden.',
  [CmsErr.CREATE_CMS_STORIES_CMS_FORBIDDEN]:
    'Failed to create CMS stories, failed stories forbidden.',
  [CmsErr.DELETE_CMS_MEDIA_FORBIDDEN]:
    'Failed to create CMS media, failed media forbidden.',
  [CmsErr.ARTICLE_NOT_FOUND]: 'Failed to create CMS article not found.',
  [CmsErr.CMS_UPDATE_ARTICLE_BY_ID_FORBIDDEN]:
    'Failed to update CMS article, failed article forbidden.',
};

export const errorFactory = new ErrorFactory<CmsErr>('CMS', errors);
