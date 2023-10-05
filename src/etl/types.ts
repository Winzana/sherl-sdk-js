export interface IEtlResponse {
  status: boolean;
}

export interface IExtractTransformLoadInputDto {
  config: IConfigModel;
}

export interface IConfigModel {
  id: string;
  uri: string;
  consumerId: string;
  source: ISourceModel;
  destination: IDestinationModel;
  schemas: ISchemaModel[];
  filters: IFilterModel[];
  createdAt?: Date;
}

export interface IEtlSaveConfigInputDto {
  source: ISourceModel;
  destination: IDestinationModel;
  schemas: ISchemaModel;
  filters: IFilterModel;
}

export interface ISourceModel {
  method: ExtractSourceMethodEnum;
  options: IOptionsModel;
  name: string;
}

export interface IOptionsModel {
  endpoint: string;
  header: { [key: string]: any };
  query?: { [key: string]: any };
  dataAttribute?: string;
  pageAttribute: string;
  itemPerPageAttribute: string;
  itemsPerPageValue: number;
  type: HttpRequestTypeEnum;
  mimeType: MimeTypeEnum;
  totalItemsHeader?: string;
  totalItemsAttribute?: string;
  isPaginationZeroBased?: boolean;
  isPaginationOffsetBased?: boolean;
}

export enum ExtractSourceMethodEnum {
  HTTP_REQUEST = 'http-request',
  HTTP_PARSE = 'http-parse',
  DB_CONNECTION = 'db-connection',
  FILE_READING = 'file-reading',
}

export enum HttpRequestTypeEnum {
  REST_API = 'rest-api',
  SOAP_API = 'soap_api',
  HTML_PARSE = 'html-parse',
}

export enum MimeTypeEnum {
  TEXT_JSON = 'text/json',
  APPLICATION_JSON = 'application/json',
  TEXT_HTML = 'text/html',
}

export interface IDestinationModel {
  loaderType: LoaderTypeEnum;
  database?: string;
  collection?: string;
  entity?: string;
  indexed?: boolean;
  user?: string;
  password?: string;
  host?: string;
  port?: string;
  databaseType?: DatabaseLoaderTypeEnum;
  uniqueFields?: string[];
}

export enum LoaderTypeEnum {
  DATABASE = 'database',
  REST_API = 'rest-api',
  EVENT = 'event',
}

export enum DatabaseLoaderTypeEnum {
  MONGODB = 'mongodb',
  ELASTIC_SEARCH = 'elastic_search',
}

export interface ISchemaModel {
  name: string;
  sources: ISchemaSourceModel[];
  destinations: ISchemaDestinationModel[];
}

export interface ISchemaSourceModel {
  type: FieldValueTypesEnum;
  outputType?: FieldValueTypesEnum;
  wrappers?: IWrapperModel[];
  defaultValue?: any;
  ignoreEmpty?: boolean;
}

export interface ISchemaDestinationModel {
  name: string;
  outputType?: FieldValueTypesEnum;
  type: FieldValueTypesEnum;
  pattern?: string;
  indexed?: boolean;
  wrappers?: IWrapperModel[];
}

export enum FieldValueTypesEnum {
  NUMBER = 'number',
  STRING = 'string',
  BOOLEAN = 'boolean',
  OBJECT = 'object',
  ARRAY = 'array',
  ANY = 'any',
}

export interface IWrapperModel {
  identifier: WrapperIdentifierEnum;
  options?: object;
}

export enum WrapperIdentifierEnum {
  UPPERCASE = 'uppercase',
  LOWERCASE = 'lowercase',
  PARSE_INT = 'parse_int',
  BIRTHDATE_AGE = 'birthdate_age',
  LEADING_ZEROS = 'leading_zeros',
  NOT_OPERATOR = 'not_operator',
  ARRAY_FIND = 'array_find',
  ARRAY_MAP = 'array_map',
  PROPERTY = 'property',
  TO_BOOLEAN = 'to_boolean',
  NORMALIZER = 'normalizer',
  MATCH = 'match',
}

export interface IFilterModel {
  name: string;
  type: FieldValueTypesEnum;
  options: IFilterOptionsModel;
  fields: IFilterFieldModel[];
}

export interface IFilterFieldModel {
  field: string;
  boost?: number;
}

export interface IFilterOptionsModel {
  fuzziness?: number;
  prefix_length?: number;
  boost?: number;
}
