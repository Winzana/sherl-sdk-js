import { SherlClient } from '../common';
import {
  ICMSArticleStaticPageCreateInputDto,
  ICMSArticleAddMediaDto,
} from './types';
import { CmsProvider } from './provider';
export * as CmsTypes from './types';

export const cms = (client: SherlClient) => new CmsProvider(client);
export { ICMSArticleStaticPageCreateInputDto, ICMSArticleAddMediaDto };
