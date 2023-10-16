import { PaginationFilters } from '../../common';
import { IImageObject } from '../../media';
import { IPerson } from '../../person';

export interface ICMSArticleStaticPageCreateInputDto {
  id: string;
  title: string;
  content: string;
}
export interface ICreateCaptionOutputDto {
  contentUrl: string;
  description: string;
  duration: string;
  encodingFormat: string;
  size: number;
  name: string;
  id: string;
}
export interface ICreateThumbnailOutputDto {
  id: string;
  uri: string;
  width: number;
  height: number;
  caption: ICreateCaptionOutputDto;
}
export interface ICMSArticleAddMediaDto {
  id: string;
  uri: string;
  width: number;
  height: number;
  caption: ICreateCaptionOutputDto;
  thumbnail: ICreateThumbnailOutputDto;
}
export interface ICMSArticleTrainingCreateInputDto {
  id: string;
  title: string;
  tags: [string];
}
export interface ICMSArticleStoryCreateInputDto {
  id: string;
  title: string;
}
export interface ICMSArticleFaqCreateInputDto {
  id: string;
  title: string;
  content: string;
}
export interface ICMSArticleUpdateInputDto {
  title: string;
  content: string;
  beginDate: Date;
  endDate: Date;
  status: string;
}
export interface ICMSArticleCreateInputDto {
  id: string;
  title: string;
  content: string;
  beginDate: Date;
  endDate: Date;
}

export interface IArticle {
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

export enum ArticleTypeEnum {
  BLOG = 'blog',
  STORY = 'story',
  TRAINING = 'training',
  PAGE = 'page',
  FAQ = 'faq',
}

export enum ArticleStatusEnum {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

export interface FindPostsFilters extends PaginationFilters {
  authorUri?: string;
  slug?: string;
  organizationUri?: string;
  type?: string;
  beginDate?: string;
  endDate?: string;
  status?: string;
  id?: string;
}
