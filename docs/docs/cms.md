---
id: cms
title: Cms
---

## Create static page

<span class="badge badge--warning">Require authentication</span>

Create static page

```ts
const staticPage = await cms(client).createStaticPage(data: ICMSArticleStaticPageCreateInputDto);
```

```ts
interface ICMSArticleStaticPageCreateInputDto {
  id: string;
  title: string;
  content: string;
}
```

This call returns an [IArticle](cms-types#iarticle) object

## Add media

<span class="badge badge--warning">Require authentication</span>

Add media

```ts
const addMedia = await cms(client).addMediaPage(data: ICMSArticleAddMediaDto);
```

```ts
interface ICMSArticleAddMediaDto {
  id: string;
  uri: string;
  width: number;
  height: number;
  caption: ICreateCaptionOutputDto;
  thumbnail: ICreateThumbnailOutputDto;
}
```

- [ICreateCaptionOutputDto](cms-types#icreatecaptionoutputdto)(`caption`)
- [ICreateThumbnailOutputDto](cms-types#icreatethumbnailoutputdto) (`thumbnail`)

This call returns an [IArticle](cms-types#iarticle) object

## Delete media

<span class="badge badge--warning">Require authentication</span>

Delete media

```ts
const deleteMedia = await cms(client).deleteMediaPage(data: ICMSArticleAddMediaDto);
```

```ts
interface ICMSArticleAddMediaDto {
  id: string;
  uri: string;
  width: number;
  height: number;
  caption: ICreateCaptionOutputDto;
  thumbnail: ICreateThumbnailOutputDto;
}
```

- [ICreateCaptionOutputDto](cms-types#icreatecaptionoutputdto)(`caption`)
- [ICreateThumbnailOutputDto](cms-types#icreatethumbnailoutputdto) (`thumbnail`)
  This call returns an [IArticle](cms-types#iarticle) object

## Get article by slug

<span class="badge badge--warning">Require authentication</span>

Get article by slug

```ts
const getArticleBySlug = await cms(client).getArticleBySlug(slug: string);
```

This call returns an [IArticle](cms-types#iarticle) object

## Get article by id

<span class="badge badge--warning">Require authentication</span>

Find one article by id

```ts
const getArticleById = await cms(client).getArticleById(id: string);
```

This call returns an [IArticle](cms-types#iarticle) object

## Delete article

<span class="badge badge--warning">Require authentication</span>

Delete article

```ts
const deleteArticle = await cms(client).deleteArticleById(id:string);
```

This call returns an [IArticle](cms-types#iarticle) object

## Create article

<span class="badge badge--warning">Require authentication</span>

Create article

```ts
const createArticle = await cms(client).updateArticleById(data: ICMSArticleUpdateInputDto);
```

```ts
interface ICMSArticleUpdateInputDto {
  title: string;
  content: string;
  beginDate: Date;
  endDate: Date;
  status: string;
}
```

This call returns an [IArticle](cms-types#iarticle) object

## Create trainings pages

<span class="badge badge--warning">Require authentication</span>

Create trainings pages

```ts
const createTrainings = await cms(client).createTrainingsPage(data: ICMSArticleTrainingCreateInputDto);
```

```ts
interface ICMSArticleTrainingCreateInputDto {
  id: string;
  title: string;
  tags: [string];
}
```

This call returns an [IArticle](cms-types#iarticle) object

## Create stories pages

<span class="badge badge--warning">Require authentication</span>

Create stories pages

```ts
const createStories = await cms(client).createStoriesPage(data: ICMSArticleStoryCreateInputDto);
```

```ts
interface ICMSArticleStoryCreateInputDto {
  id: string;
  title: string;
}
```

This call returns an [IArticle](cms-types#iarticle) object

## Create FAQS pages

<span class="badge badge--warning">Require authentication</span>

Create faqs pages

```ts
const createFaqs = await cms(client).createFaqsPage(data: ICMSArticleFaqCreateInputDto);
```

```ts
interface ICMSArticleFaqCreateInputDto {
  id: string;
  title: string;
  content: string;
}
```

This call returns an [IArticle](cms-types#iarticle) object

## Create posts pages

<span class="badge badge--warning">Require authentication</span>

Create posts pages

```ts
const createPosts = await cms(client).createPostsPage(data: ICMSArticleCreateInputDto);
```

```ts
interface ICMSArticleCreateInputDto {
  id: string;
  title: string;
  content: string;
  beginDate: Date;
  endDate: Date;
}
```

This call returns an [IArticle](cms-types#iarticle) object

## Find posts

<span class="badge badge--warning">Require authentication</span>

Find posts

```ts
const getPosts = await cms(client).getPosts(filter: FindPostsFilters);
```

```ts
interface FindPostsFilters extends PaginationFilters {
  authorUri?: string;
  slug?: string;
  organizationUri?: string;
  type?: string;
  beginDate?: string;
  endDate?: string;
  status?: string;
  id?: string;
}
```

This interface extends [PaginationFilters](pagination#pagination-filters).

This call returns an [ISearchResult](pagination#isearchresult) of [IArticle] (cms-types#iarticle) objects.

## Find article by slug

Find article by slug

<span class="badge badge--success">Public</span>

```ts
const getFindArticleBySlug = await cms(client).getPublicArticleBySlug(slug: string);
```

This call returns an [IArticle](cms-types#iarticle) object

## Find article by id

Find article by id

<span class="badge badge--success">Public</span>

```ts
const getFindArticleById = await cms(client).getPublicArticleById(id: string);
```

This call returns an [IArticle](cms-types#iarticle) object

## Find article

Find article

<span class="badge badge--success">Public</span>

```ts
const getFindArticle = await cms(client).getPublicArticles(data: FindPostsFilters);
```

```ts
interface FindPostsFilters extends PaginationFilters {
  authorUri?: string;
  slug?: string;
  organizationUri?: string;
  type?: string;
  beginDate?: string;
  endDate?: string;
  status?: string;
  id?: string;
}
```

This interface extends [PaginationFilters](pagination#pagination-filters).

This call returns an [ISearchResult](pagination#isearchresult) of [IArticle] (cms-types#iarticle) objects.
