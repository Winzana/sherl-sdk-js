---
id: etl
title: ETL
---

Extract, Transform and Load from pre-saved configuration or by using customized model.
A model is represented by a json file containing all the configurations linked to the 3 actions (extract, transform, load).

ETL domain provides 3 functions to interact with the ETL.

## Save config

<span class="badge badge--warning">Require authentication</span>

```ts
await etl(client).saveConfig(config: IEtlSaveConfigInputDto);
```

```ts
interface IEtlSaveConfigInputDto {
  source: ISourceModel;
  destination: IDestinationModel;
  schemas: ISchemaModel;
  filters: IFilterModel;
}
```

- [ISourceModel](etl-types#isourcemodel)(`source`)
- [IDestinationModel](etl-types#idestinationmodel)(`destination`)
- [ISchemaModel](etl-types#ischemamodel)(`schemas`)
- [IFilterModel](etl-types#ifiltermodel)(`filters`)

This call returns an [IConfigModel](etl-types#iconfigmodel) object.

## Extract transform load

<span class="badge badge--warning">Require authentication</span>

This action launch an asynchronous ETL task using a specific configuration.

**:warning:  The configuration will not be saved.**

```ts
await etl(client).extractTransformLoad(config: IExtractTransformLoadInputDto);
```

```ts
interface IExtractTransformLoadInputDto {
  config: IConfigModel;
}
```

- [IConfigModel](etl-types#iconfigmodel)(`config`)

This call returns an [IEtlResponse](etl-types#ietlresponse) object.

## Extract transform load by config id

<span class="badge badge--warning">Require authentication</span>

This action launch an asynchronous ETL task with a particular id.

**:warning: This config should be saved before.**

```ts
await etl(client).extractTransformLoadById(id: string);
```

This call returns an [IEtlResponse](etl-types#ietlresponse) object.