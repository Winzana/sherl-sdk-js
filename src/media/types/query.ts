export interface IMediaQuery {
  id: string;
  domain: string;
  type?: TypeEnum;
}

export interface IUploadData {
  upload: any;
}

export enum TypeEnum {
  FILE = 'file',
  MOVIE = 'movie',
}
