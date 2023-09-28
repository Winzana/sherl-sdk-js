import { Fetcher } from '../../../common/api';
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
    if (response.status !== 201) {
      throw errorFactory.create(OrganizationErr.CREATE_FOUNDER_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.CREATE_FOUNDER_FAILED);
  }
};
