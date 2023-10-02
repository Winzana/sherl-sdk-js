import { SherlClient } from '../common';
import { ErrorFactory } from '../common/errors';
import { AbstractProvider } from '../common/provider';
import {
  getDiscount,
  getDiscountByParams,
  getDiscounts,
  getPublicDiscounts,
  postDiscount,
} from './actions/discount';
import { getOrder, getOrders } from './actions/order';
import {
  getCategoriesById,
  getCategories,
  getProduct,
  getProducts,
  getPublicCategoryBySlug,
  getPublicCategoriesAndSub,
  getPublicCategories,
  getPublicProductBySlug,
  getPublicProduct,
  getPublicProducts,
} from './actions/product';

const errorFactory = new ErrorFactory('Shop');

class ShopProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  // Products
  getCategoriesById = this.withFetcher(getCategoriesById);
  getCategories = this.withFetcher(getCategories);
  getProduct = this.withFetcher(getProduct);
  getProducts = this.withFetcher(getProducts);
  getPublicCategoryBySlug = this.withFetcher(getPublicCategoryBySlug);
  getPublicCategoriesAndSub = this.withFetcher(getPublicCategoriesAndSub);
  getPublicCategories = this.withFetcher(getPublicCategories);
  getPublicProductBySlug = this.withFetcher(getPublicProductBySlug);
  getPublicProduct = this.withFetcher(getPublicProduct);
  getPublicProducts = this.withFetcher(getPublicProducts);

  // Discounts
  getDiscount = this.withFetcher(getDiscount);
  getDiscountByParams = this.withFetcher(getDiscountByParams);
  getDiscounts = this.withFetcher(getDiscounts);
  getPublicDiscounts = this.withFetcher(getPublicDiscounts);
  postDiscount = this.withFetcher(postDiscount);

  // Orders
  getOrder = this.withFetcher(getOrder);
  getOrders = this.withFetcher(getOrders);
}

export { ShopProvider };
