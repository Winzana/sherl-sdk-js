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

  /**
   * Retrieves a specific discount by its unique ID.
   *
   * This function sends a GET request to fetch details of a discount using its unique identifier. The discount ID is
   * used to construct the endpoint for the GET request. If the discount is found successfully, it returns the discount's
   * information encapsulated in an IDiscount object. In case of any errors, such as a failure to find the discount or
   * connectivity issues, a specific error indicating the failure to find the discount is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} id - The unique identifier of the discount to be retrieved.
   * @returns {Promise<IDiscount>} A promise that resolves to the information of the specified discount.
   * @throws {DiscountErr.FETCH_FAILED} Throws an error if the discount is not found.
   */
  getDiscount = this.withFetcher(getDiscount);

  /**
   * Retrieves a paginated list of discounts based on provided filter parameters.
   *
   * This function sends a GET request to fetch discounts, allowing for filtering based on various criteria specified
   * in the IDiscountFilter object. It returns a paginated response containing a list of discounts, each encapsulated
   * in an IDiscount object. If the request fails, an error with a specific code indicating the failure in fetching the
   * discounts is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IDiscountFilter} params - The filter parameters used to query the discounts.
   * @returns {Promise<Pagination<IDiscount>>} A promise that resolves to a paginated response containing the list of discounts based on the provided filters.
   * @throws {DiscountErr.FETCH_FAILED} Throws an error if the fetching of discounts fails.
   */
  getDiscountByParams = this.withFetcher(getDiscountByParams);

  /**
   * Retrieves a paginated list of discounts based on provided filters.
   *
   * This function sends a GET request to fetch discounts, allowing for filtering based on various criteria specified
   * in the IDiscountFilter object. It returns a paginated response containing a list of discounts, each encapsulated
   * in an IDiscount object. If the request fails, an error with a specific code indicating the failure in fetching the
   * discounts is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IDiscountFilter} [filters] - Optional filters to apply when fetching discounts.
   * @returns {Promise<Pagination<IDiscount>>} A promise that resolves to a paginated response containing the list of discounts based on the provided filters.
   * @throws {DiscountErr.FETCH_FAILED} Throws an error if the fetching of discounts fails.
   */
  getDiscounts = this.withFetcher(getDiscounts);

  /**
   * Retrieves a paginated list of public discounts based on provided filters.
   *
   * This function sends a GET request to fetch public discounts, allowing for filtering based on various criteria
   * specified in the IDiscountPublicFilter object. It returns a paginated response containing a list of public discounts,
   * each encapsulated in an IDiscount object. If the request fails, an error with a specific code indicating the failure
   * in fetching the public discounts is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IDiscountPublicFilter} [filters] - Optional filters to apply when fetching public discounts.
   * @returns {Promise<Pagination<IDiscount>>} A promise that resolves to a paginated response containing the list of public discounts based on the provided filters.
   * @throws {DiscountErr.FETCH_FAILED} Throws an error if the fetching of public discounts fails.
   */
  getPublicDiscounts = this.withFetcher(getPublicDiscounts);

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
  createDiscount = this.withFetcher(createDiscount);

  /**
   * Updates an existing discount with the provided details.
   *
   * This function sends a PUT request to update a specific discount identified by its unique ID.
   * The updated discount details are provided in a Partial<IDiscountParameter> object. On successful update,
   * it returns the updated discount's information encapsulated in an IDiscount object. If the update process
   * encounters any errors, such as a failure to connect to the endpoint or other issues, a specific error indicating
   * the failure of the discount update is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} discountId - The unique identifier of the discount to be updated.
   * @param {Partial<IDiscountParameter>} updatedDiscount - The partial data of the discount to be updated.
   * @returns {Promise<IDiscount>} A promise that resolves to the information of the updated discount.
   * @throws {DiscountErr.UPDATE_FAILED} Throws an error if the discount update fails.
   */
  updateDiscount = this.withFetcher(updateDiscount);

  /**
   * Deletes a specific discount identified by its unique ID.
   *
   * This function sends a DELETE request to remove a discount. The discount's unique ID is used to construct
   * the endpoint for the request. On successful deletion, it returns the information of the deleted discount
   * encapsulated in an IDiscount object. If the deletion process encounters any errors, such as a failure to
   * connect to the endpoint or other issues, a specific error indicating the failure of the discount deletion is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} discountId - The unique identifier of the discount to be deleted.
   * @returns {Promise<IDiscount>} A promise that resolves to the information of the deleted discount.
   * @throws {DiscountErr.DELETE_FAILED} Throws an error if the deletion of the discount fails.
   */
  deleteDiscount = this.withFetcher(deleteDiscount);

  /**
   * Validates a discount code against a specific product.
   *
   * This function sends a POST request to validate a given discount code for applicability on a specified product.
   * The discount code and the product's URI are provided as parameters. On successful validation, it returns the
   * discount's information encapsulated in an IDiscount object. If the validation process encounters any errors,
   * such as a failure to connect to the endpoint or other issues, a specific error indicating the failure of the
   * discount code validation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} code - The discount code to be validated.
   * @param {string} productUri - The URI of the product against which the discount code is being validated.
   * @returns {Promise<IDiscount>} A promise that resolves to the information of the discount if the code is valid.
   * @throws {DiscountErr.VALIDATE_CODE_FAILED} Throws an error if the validation of the discount code fails.
   */
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

  /**
   * Retrieves loyalty cards associated with the current user based on provided filters.
   *
   * This function sends a GET request to fetch loyalty cards related to the current user, allowing for filtering based on
   * various criteria specified in the ILoyaltyCardFindByDto object. It returns a search result containing a list of loyalty
   * cards, each encapsulated in an ILoyaltyCard object. If the request fails, an error with a specific code indicating the
   * failure in fetching the loyalty cards is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {ILoyaltyCardFindByDto} [filters] - Optional filters to apply when fetching loyalty cards for the current user.
   * @returns {Promise<ISearchResult<ILoyaltyCard>>} A promise that resolves to a search result containing the list of loyalty cards associated with the current user.
   * @throws {LoyalityErr.FETCH_FAILED} Throws an error if the fetching of loyalty cards fails.
   */
  getLoyaltiesCardToMe = this.withFetcher(getLoyaltiesCardToMe);

  /**
   * Updates an existing loyalty card with provided details.
   *
   * This function sends a PUT request to update a specific loyalty card identified by its unique ID. The updated loyalty
   * card details are provided in the IShopLoyaltyCardUpdateInputDto object. On successful update, it returns the updated
   * loyalty card's information encapsulated in an ILoyaltyCard object. If the update process encounters any errors, such
   * as a failure to connect to the endpoint or other issues, a specific error indicating the failure of the loyalty card
   * update is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} cardId - The unique identifier of the loyalty card to be updated.
   * @param {IShopLoyaltyCardUpdateInputDto} updatedCard - The details of the loyalty card to be updated.
   * @returns {Promise<ILoyaltyCard>} A promise that resolves to the information of the updated loyalty card.
   * @throws {LoyalityErr.UPDATE_FAILED} Throws an error if the loyalty card update fails.
   */
  updateLoyaltyCard = this.withFetcher(updateLoyaltyCard);

  // NOT USED
  getOrganizationLoyaltyCard = this.withFetcher(getOrganizationLoyaltyCard);

  // Invoice

  /**
   * Sends a link for online payment of a specific invoice.
   *
   * This function sends a POST request to send a payment link for an invoice identified by its unique ID.
   * The invoice ID is used to construct the endpoint for the request. On successful operation, it returns the
   * order's information related to the invoice encapsulated in an IOrderResponse object. If the process of sending
   * the payment link encounters any errors, such as a failure to connect to the endpoint or other issues, a specific
   * error indicating the failure of the operation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} invoiceId - The unique identifier of the invoice for which the payment link is being sent.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the order related to the invoice.
   * @throws {InvoiceErr.SEND_FAILED} Throws an error if the operation to send the payment link fails.
   */
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
