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

  /**
   * Retrieves the current shopping basket for a specified customer.
   *
   * This function sends a GET request to fetch the current shopping basket associated with a given customer. The customer's
   * unique URI is provided to identify the specific basket to be retrieved. On successful retrieval, it returns the current
   * order's information encapsulated in an IOrderResponse object. If the process of fetching the basket encounters any errors,
   * such as a failure to connect to the endpoint or other issues, a specific error indicating the failure of fetching the basket
   * is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} customerUri - The unique URI of the customer whose basket is being retrieved.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the current order (basket) for the specified customer.
   * @throws {OrderErr.BASKET_FETCH_FAILED} Throws an error if the fetching of the basket fails.
   */
  getCurrentBasket = this.withFetcher(getCurrentBasket);

  /**
   * Adds a product to a shopping basket.
   *
   * This function sends a POST request to add a specified product to a shopping basket. The product details are
   * provided in the IShopBasketAddProductInputDto object. On successful addition, it returns the updated order's
   * information encapsulated in an IOrderResponse object. If the process of adding the product to the basket encounters
   * any errors, such as a failure to connect to the endpoint or other issues, a specific error indicating the failure
   * of the addition is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IShopBasketAddProductInputDto} product - The details of the product to be added to the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order.
   * @throws {OrderErr.BASKET_ADD_FAILED} Throws an error if the addition of the product to the basket fails.
   */
  addProductToBasket = this.withFetcher(addProductToBasket);

  /**
   * Removes an item from a shopping basket.
   *
   * This function sends a DELETE request to remove a specific item, identified by its unique ID, from a shopping basket.
   * The item's unique ID is used to construct the endpoint for the request. On successful removal, it returns the updated
   * order's information encapsulated in an IOrderResponse object. If the process of removing the item from the basket
   * encounters any errors, such as a failure to connect to the endpoint or other issues, a specific error indicating
   * the failure of the item removal is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} itemId - The unique identifier of the item to be removed from the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after the item removal.
   * @throws {OrderErr.BASKET_REMOVE_FAILED} Throws an error if the removal of the item from the basket fails.
   */
  removeItemToBasket = this.withFetcher(removeItemToBasket);

  /**
   * Clears the shopping basket for a specified customer.
   *
   * This function sends a POST request to clear the shopping basket of a customer. The customer's unique ID
   * is provided to identify the basket to be cleared. On successful clearance, it returns a boolean value
   * indicating the success of the operation. If the process of clearing the basket encounters any errors,
   * such as a failure to connect to the endpoint or other issues, a specific error indicating the failure
   * of the basket clearance is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} customerId - The unique identifier of the customer whose basket is being cleared.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating the success of the basket clearance.
   * @throws {OrderErr.BASKET_CLEAR_FAILED} Throws an error if the basket clearance fails.
   */
  clearBasket = this.withFetcher(clearBasket);

  /**
   * Applies a discount code to the current shopping basket.
   *
   * This function sends a POST request to apply a discount code to the current shopping basket. The discount code
   * is provided as a string. On successful application, it returns the updated order's information encapsulated
   * in an IOrderResponse object. If the process of applying the discount code to the basket encounters any errors,
   * such as a failure to connect to the endpoint or other issues, a specific error indicating the failure of the
   * discount code application is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} code - The discount code to be applied to the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after applying the discount code.
   * @throws {OrderErr.BASKET_DISCOUNT_CODE_FAILED} Throws an error if the application of the discount code to the basket fails.
   */
  addDiscountCodeToBasket = this.withFetcher(addDiscountCodeToBasket);

  /**
   * Applies a sponsor code to the current shopping basket.
   *
   * This function sends a POST request to apply a sponsor code to the current shopping basket. The sponsor code
   * is provided as a string. On successful application, it returns the updated order's information encapsulated
   * in an IOrderResponse object. If the process of applying the sponsor code to the basket encounters any errors,
   * such as a non-200 status response or other issues, a specific error indicating the failure of the sponsor code
   * application is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} code - The sponsor code to be applied to the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after applying the sponsor code.
   * @throws {OrderErr.BASKET_SPONSOR_CODE_FAILED} Throws an error if the application of the sponsor code to the basket fails.
   */
  addSponsorCodeToBasket = this.withFetcher(addSponsorCodeToBasket);

  /**
   * Adds a comment to a shopping basket.
   *
   * This function sends a POST request to add a comment to the current shopping basket. The comment is provided as a
   * string. On successful addition, it returns the updated order's information encapsulated in an IOrderResponse object.
   * If the process of adding the comment to the basket encounters any errors, such as a failure to connect to the endpoint
   * or other issues, a specific error indicating the failure of the comment addition is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} comment - The comment to be added to the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after adding the comment.
   * @throws {OrderErr.BASKET_COMMENT_FAILED} Throws an error if the addition of the comment to the basket fails.
   */
  commentBasket = this.withFetcher(commentBasket);

  /**
   * Validates and processes payment for the current shopping basket.
   *
   * This function sends a POST request to validate the shopping basket and process its payment. The validation
   * details, including payment information, are provided in the IShopBasketValidateAndPayDto object. On successful
   * validation and payment, it returns the updated order's information encapsulated in an IOrderResponse object. If the
   * validation or payment process encounters any errors, or if specific conditions are not met (like no default card
   * available, basket not validated, or basket already paid), corresponding specific errors are thrown.
   *
   * The function maps various error statuses to predefined error codes using the ERRORS_BY_CODE object.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IShopBasketValidateAndPayDto} validation - The validation and payment details for the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after validation and payment.
   * @throws {OrderErr} Throws specific OrderErr errors based on the encountered condition (e.g., NO_DEFAULT_CARD, BASKET_ORDER_NOT_VALIDATED, BASKET_ALREADY_PAYED).
   */
  validateAndPayBasket = this.withFetcher(validateAndPayBasket);

  /**
   * Validates payment for a shopping basket with pending status.
   *
   * This function sends a POST request to validate the payment for a shopping basket that is in a pending state.
   * The validation details are provided in the IShopBasketValidatePaymentInputDto object. On successful validation,
   * it returns the updated order's information encapsulated in an IOrderResponse object. If the process of validating
   * the pending payment encounters any errors, such as a failure to connect to the endpoint or other issues, a specific
   * error indicating the failure of the validation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IShopBasketValidatePaymentInputDto} validation - The validation details for the pending payment of the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after validating the pending payment.
   * @throws {OrderErr.BASKET_VALIDATE_PENDING_FAILED} Throws an error if the validation of the pending payment fails.
   */
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
