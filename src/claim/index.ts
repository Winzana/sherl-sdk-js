import { SherlClient } from '../common';
import { ClaimProvider } from './provider';
import {
  IClaimTicketFilters,
  IClaim,
  IClaimCreate,
  IClaimUpdate,
} from './types';

const claim = (client: SherlClient) => new ClaimProvider(client);
export { claim, IClaimTicketFilters, IClaim, IClaimCreate, IClaimUpdate };
