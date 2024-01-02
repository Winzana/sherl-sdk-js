import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

export const deleteOpeningHoursSpecification = async (
  fetcher: Fetcher,
  organizationId: string,
  hoursSpecId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.delete<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.MANAGE_OPENING_HOURS_SPECIFICATION, {
        organizationId,
        hoursSpecId,
      }),
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(OrganizationErr.ORGANIZATION_NOT_FOUND);
      default:
        throw errorFactory.create(
          OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(
        OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FAILED,
      ),
    );
  }
};
