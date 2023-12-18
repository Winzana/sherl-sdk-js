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

  /**
   * Updates an existing advertisement with the provided details.
   *
   * This function sends a PATCH request to update a specific advertisement identified by its unique ID.
   * The updated advertisement details are provided in a Partial<ICreateAdvertisementInputDto> object. On successful update,
   * it returns the updated advertisement's information encapsulated in an IAvertisement object. If the update process
   * encounters any errors, such as a failure to connect to the endpoint or other issues, a specific error indicating
   * the failure of the advertisement update is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} advertisementId - The unique identifier of the advertisement to be updated.
   * @param {Partial<ICreateAdvertisementInputDto>} updatedAdvertisement - The partial data of the advertisement to be updated.
   * @returns {Promise<IAvertisement>} A promise that resolves to the information of the updated advertisement.
   * @throws {AdvertisementErr.UPDATE_FAILED} Throws an error if the advertisement update fails.
   */
  updateAdvertisement = this.withFetcher(updateAdvertisement);

  /**
   * Creates a new advertisement with the provided details.
   *
   * This function sends a POST request to create a new advertisement. The advertisement details are provided in the
   * ICreateAdvertisementInputDto object. On successful creation, it returns the newly created advertisement's
   * information encapsulated in an IAvertisement object. If the advertisement creation process encounters any errors,
   * a specific error indicating the failure of the advertisement creation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {ICreateAdvertisementInputDto} advertisement - The details of the advertisement to be created.
   * @returns {Promise<IAvertisement>} A promise that resolves to the information of the newly created advertisement.
   * @throws {AdvertisementErr.CREATION_FAILED} Throws an error if the advertisement creation fails.
   */
  createAdvertisement = this.withFetcher(createAdvertisement);

  /**
   * Deletes a specific advertisement identified by its unique ID.
   *
   * This function sends a DELETE request to remove an advertisement. It uses the advertisement's unique ID
   * to construct the endpoint for the request. On successful deletion, it returns the information of the deleted
   * advertisement encapsulated in an IAvertisement object. If the deletion process encounters any errors, such as
   * a failure to connect to the endpoint or other issues, a specific error indicating the failure of the advertisement
   * deletion is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} advertisementId - The unique identifier of the advertisement to be deleted.
   * @returns {Promise<IAvertisement>} A promise that resolves to the information of the deleted advertisement.
   * @throws {AdvertisementErr.DELETE_FAILED} Throws an error if the advertisement deletion fails.
   */
  deleteAdvertisement = this.withFetcher(deleteAdvertisement);

  /**
   * Retrieves a paginated list of advertisements based on provided filters.
   *
   * This function sends a GET request to fetch a list of advertisements, allowing for filtering based on various criteria.
   * The filters are specified through the IFindAdvertisementInputDto object. It returns a paginated response containing
   * a list of advertisements, each encapsulated in an IAvertisement object. If the request fails, it throws an error
   * with a specific code indicating the failure in fetching the advertisements.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IFindAdvertisementInputDto} [filters] - Optional filters to apply when fetching advertisements.
   * @returns {Promise<Pagination<IAvertisement>>} A promise that resolves to a paginated response containing the list of advertisements.
   * @throws {AdvertisementErr.FETCH_FAILED} Throws an error if the fetching of advertisements fails.
   */
  getAdvertisements = this.withFetcher(getAdvertisements);

  /**
   * Retrieves a paginated list of public advertisements based on provided filters.
   *
   * This function sends a GET request to fetch a list of public-facing advertisements, allowing for filtering based on various criteria.
   * The filters are specified through the IFindAdvertisementInputDto object. It returns a paginated response containing
   * a list of public advertisements, each encapsulated in an IAvertisement object. If the request fails, it throws an error
   * with a specific code indicating the failure in fetching the public advertisements.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IFindAdvertisementInputDto} [filters] - Optional filters to apply when fetching public advertisements.
   * @returns {Promise<Pagination<IAvertisement>>} A promise that resolves to a paginated response containing the list of public advertisements.
   * @throws {AdvertisementErr.FETCH_FAILED} Throws an error if the fetching of public advertisements fails.
   */
  getPublicAdvertisements = this.withFetcher(getPublicAdvertisements);

  /**
   * Retrieves a specific advertisement by its unique ID.
   *
   * This function sends a GET request to fetch details of an advertisement using its unique identifier.
   * The advertisement ID is used to construct the endpoint for the GET request. If the advertisement is
   * found successfully, it returns the advertisement's information encapsulated in an IAvertisement object.
   * In case of any errors, such as a failure to find the advertisement or connectivity issues, a specific error
   * indicating the failure to find the advertisement is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} advertisementId - The unique identifier of the advertisement to be retrieved.
   * @returns {Promise<IAvertisement>} A promise that resolves to the information of the specified advertisement.
   * @throws {AdvertisementErr.NOT_FOUND} Throws an error if the advertisement is not found.
   */
  getAdvertisementById = this.withFetcher(getAdvertisementById);

  // Picture
  removePictureToProduct = this.withFetcher(removePictureToProduct);
  addPictureToProduct = this.withFetcher(addPictureToProduct);
}

export { ShopProvider };
