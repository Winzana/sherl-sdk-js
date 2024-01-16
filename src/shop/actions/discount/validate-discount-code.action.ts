import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscount } from '../../types';

export const validateDiscountCode = async (
  fetcher: Fetcher,
  code: string,
  productUri: string,
): Promise<IDiscount> => {
  try {
    const response = await fetcher.post<IDiscount>(
      endpoints.VALIDATE_DISCOUNT_CODE,
      {
        code,
        productUri,
      },
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(DiscountErr.VALIDATE_DISCOUNT_CODE_FORBIDDEN);
      case 404:
        throw errorFactory.create(DiscountErr.DISCOUNT_CODE_NOT_FOUND);
      default:
        throw errorFactory.create(DiscountErr.VALIDATE_DISCOUNT_CODE_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(DiscountErr.VALIDATE_DISCOUNT_CODE_FAILED),
    );
  }
};
