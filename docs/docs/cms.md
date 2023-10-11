---
id: Cms
title: Cms
---

## Create Static Page

<span class="badge badge--warning">Require authentication</span>

Create static page

```ts
const staticPage = await staticPage(client).createStaticPage(data: ICMSArticleStaticPageCreateInputDto);
```

```ts
interface ICMSArticleStaticPageCreateInputDto {
  id: string;
  title: string;
  content: string;
}
```

This call returns a string

## Add Media

<span class="badge badge--warning">Require authentication</span>

Add media

```ts
const addMedia = await addMedia(client).addMediaPage(data: ICMSArticleAddMediaDto);
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

This call returns a string

## Delete Media

<span class="badge badge--warning">Require authentication</span>

Delete media

```ts
const deleteMedia = await deleteMedia(client).deleteMediaPage(data: ICMSArticleAddMediaDto);
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

This call returns a string

## Get Article By Slug

<span class="badge badge--warning">Require authentication</span>

Get article by slug

```ts
const getArticleBySlug = await getArticleBySlug(client).getArticleBySlug(data: IArticle);
```

```ts
interface IArticle {
  id: string;
  uri: string;
  title: string;
  slug: string;
  resume: string;
  content: string;
  consumerId?: string;
  organizationUri?: string;
  type: ArticleTypeEnum;
  authorUri: string;
  author?: IPerson;
  beginDate: Date;
  endDate?: Date;
  tokens: {
    facebook: string;
  };
  status: ArticleStatusEnum;
  media?: IImageObject;
  metadatas?: { [key: string]: any };
  createdAt?: Date;
  updatedAt?: Date;
}
```

This call returns a string

## Find One Article By Id

<span class="badge badge--warning">Require authentication</span>

Find one article by id

```ts
const getArticleById = await getArticleById(client).getArticleById(data: IArticle);
```

```ts
interface IArticle {
  id: string;
  uri: string;
  title: string;
  slug: string;
  resume: string;
  content: string;
  consumerId?: string;
  organizationUri?: string;
  type: ArticleTypeEnum;
  authorUri: string;
  author?: IPerson;
  beginDate: Date;
  endDate?: Date;
  tokens: {
    facebook: string;
  };
  status: ArticleStatusEnum;
  media?: IImageObject;
  metadatas?: { [key: string]: any };
  createdAt?: Date;
  updatedAt?: Date;
}
```

This call returns a string

## Delete Article

<span class="badge badge--warning">Require authentication</span>

Delete article

```ts
const deleteArticle = await deleteArticle(client).deleteArticleById(data: ICMSArticleAddMediaDto);
```

```ts
interface IArticle {
  id: string;
  uri: string;
  title: string;
  slug: string;
  resume: string;
  content: string;
  consumerId?: string;
  organizationUri?: string;
  type: ArticleTypeEnum;
  authorUri: string;
  author?: IPerson;
  beginDate: Date;
  endDate?: Date;
  tokens: {
    facebook: string;
  };
  status: ArticleStatusEnum;
  media?: IImageObject;
  metadatas?: { [key: string]: any };
  createdAt?: Date;
  updatedAt?: Date;
}
```

This call returns a string

## Create Article

<span class="badge badge--warning">Require authentication</span>

Create article

```ts
const createArticle = await createArticle(client).putCreateArticle(data: ICMSArticleUpdateInputDto);
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

This call returns a string

## Create Trainings Pages

<span class="badge badge--warning">Require authentication</span>

Create trainings pages

```ts
const createTrainings = await createTrainingsPage(client).createTrainingsPage(data: ICMSArticleTrainingCreateInputDto);
```

```ts
interface ICMSArticleTrainingCreateInputDto {
  id: string;
  title: string;
  tags: [string];
}
```

This call returns a string

## Create Stories Pages

<span class="badge badge--warning">Require authentication</span>

Create stories pages

```ts
const createStories = await createStoriesPage(client).createStoriesPage(data: ICMSArticleStoryCreateInputDto);
```

```ts
interface ICMSArticleStoryCreateInputDto {
  id: string;
  title: string;
}
```

This call returns a string

## Create FAQS Pages

<span class="badge badge--warning">Require authentication</span>

Create faqs pages

```ts
const createFaqs = await createFaqsPage(client).createFaqsPage(data: ICMSArticleFaqCreateInputDto);
```

```ts
interface ICMSArticleFaqCreateInputDto {
  id: string;
  title: string;
  content: string;
}
```

This call returns a string

## Create Posts Pages

<span class="badge badge--warning">Require authentication</span>

Create posts pages

```ts
const createPosts = await createPostsPage(client).createPostsPage(data: ICMSArticleCreateInputDto);
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

This call returns a string

## Find Posts

<span class="badge badge--warning">Require authentication</span>

Find posts

```ts
const findPosts = await getFindPosts(client).getFindPosts(
  page: number,
  itemsPerPage: number,
  authorUri: string,
  slug: string,
  organizationUri: string,
  type: string,
  beginDate: string,
  endDate: string,
  status: string,
  id: string);
```

```ts
interface IArticle {
  id: string;
  uri: string;
  title: string;
  slug: string;
  resume: string;
  content: string;
  consumerId?: string;
  organizationUri?: string;
  type: ArticleTypeEnum;
  authorUri: string;
  author?: IPerson;
  beginDate: Date;
  endDate?: Date;
  tokens: {
    facebook: string;
  };
  status: ArticleStatusEnum;
  media?: IImageObject;
  metadatas?: { [key: string]: any };
  createdAt?: Date;
  updatedAt?: Date;
}
```

This call returns a string

## Find Article By Slug

Find article by slug

<span class="badge badge--success">Public</span>

```ts
const getFindArticleBySlug = await getPublicFindArticleBySlug(client).getPublicFindArticleBySlug(data: IArticle);
```

```ts
interface IArticle {
  id: string;
  uri: string;
  title: string;
  slug: string;
  resume: string;
  content: string;
  consumerId?: string;
  organizationUri?: string;
  type: ArticleTypeEnum;
  authorUri: string;
  author?: IPerson;
  beginDate: Date;
  endDate?: Date;
  tokens: {
    facebook: string;
  };
  status: ArticleStatusEnum;
  media?: IImageObject;
  metadatas?: { [key: string]: any };
  createdAt?: Date;
  updatedAt?: Date;
}
```

This call returns a string

## Find Article By Id

Find article by id

<span class="badge badge--success">Public</span>

```ts
const getFindArticleById = await getPublicArticleById(client).getPublicArticleById(data: IArticle);
```

```ts
interface IArticle {
  id: string;
  uri: string;
  title: string;
  slug: string;
  resume: string;
  content: string;
  consumerId?: string;
  organizationUri?: string;
  type: ArticleTypeEnum;
  authorUri: string;
  author?: IPerson;
  beginDate: Date;
  endDate?: Date;
  tokens: {
    facebook: string;
  };
  status: ArticleStatusEnum;
  media?: IImageObject;
  metadatas?: { [key: string]: any };
  createdAt?: Date;
  updatedAt?: Date;
}
```

This call returns a string

## Find Article

Find article

<span class="badge badge--success">Public</span>

```ts
const getFindArticle = await getPublicArticle(client).getPublicArticle(data: IArticle);
```

```ts
interface IArticle {
  id: string;
  uri: string;
  title: string;
  slug: string;
  resume: string;
  content: string;
  consumerId?: string;
  organizationUri?: string;
  type: ArticleTypeEnum;
  authorUri: string;
  author?: IPerson;
  beginDate: Date;
  endDate?: Date;
  tokens: {
    facebook: string;
  };
  status: ArticleStatusEnum;
  media?: IImageObject;
  metadatas?: { [key: string]: any };
  createdAt?: Date;
  updatedAt?: Date;
}
```

This call returns an [ISearchResult](pagination#isearchresult) of [IArticle] objects.

This call returns a string
