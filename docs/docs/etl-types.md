---
id: etl-types
title: ETL types
---
# Interfaces

## IEtlResponse 

```ts
interface IEtlResponse {
  status: boolean;
}
```

## IConfigModel

```ts
interface IConfigModel {
  id: string;
  uri: string;
  consumerId: string;
  source: ISourceModel;
  destination: IDestinationModel;
  schemas: ISchemaModel[];
  filters: IFilterModel[];
  createdAt?: Date;
}
```

## IEtlSaveConfigInputDto

```ts
interface IEtlSaveConfigInputDto {
  source: ISourceModel;
  destination: IDestinationModel;
  schemas: ISchemaModel;
  filters: IFilterModel;
}
```

## ISourceModel

```ts
interface ISourceModel {
  method: ExtractSourceMethodEnum;
  options: IOptionsModel;
  name: string;
}
```

## IDestinationModel

```ts
interface IDestinationModel {
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
```

## ISchemaModel

```ts
interface ISchemaModel {
  name: string;
  sources: ISchemaSourceModel[];
  destinations: ISchemaDestinationModel[];
}
```

## IFilterModel

```ts
interface IFilterModel {
  name: string;
  type: FieldValueTypesEnum;
  options: IFilterOptionsModel;
  fields: IFilterFieldModel[];
}
```

## IOptionModel

```ts
interface IOptionsModel {
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
```

## ISchemaSourceModel

```ts
interface ISchemaSourceModel {
  type: FieldValueTypesEnum;
  outputType?: FieldValueTypesEnum;
  wrappers?: IWrapperModel[];
  defaultValue?: any;
  ignoreEmpty?: boolean;
}
```

## IWrapperModel

```ts
interface IWrapperModel {
  identifier: WrapperIdentifierEnum;
  options?: object;
}
```

## ISchemaDestinationModel

```ts
interface ISchemaDestinationModel {
  name: string;
  outputType?: FieldValueTypesEnum;
  type: FieldValueTypesEnum;
  pattern?: string;
  indexed?: boolean;
  wrappers?: IWrapperModel[];
}
```

## IFilterFieldModel

```ts
interface IFilterFieldModel {
  field: string;
  boost?: number;
}
```

## IFilterOptionModel

```ts
interface IFilterOptionsModel {
  fuzziness?: number;
  prefix_length?: number;
  boost?: number;
}
```

# Enumerations

## LoaderTypeEnum

```ts
enum LoaderTypeEnum {
  DATABASE = 'database',
  REST_API = 'rest-api',
  EVENT = 'event',
}
```

## DatabaseLoaderTypeEnum

```ts
enum DatabaseLoaderTypeEnum {
  MONGODB = 'mongodb',
  ELASTIC_SEARCH = 'elastic_search',
}
```

## WrapperIdentifierEnum

```ts
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
```

## FieldValueTypesEnum

```ts
enum FieldValueTypesEnum {
  NUMBER = 'number',
  STRING = 'string',
  BOOLEAN = 'boolean',
  OBJECT = 'object',
  ARRAY = 'array',
  ANY = 'any',
}
```

## HttpRequestTypeEnum

```ts
enum HttpRequestTypeEnum {
  REST_API = 'rest-api',
  SOAP_API = 'soap_api',
  HTML_PARSE = 'html-parse',
}
```

## ExtractSourceMethodEnum

```ts
enum ExtractSourceMethodEnum {
  HTTP_REQUEST = 'http-request',
  HTTP_PARSE = 'http-parse',
  DB_CONNECTION = 'db-connection',
  FILE_READING = 'file-reading',
}
```

## MimeTypeEnum

```ts
enum MimeTypeEnum {
  TEXT_JSON = 'text/json',
  APPLICATION_JSON = 'application/json',
  TEXT_HTML = 'text/html',
}

```