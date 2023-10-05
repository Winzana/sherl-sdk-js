import { PaginationFilters } from '../../common';

export interface INotificationFilters extends PaginationFilters {
  sms?: number;
  email?: number;
  uri?: string;
  id?: string;
}
