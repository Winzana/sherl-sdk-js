/**
 * List of endpoints.
 */
export const endpoints = {
  CMS_CREATE_STATIC: '/api/cms/articles/static-page',
  ADD_MEDIA: '/api/cms/articles/posts/{id}/media',
  DELETE_MEDIA: '/api/cms/articles/posts/{id}/media',
  GET_SLUG: '/api/cms/articles/posts/find-one-by-slug/{slug}',
  GET_FIND_ID: '/api/cms/articles/posts/{id}',
  DELETE_FIND_ID: '/api/cms/articles/posts/{id}',
  PUT_FIND_ID: '/api/cms/articles/posts/{id}',
  CREATE_TRAINING: '/api/cms/articles/trainings',
  CREATE_STORIES: '/api/cms/articles/stories',
  CREATE_FAQS: '/api/cms/articles/faqs',
};
