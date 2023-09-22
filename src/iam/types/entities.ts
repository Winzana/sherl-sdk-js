export interface IProfile {
  id: string;
  uri: string;
  name: string;
  consumerId?: string;
  rolesUri: string[];
  roles: IRole[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IRole {
  id: string;
  uri: string;
  name: string;
  description: string;
  statement?: IStatement[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface IStatement {
  action: string[];
  effect: string;
  ressources: string;
}
