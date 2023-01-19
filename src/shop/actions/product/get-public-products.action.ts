import { ProductApi } from '../../api/product/client';
import { errorFactory, ProductErr } from '../../errors/product/errors';

export const getPublicProducts = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
) => {
  const response = await ProductApi.getPublicProducts(
    page,
    itemsPerPage,
    filters,
  );

  if (response.status !== 200) {
    throw errorFactory.create(ProductErr.FETCH_FAILED, {
      status: response.status,
    });
  }

  return response.data;
};
