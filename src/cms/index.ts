import { SherlClient } from '../common';
import { ICMSArticleStaticPageCreateInputDto } from './types';
import { CmsProvider } from './provider';

const cms = (client: SherlClient) => new CmsProvider(client);
export { cms, ICMSArticleStaticPageCreateInputDto };
