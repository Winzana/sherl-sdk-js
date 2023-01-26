import { setConfig } from './actions/set-config.action';

export interface IGetPublicConfigResponse {
  code: string;
  value: any;
}

export interface IConfig {
  id: string;
  isPublic: boolean;
  code: string;
  value: any;
  consumer: string;
}

export interface ISetConfig {
  isPublic: boolean;
  code: string;
  value: any;
  appliedTo?: string;
}
