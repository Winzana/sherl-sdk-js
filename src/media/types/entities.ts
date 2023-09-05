export interface IMedia {
  id: string;
  uri: string;
  width: number;
  height: number;
  caption: ICaption;
  thumbnail: IThumbnail;
  domain: string;
  consumerId: string;
}

export interface ICaption {
  id: string;
  size: number;
  contentUrl: string;
  description: string;
  name: string;
  encodingFormat: string;
}

export interface IThumbnail {
  width: number;
  height: number;
  caption: ICaption;
}

export interface IMediaGetReturn {
  id: string;
  uri: string;
  consumerId: string;
  caption: ICaption;
}
