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
  duration: string;
}

export interface IThumbnail {
  id: string;
  uri: string;
  width: number;
  height: number;
  caption: ICaption;
}

export interface IFile {
  id: string;
  uri: string;
  width: number;
  height: number;
  consumerId: string;
  caption: ICaption;
}
