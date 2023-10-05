export interface IAnalyticResponse {
  id: string;
  key: string;
  value: 0;
  number: 0;
  metadata: { [key: string]: any };
}

export interface IAnalyticsInputBaseDto {
  beginDate?: string;
  endDate?: string;
  userId?: string;
  limit?: number;
}

export interface ICAAnalyticsInputDto extends IAnalyticsInputBaseDto {
  organizationId?: string;
  average?: boolean;
}

export interface IProductAnalyticsInputDto extends IAnalyticsInputBaseDto {
  productId?: string;
}

export interface INotificationsAnalyticsInputDto {
  beginDate?: string;
  endDate?: string;
  organizationId?: string;
}

export interface IAnalyticsInputDto {
  organizationId?: string;
  userId?: string;
  sort?: string;
}

export interface IAnalyticsFindBIInputDto {
  index?: string;
  filters: any;
}
