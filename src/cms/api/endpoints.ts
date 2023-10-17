/**
 * List of endpoints.
 */
export const endpoints = {
  CMS_CREATE_STATIC: '/api/cms/articles/static-page',
  MANAGE_MEDIA: '/api/cms/articles/posts/:id/media',
  GET_SLUG: '/api/cms/articles/posts/find-one-by-slug/:slug',
  MANAGE_POSTS: '/api/cms/articles/posts/:id',
  CREATE_TRAINING: '/api/cms/articles/trainings',
  CREATE_STORIES: '/api/cms/articles/stories',
  CREATE_FAQS: '/api/cms/articles/faqs',
  CREATE_POSTS: '/api/cms/articles/posts',
  GET_FIND_ARTICLE: '/api/cms/articles/posts',
  GET_FIND_ARTICLE_BY_SLUG:
    '/api/public/cms/articles/posts/find-one-by-slug/:slug',
  GET_PUBLIC_ARTICLE: '/api/public/cms/articles/posts',
};
