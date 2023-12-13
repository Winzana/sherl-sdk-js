import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICreateFounderDto, IFounder } from '../../types';

export const createFounder = async (
  fetcher: Fetcher,
  organizationId: string,
  founder: ICreateFounderDto,
): Promise<IFounder> => {
  try {
    const response = await fetcher.post<IFounder>(
      StringUtils.bindContext(endpoints.CREATE_FOUNDER, {
        organizationId,
      }),
      founder,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.CREATE_FOUNDER_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.CREATE_FOUNDER_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.CREATE_FOUNDER_FAILED);
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(OrganizationErr.CREATE_FOUNDER_FAILED),
    );
  }
};
