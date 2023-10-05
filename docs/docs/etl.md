---
id: etl
title: ETL
---

The ETL domain allows you to extract, transform and load data from pre-saved configurations or a one-shot model.
A model is represented by a json file containing all the configurations linked to the 3 actions (extract, transform, load).

Here you will find 3 functions that will allow you to interact with the ETL.

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

This action launch an asynchrone task on ETL with config.
The configuration will not be saved.

<span class="badge badge--warning">Require authentication</span>

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

This action launch an asynchrone task on ETL with config given by id
This config should be saved before.

<span class="badge badge--warning">Require authentication</span>

```ts
await etl(client).extractTransformLoadById(id: string);
```

This call returns an [IEtlResponse](etl-types#ietlresponse) object.