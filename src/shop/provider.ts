import { SherlClient } from '../common';
import { ErrorFactory } from '../common/errors';
import { AbstractProvider } from '../common/provider';
import {
  addDiscountCodeToBasket,
  addProductToBasket,
  addSponsorCodeToBasket,
  clearBasket,
  commentBasket,
  getCurrentBasket,
  removeItemToBasket,
  validateAndPayBasket,
  validatePaymentBasket,
} from './actions/basket';
import {
  getDiscount,
  getDiscountByParams,
  getDiscounts,
  getPublicDiscounts,
  postDiscount,
} from './actions/discount';
import { sendLinkToPaidOnline } from './actions/invoice';
import {
  getLoyaltiesCardToMe,
  getLoyaltiesCardToOrganization,
  updateLoyaltyCard,
} from './actions/loyalty';
import { getOrder, getOrders } from './actions/order';
import { generatePayout, submitPayout } from './actions/payout';
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

  // Basket
  getCurrentBasket = this.withFetcher(getCurrentBasket);
  addProductToBasket = this.withFetcher(addProductToBasket);
  removeItemToBasket = this.withFetcher(removeItemToBasket);
  clearBasket = this.withFetcher(clearBasket);
  addDiscountCodeToBasket = this.withFetcher(addDiscountCodeToBasket);
  addSponsorCodeToBasket = this.withFetcher(addSponsorCodeToBasket);
  commentBasket = this.withFetcher(commentBasket);
  validateAndPayBasket = this.withFetcher(validateAndPayBasket);
  validatePaymentBasket = this.withFetcher(validatePaymentBasket);

  // Payout
  submitPayout = this.withFetcher(submitPayout);
  generatePayout = this.withFetcher(generatePayout);

  // Loyalty
  getLoyaltiesCardToMe = this.withFetcher(getLoyaltiesCardToMe);
  updateLoyaltyCard = this.withFetcher(updateLoyaltyCard);
  getLoyaltiesCardToOrganization = this.withFetcher(
    getLoyaltiesCardToOrganization,
  );

  // Invoice
  sendLinkToPaidOnline = this.withFetcher(sendLinkToPaidOnline);
}

export { ShopProvider };
