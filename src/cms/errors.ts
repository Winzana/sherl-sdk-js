import { ErrorFactory } from '../common/errors';

export enum CmsErr {
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
  CMS_GET_PUBLIC_ARTICLE_FAILED = 'cms/cms-get-public-article-failed',
}

export const errors = {
  [CmsErr.CMS_CREATE_FAILED]: 'Failed to cms report',
  [CmsErr.CMS_ADD_MEDIA_FAILED]: 'Failed to create media cms report',
  [CmsErr.CMS_DELETE_MEDIA_FAILED]: 'Failed to delete media cms report',
  [CmsErr.CMS_GET_SLUG_FAILED]: 'Failed to get slug cms report',
  [CmsErr.CMS_GET_BY_ID_FAILED]: 'Failed to get by id cms report',
  [CmsErr.CMS_DELETE_BY_ID_FAILED]: 'Failed to delete by id cms report',
  [CmsErr.CMS_UPDATE_ARTICLE_BY_ID_FAILED]:
    'Failed to update article by id cms report',
  [CmsErr.CMS_CREATE_TRAININGS_FAILED]: 'Failed create trainings cms report',
  [CmsErr.CMS_CREATE_STORIES_FAILED]: 'Failed create stories cms report',
  [CmsErr.CMS_CREATE_FAQS_FAILED]: 'Failed create faqs cms report',
  [CmsErr.CMS_CREATE_POSTS_FAILED]: 'Failed create posts cms report',
  [CmsErr.CMS_GET_POSTS_FAILED]: 'Failed get posts cms report',
  [CmsErr.CMS_GET_ARTICLE_BY_SLUG_FAILED]:
    'Failed get  article by slug cms report',
  [CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED]:
    'Failed to get public find id cms report',
  [CmsErr.CMS_GET_PUBLIC_ARTICLE_FAILED]:
    'Failed to get public find article cms report',
};

export const errorFactory = new ErrorFactory<CmsErr>('CMS', errors);
