export interface IClaimTicketFilters {
  [key: string]: unknown;
}

export interface IClaimCreate {
  create: string;
}
export interface IClaim {
  id: string;
}
export interface IClaimUpdate {
  status: string;
}
