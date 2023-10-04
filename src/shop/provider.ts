import { SherlClient } from '../common';
import { ErrorFactory } from '../common/errors';
import { AbstractProvider } from '../common/provider';
import {
  createAdvertisement,
  deleteAdvertisement,
  getAdvertisementById,
  getAdvertisements,
  getPublicAdvertisements,
  updateAdvertisement,
} from './actions/advertisement';
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
  createDiscount,
  updateDiscount,
  deleteDiscount,
  validateDiscountCode,
} from './actions/discount';
import { sendLinkToPaidOnline } from './actions/invoice';
import {
  getLoyaltiesCardToMe,
  getOrganizationLoyaltyCard,
  updateLoyaltyCard,
} from './actions/loyalty';
import {
  cancelOrder,
  getOrder,
  getOrders,
  getOrganizationOrders,
  updateOrderStatus,
} from './actions/order';
import {
  deleteCard,
  requestCredentialsToAddCard,
  saveCard,
  setDefaultCard,
  validateCard,
} from './actions/payment';
import { generatePayout, submitPayout } from './actions/payout';
import { addPictureToProduct, removePictureToProduct } from './actions/picture';
import {
  getCategoryById,
  getCategories,
  getProduct,
  getProducts,
  getPublicCategoryBySlug,
  getPublicCategoriesAndSub,
  getPublicCategories,
  getPublicProductBySlug,
  getPublicProduct,
  getPublicProducts,
  getProductViews,
  addProductViews,
  getProductLikes,
  addLikeToProduct,
  addOptionToProduit,
  removeProductOption,
  getProductComments,
  addCategoryToOrganization,
  addSubCategoryToCategory,
  getOrganizationCategories,
  deleteCategory,
  updateCategory,
  getUnrestrictedCategories,
  getPublicProductsWithFilters,
} from './actions/product';
import {
  cancelSubscription,
  getSubscriptionFindOneBy,
} from './actions/subscription';

const errorFactory = new ErrorFactory('Shop');

class ShopProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  // Products
  getCategoryById = this.withFetcher(getCategoryById);
  getCategories = this.withFetcher(getCategories);
  getProduct = this.withFetcher(getProduct);
  getProducts = this.withFetcher(getProducts);
  getPublicCategoryBySlug = this.withFetcher(getPublicCategoryBySlug);
  getPublicCategoriesAndSub = this.withFetcher(getPublicCategoriesAndSub);
  getPublicCategories = this.withFetcher(getPublicCategories);
  getPublicProductBySlug = this.withFetcher(getPublicProductBySlug);
  getPublicProduct = this.withFetcher(getPublicProduct);
  getPublicProducts = this.withFetcher(getPublicProducts);
  getProductViews = this.withFetcher(getProductViews);
  addProductViews = this.withFetcher(addProductViews);
  getProductLikes = this.withFetcher(getProductLikes);
  addLikeToProduct = this.withFetcher(addLikeToProduct);
  addOptionToProduct = this.withFetcher(addOptionToProduit);
  removeProductOption = this.withFetcher(removeProductOption);
  getProductComments = this.withFetcher(getProductComments);
  addCategoryToOrganization = this.withFetcher(addCategoryToOrganization);
  addSubCategoryToCategory = this.withFetcher(addSubCategoryToCategory);
  getOrganizationCategories = this.withFetcher(getOrganizationCategories);
  deleteCategory = this.withFetcher(deleteCategory);
  updateCategory = this.withFetcher(updateCategory);
  getUnrestrictedCategories = this.withFetcher(getUnrestrictedCategories);
  getPublicProductsWithFilters = this.withFetcher(getPublicProductsWithFilters);

  // Discounts
  getDiscount = this.withFetcher(getDiscount);
  getDiscountByParams = this.withFetcher(getDiscountByParams);
  getDiscounts = this.withFetcher(getDiscounts);
  getPublicDiscounts = this.withFetcher(getPublicDiscounts);
  createDiscount = this.withFetcher(createDiscount);
  updateDiscount = this.withFetcher(updateDiscount);
  deleteDiscount = this.withFetcher(deleteDiscount);
  validateDiscountCode = this.withFetcher(validateDiscountCode);

  // Orders
  getOrder = this.withFetcher(getOrder);
  getOrders = this.withFetcher(getOrders);
  cancelOrder = this.withFetcher(cancelOrder);
  updateOrderStatus = this.withFetcher(updateOrderStatus);
  getOrganizationOrders = this.withFetcher(getOrganizationOrders);

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
  getOrganizationLoyaltyCard = this.withFetcher(getOrganizationLoyaltyCard);

  // Invoice
  sendLinkToPaidOnline = this.withFetcher(sendLinkToPaidOnline);

  // Payment
  setDefaultCard = this.withFetcher(setDefaultCard);
  deleteCard = this.withFetcher(deleteCard);
  saveCard = this.withFetcher(saveCard);
  requestCredentialsToAddCard = this.withFetcher(requestCredentialsToAddCard);
  validateCard = this.withFetcher(validateCard);

  // Subscription
  getSubscriptionFindOneBy = this.withFetcher(getSubscriptionFindOneBy);
  cancelSubscription = this.withFetcher(cancelSubscription);

  // Advertisement
  updateAdvertisement = this.withFetcher(updateAdvertisement);
  createAdvertisement = this.withFetcher(createAdvertisement);
  deleteAdvertisement = this.withFetcher(deleteAdvertisement);
  getAdvertisements = this.withFetcher(getAdvertisements);
  getPublicAdvertisements = this.withFetcher(getPublicAdvertisements);
  getAdvertisementById = this.withFetcher(getAdvertisementById);

  // Picture
  removePictureToProduct = this.withFetcher(removePictureToProduct);
  addPictureToProduct = this.withFetcher(addPictureToProduct);
}

export { ShopProvider };
