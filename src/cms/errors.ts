import { ErrorFactory } from '../common/errors';

export enum CmsErr {
  CMS_CREATE_FAILED = 'bug-reports/cms-create-failed',
  CMS_ADD_MEDIA_FAILED = 'bug-reports/cms-add-media-failed',
  CMS_DELETE_MEDIA_FAILED = 'bug-reports/cms-delete-media-failed',
  CMS_GET_SLUG_FAILED = 'bug-reports/cms-get-slug-failed',
  CMS_GET_FIND_ID_FAILED = 'bug-reports/cms-get-find-id-failed',
  CMS_DELETE_FIND_ID_FAILED = 'bug-reports/cms-delete-find-id-failed',
  CMS_UPDATE_ARTICLE_BY_ID_FAILED = 'bug-reports/cms-update-article-by-id-failed',
  CMS_CREATE_TRAININGS_FAILED = 'bug-reports/cms-create-trainings-failed',
  CMS_CREATE_STORIES_FAILED = 'bug-reports/cms-create-stories-failed',
  CMS_CREATE_FAQS_FAILED = 'bug-reports/cms-create-faqs-failed',
  CMS_CREATE_POSTS_FAILED = 'bug-reports/cms-create-posts-failed',
  CMS_GET_FIND_POSTS_FAILED = 'bug-reports/cms-get-find-posts-failed',
  CMS_GET_FIND_ARTICLE_BY_SLUG_FAILED = 'bug-reports/cms-get-find-article-by-slug-failed',
  CMS_GET_PUBLIC_FIND_ID_FAILED = 'bug-reports/cms-get-public-find-id-failed',
  CMS_GET_PUBLIC_ARTICLE_FAILED = 'bug-reports/cms-get-public-article-failed',
}

export const errors = {
  [CmsErr.CMS_CREATE_FAILED]: 'Failed to cms report',
  [CmsErr.CMS_ADD_MEDIA_FAILED]: 'Failed to create media cms report',
  [CmsErr.CMS_DELETE_MEDIA_FAILED]: 'Failed to delete media cms report',
  [CmsErr.CMS_GET_SLUG_FAILED]: 'Failed to get slug cms report',
  [CmsErr.CMS_GET_FIND_ID_FAILED]: 'Failed to get find id cms report',
  [CmsErr.CMS_DELETE_FIND_ID_FAILED]: 'Failed to delete find id cms report',
  [CmsErr.CMS_UPDATE_ARTICLE_BY_ID_FAILED]:
    'Failed to update article by id cms report',
  [CmsErr.CMS_CREATE_TRAININGS_FAILED]: 'Failed create trainings cms report',
  [CmsErr.CMS_CREATE_STORIES_FAILED]: 'Failed create stories cms report',
  [CmsErr.CMS_CREATE_FAQS_FAILED]: 'Failed create faqs cms report',
  [CmsErr.CMS_CREATE_POSTS_FAILED]: 'Failed create posts cms report',
  [CmsErr.CMS_GET_FIND_POSTS_FAILED]: 'Failed get find posts cms report',
  [CmsErr.CMS_GET_FIND_ARTICLE_BY_SLUG_FAILED]:
    'Failed get find article by slug cms report',
  [CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED]:
    'Failed to get public find id cms report',
  [CmsErr.CMS_GET_PUBLIC_ARTICLE_FAILED]:
    'Failed to get public find article cms report',
};

export const errorFactory = new ErrorFactory<CmsErr>('CMS', errors);
