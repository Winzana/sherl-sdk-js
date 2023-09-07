export interface IGetAllIamProfiles {
  id: string;
  uri: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  rolesUri: string[];
}

export interface IGetOneIamProfile extends IGetAllIamProfiles {
  roles: IIamRole[];
}

export interface IIamRole {
  id: string;
  uri: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  statement: IStatement[];
}

interface IStatement {
  action: string[];
  effect: string;
  ressources: string;
}
