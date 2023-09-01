import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { Pagination } from '../../common/types/response';

import { IClaim, IClaimTicketFilters } from '../types/entities';

//TODO replace with the goods entities
export const getAllClaims = async (
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: IClaimTicketFilters,
): Promise<Pagination<IClaim[]>> => {
  const response = await fetcher.get<Pagination<IClaim[]>>(
    endpoints.GET_ALL_CLAIMS,
    {
      page,
      itemsPerPage,
      ...filters,
    },
  );

  if (response.status !== 200) {
    throw new Error(`Failed to fetch claim API (status: ${response.status})`);
  }

  return response.data;
};
