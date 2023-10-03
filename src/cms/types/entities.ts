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
export interface ICreateOutputDto {
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
