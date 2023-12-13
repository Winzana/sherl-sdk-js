import { ErrorFactory } from '../common/errors';

export enum CmsErr {
  CMS_NOT_FOUND = 'cms/not_found',
  CMS_CREATE_FAILED = 'cms/cms-create-failed',
  CMS_ADD_MEDIA_FAILED = 'cms/cms-add-media-failed',
  CMS_DELETE_MEDIA_FAILED = 'cms/cms-delete-media-failed',
  CMS_GET_SLUG_FAILED = 'cms/cms-get-slug-failed',
  CMS_GET_BY_ID_FAILED = 'cms/cms-get-by-id-failed',
  CMS_DELETE_BY_ID_FAILED = 'cms/cms-delete-by-id-failed',
  CMS_UPDATE_ARTICLE_BY_ID_FAILED = 'cms/cms-update-article-by-id-failed',
  CMS_CREATE_TRAININGS_FAILED = 'cms/cms-create-trainings-failed',
  CMS_CREATE_STORIES_FAILED = 'cms/cms-create-stories-failed',
  CMS_CREATE_FAQS_FAILED = 'cms/cms-create-faqs-failed',
  CMS_CREATE_POSTS_FAILED = 'cms/cms-create-posts-failed',
  CMS_GET_POSTS_FAILED = 'cms/cms-get-posts-failed',
  CMS_GET_ARTICLE_BY_SLUG_FAILED = 'cms/cms-get-article-by-slug-failed',
  CMS_GET_PUBLIC_FIND_ID_FAILED = 'cms/cms-get-public-by-id-failed',
  CMS_GET_PUBLIC_ARTICLES_FAILED = 'cms/cms-get-public-articles-failed',
  CREATE_CMS_EVENT_FAILED = 'cms-event/creation-failed',
  CREATE_CMS_EVENT_FAILED_FORBIDDEN = 'cms-event/creation-failed-forbidden',
  CREATE_CMS_EVENT_FAILED_CMS_NOT_EXIST = 'cms-event/creation-failed-cms-not-exist',
  CREATE_CMS_FAQS_FAILED_CMS_NOT_EXIST = 'cms-faqs/creation-failed-cms-not-exist',
  CMS_CREATE_POSTS_FAILED_CMS_NOT_EXIST = 'cms-post/creation-failed-cms-not-exist',
  CMS_CREATE_FAILED_CMS_NOT_EXIST = 'cms-static/creation-failed-cms-not-exist',
  CMS_CREATE_STORIES_FAILED_CMS_NOT_EXIST = 'cms-stories/creation-failed-cms-not-exist',
  CMS_CREATE_TRAININGS_FAILED_CMS_NOT_EXIST = 'cms-trainings/creation-failed-cms-not-exist',
  CMS_DELETE_BY_ID_FAILED_CMS_FORBIDDEN = 'cms-delete/creation-failed-delete-forbidden',
  CMS_DELETE_MEDIA_FAILED_MEDIA_NOT_EXIST = 'cms-delete/creation-failed-delete-already-exist',
  CMS_GET_BY_ID_FAILED_POST_FORBIDDEN = 'cms-post/creation-failed-post-get-forbidden',
  CMS_GET_SLUG_FAILED_ARTICLE_FORBIDDEN = 'cms-article/creation-failed-article-get-slug-forbidden',
  CMS_GET_POSTS_FAILED_POSTS_FORBIDDEN = 'cms-post/creation-failed-post-get-forbidden',
  CMS_GET_PUBLIC_FIND_ID_FAILED_POST_FORBIDDEN = 'cms-public/creation-failed-post-public-forbidden',
  CMS_GET_PUBLIC_ARTICLES_FAILED_POSTS_FORBIDDEN = 'cms-article/creation-failed-article-public-forbidden',
  CREATE_CMS_EVENT_FAILED_CMS_FORBIDDEN = 'cms-article/creation-failed-article-slug-forbidden',
  CREATE_CMS_FAQS_FAILED_CMS_FORBIDDEN = 'cms-faqs/creation-failed-article-slug-forbidden',
  CREATE_CMS_POSTS_FAILED_CMS_FORBIDDEN = 'cms-faqs/creation-failed-article-slug-forbidden',
  CREATE_CMS_STATIC_FAILED_CMS_FORBIDDEN = 'cms-faqs/creation-failed-article-slug-forbidden',
  CREATE_CMS_TRAINING_FAILED_CMS_FORBIDDEN = 'cms-faqs/creation-failed-article-slug-forbidden',
  CREATE_CMS_STORIES_FAILED_CMS_FORBIDDEN = 'cms-faqs/creation-failed-article-slug-forbidden',
  CREATE_CMS_MEDIA_FAILED_CMS_FORBIDDEN = 'cms-faqs/creation-failed-media-slug-forbidden',
}

export const errors = {
  [CmsErr.CMS_NOT_FOUND]: 'Failed to create CMS not found.',
  [CmsErr.CMS_CREATE_FAILED]: 'Failed to create CMS report.',
  [CmsErr.CMS_ADD_MEDIA_FAILED]: 'Failed to create CMS media report.',
  [CmsErr.CMS_DELETE_MEDIA_FAILED]: 'Failed to delete CMS media report.',
  [CmsErr.CMS_GET_SLUG_FAILED]: 'Failed to retrieve CMS slug report.',
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
  [CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED]:
    'Failed to retrieve public CMS report by ID.',
  [CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED]:
    'Failed to retrieve public CMS articles.',
  [CmsErr.CREATE_CMS_EVENT_FAILED]: 'Failed to create CMS event.',
  [CmsErr.CREATE_CMS_EVENT_FAILED_FORBIDDEN]:
    'Failed to create CMS event, access denied.',
  [CmsErr.CREATE_CMS_EVENT_FAILED_CMS_NOT_EXIST]:
    'Failed to create CMS event, CMS not exist.',
  [CmsErr.CREATE_CMS_FAQS_FAILED_CMS_NOT_EXIST]:
    'Failed to create CMS FAQs, CMS not exist.',
  [CmsErr.CMS_CREATE_POSTS_FAILED_CMS_NOT_EXIST]:
    'Failed to create CMS posts, posts already exist.',
  [CmsErr.CMS_CREATE_FAILED_CMS_NOT_EXIST]:
    'Failed to create CMS static, static already exist.',
  [CmsErr.CMS_CREATE_STORIES_FAILED_CMS_NOT_EXIST]:
    'Failed to create CMS stories, stories already exist.',
  [CmsErr.CMS_CREATE_TRAININGS_FAILED_CMS_NOT_EXIST]:
    'Failed to create CMS trainings, trainings already exist.',
  [CmsErr.CMS_DELETE_BY_ID_FAILED_CMS_FORBIDDEN]:
    'Failed to create CMS delete, delete forbidden',
  [CmsErr.CMS_DELETE_MEDIA_FAILED_MEDIA_NOT_EXIST]:
    'Failed to create CMS delete, delete already exist.',
  [CmsErr.CMS_GET_BY_ID_FAILED_POST_FORBIDDEN]:
    'Failed to create CMS post, failed forbidden.',
  [CmsErr.CMS_GET_SLUG_FAILED_ARTICLE_FORBIDDEN]:
    'Failed to create CMS slug, failed article forbidden.',
  [CmsErr.CMS_GET_POSTS_FAILED_POSTS_FORBIDDEN]:
    'Failed to create CMS posts, failed posts forbidden',
  [CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED_POST_FORBIDDEN]:
    'Failed to create CMS posts, failed public forbidden.',
  [CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED_POSTS_FORBIDDEN]:
    'Failed to create CMS article, failed public articles forbidden.',
  [CmsErr.CREATE_CMS_EVENT_FAILED_CMS_FORBIDDEN]:
    'Failed to create CMS slug, failed article forbidden.',
  [CmsErr.CREATE_CMS_FAQS_FAILED_CMS_FORBIDDEN]:
    'Failed to create CMS FAQs, failed FAQs forbidden.',
  [CmsErr.CREATE_CMS_POSTS_FAILED_CMS_FORBIDDEN]:
    'Failed to create CMS posts, failed posts forbidden.',
  [CmsErr.CREATE_CMS_STATIC_FAILED_CMS_FORBIDDEN]:
    'Failed to create CMS posts, failed posts forbidden.',
  [CmsErr.CREATE_CMS_TRAINING_FAILED_CMS_FORBIDDEN]:
    'Failed to create CMS training, failed training forbidden.',
  [CmsErr.CREATE_CMS_STORIES_FAILED_CMS_FORBIDDEN]:
    'Failed to create CMS stories, failed stories forbidden.',
  [CmsErr.CREATE_CMS_MEDIA_FAILED_CMS_FORBIDDEN]:
    'Failed to create CMS media, failed media forbidden.',
};

export const errorFactory = new ErrorFactory<CmsErr>('CMS', errors);
