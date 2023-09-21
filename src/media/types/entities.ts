export interface IImageObject {
  id?: string;
  consumerId?: string;
  domain?: string;
  uri?: string;
  width?: number;
  height?: number;
  caption: IMediaObject;
  thumbnail?: IImageObject;
  createdAt?: Date;
}

export interface IMediaObject {
  contentUrl: string;
  description?: string;
  duration?: string;
  encodingFormat: string;
  size?: number;
  name: string;
  id: string;
}
