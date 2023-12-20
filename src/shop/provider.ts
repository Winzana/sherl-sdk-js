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
  addCommentOnProduct,
  getOrganizationSubCategories,
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

  /**
   * Retrieves a specific product category by its unique ID.
   *
   * @param {string} categoryId - The unique identifier of the category to be retrieved.
   * @returns {Promise<ICategoryResponse[]>} A promise that resolves to an array containing the response of the requested category.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-category#get-category-by-id Sherl SDK documentation} for further information on retrieving specific product categories.
   */
  getCategoryById = this.withFetcher(getCategoryById);

  /**
   * Retrieves a list of product categories, optionally filtered by specific criteria.
   *
   * @param {IShopProductCategoryFindByQuery} [filters] - Optional filters to apply when fetching categories.
   * @returns {Promise<ICategoryResponse[]>} A promise that resolves to an array of category responses, based on the provided filters.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-category#get-organization-categories Sherl SDK documentation} for further information on fetching product categories.
   */
  getCategories = this.withFetcher(getCategories);

  /**
   * Retrieves details of a specific product identified by its unique ID.
   *
   * @param {string} id - The unique identifier of the product to be retrieved.
   * @returns {Promise<IProductResponse>} A promise that resolves to the detailed information of the specified product.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#get-product-by-id Sherl SDK documentation} for further information on retrieving product details.
   */
  getProduct = this.withFetcher(getProduct);

  /**
   * Retrieves a list of products, optionally filtered by specific criteria.
   *
   * @param {IProductFindByDto} filters - The filter criteria used to query the products.
   * @returns {Promise<Pagination<IProductResponse>>} A promise that resolves to a paginated response containing the list of products based on the provided filters.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#get-products-list Sherl SDK documentation} for further information on fetching products with specific criteria.
   */
  getProducts = this.withFetcher(getProducts);

  /**
   * Retrieves a specific public product category identified by its slug.
   *
   * @param {string} slug - The slug identifier of the public category to be retrieved.
   * @returns {Promise<IPublicCategoryResponse>} A promise that resolves to the detailed information of the specified public category.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-category#get-public-category-by-slug Sherl SDK documentation} for further information on fetching public categories by slug.
   */
  getPublicCategoryBySlug = this.withFetcher(getPublicCategoryBySlug);

  /**
   * Retrieves a list of public categories and their subcategories, optionally filtered by specific criteria.
   *
   * @param {IPublicCategoryAndSubCategoryFindByDto} filters - Optional filters to apply when fetching public categories and subcategories.
   * @returns {Promise<IPublicCategoryResponse[]>} A promise that resolves to an array of public category responses, each including its subcategories, based on the provided filters.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-category#get-categories-and-subcategories Sherl SDK documentation} for further information on fetching public categories and subcategories.
   */
  getPublicCategoriesAndSub = this.withFetcher(getPublicCategoriesAndSub);

  /**
   * Retrieves a list of public product categories.
   *
   * @returns {Promise<IPublicCategoryResponse[]>} A promise that resolves to an array of public category responses.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-category#get-public-categories Sherl SDK documentation} for further information on fetching public product categories.
   */
  getPublicCategories = this.withFetcher(getPublicCategories);

  /**
   * Retrieves a specific public product identified by its slug.
   *
   * @param {string} slug - The slug identifier of the public product to be retrieved. Slugs are typically used in URLs to represent the product in a readable format.
   * @returns {Promise<IPublicProductResponse>} A promise that resolves to the detailed information of the specified public product.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#get-product-by-slug Sherl SDK documentation} for further information on fetching public products by slug.
   */
  getPublicProductBySlug = this.withFetcher(getPublicProductBySlug);

  /**
   * Retrieves a specific public product identified by its unique ID.
   *
   * @param {string} id - The unique identifier of the public product to be retrieved.
   * @returns {Promise<IPublicProductResponse>} A promise that resolves to the detailed information of the specified public product.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#get-product-by-id Sherl SDK documentation} for further information on fetching public products by ID.
   */
  getPublicProduct = this.withFetcher(getPublicProduct);

  /**
   * Retrieves a list of public products, filtered by specific criteria.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IProductFindByDto} filters - The filter criteria used to query the public products. These can include various criteria such as category, price range, etc.
   * @returns {Promise<Pagination<IProductResponse>>} A promise that resolves to a paginated response containing the list of public products based on the provided filters.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#get-products-list Sherl SDK documentation} for further information on fetching public products with specific criteria.
   */
  getPublicProducts = this.withFetcher(getPublicProducts);

  /**
   * Retrieves the total number of views for a specific product identified by its unique ID.
   *
   * @param {string} productId - The unique identifier of the product whose views count is being retrieved.
   * @returns {Promise<number>} A promise that resolves to the number representing the total views of the product.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#get-product-views Sherl SDK documentation} for further information on analytics related to product views.
   */
  getProductViews = this.withFetcher(getProductViews);

  /**
   * Increments the view count for a specific product identified by its unique ID.
   *
   * @param {string} productId - The unique identifier of the product whose view count is being incremented.
   * @returns {Promise<number>} A promise that resolves to the updated view count of the product.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#add-view-to-product Sherl SDK documentation} for further information on tracking product views in the analytics domain.
   */
  addProductViews = this.withFetcher(addProductViews);

  /**
   * Retrieves the total number of 'likes' for a specific product identified by its unique ID.
   *
   * @param {string} productId - The unique identifier of the product whose 'likes' count is being retrieved.
   * @returns {Promise<number>} A promise that resolves to the number representing the total 'likes' for the product.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#get-product-likes Sherl SDK documentation} for further information on analytics related to product interactions.
   */
  getProductLikes = this.withFetcher(getProductLikes);

  /**
   * Adds a 'like' to a specific product identified by its unique ID.
   *
   * @param {string} productId - The unique identifier of the product to receive the 'like'.
   * @returns {Promise<number>} A promise that resolves to the updated count of 'likes' for the product.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#add-like-to-product Sherl SDK documentation} for further information on product interaction analytics.
   */
  addLikeToProduct = this.withFetcher(addLikeToProduct);

  /**
   * Adds an option to a specific product.
   *
   * @param {string} productId - The unique identifier of the product to which the option is being added.
   * @param {any} option - The details of the option to be added to the product. The specific type should ideally be defined.
   * @returns {Promise<IProductResponse>} A promise that resolves to the product's information, including the newly added option.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#add-option-to-product Sherl SDK documentation} for further information on managing product options.
   */
  addOptionToProduct = this.withFetcher(addOptionToProduit);

  /**
   * Removes a specific option from a product.
   *
   * @param {string} productId - The unique identifier of the product from which the option is being removed.
   * @param {string} optionId - The unique identifier of the option to be removed from the product.
   * @returns {Promise<IProductResponse>} A promise that resolves to the product's information after the option has been removed.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#remove-a-product-option Sherl SDK documentation} for further information on managing product options.
   */
  removeProductOption = this.withFetcher(removeProductOption);

  /**
   * Retrieves comments for a specific product, optionally filtered by specific criteria.
   *
   * @param {string} productId - The unique identifier of the product for which comments are being retrieved.
   * @param {IFindProductCommentsInputDto} [filters] - Optional filters to apply when fetching product comments.
   * @returns {Promise<ISearchResult<IComment>>} A promise that resolves to a search result containing the list of comments for the specified product.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#get-all-product-comments Sherl SDK documentation} for further information on fetching comments for products.
   */
  getProductComments = this.withFetcher(getProductComments);

  /**
   * Adds a comment on a specific product.
   *
   * @param {IAddCommentOnProductDto} productComment - The details of the comment to be added to the product.
   * @returns {Promise<IComment>} A promise that resolves to the information of the newly added comment.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#add-comment-on-product Sherl SDK documentation} for further information on commenting on products.
   */
  addCommentOnProduct = this.withFetcher(addCommentOnProduct);

  /**
   * Adds a new product category to an organization.
   *
   * @param {IShopProductCategoryCreateInputDto} category - The details of the category to be added to the organization.
   * @returns {Promise<ICategoryResponse>} A promise that resolves to the information of the newly added category.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-category#add-category-to-organization Sherl SDK documentation} for further information on managing product categories in organizations.
   */
  addCategoryToOrganization = this.withFetcher(addCategoryToOrganization);

  /**
   * Adds a subcategory to a specific product category.
   *
   * @param {string} categoryId - The unique identifier of the category to which the subcategory is being added.
   * @param {IShopProductSubCategoryCreateInputDto} subCategory - The details of the subcategory to be added.
   * @returns {Promise<ICategoryResponse>} A promise that resolves to the updated category information including the newly added subcategory.
   * @see {@link winzana.github.io/sherl-sdk-js/docs/shop/product-category#add-subcategory-to-category Sherl SDK documentation} for further information on managing product categories and subcategories.
   */
  addSubCategoryToCategory = this.withFetcher(addSubCategoryToCategory);

  /**
   * Retrieves all product categories associated with a specific organization.
   *
   * @param {string} organizationId - The unique identifier of the organization whose product categories are being retrieved.
   * @returns {Promise<ICategoryResponse[]>} A promise that resolves to an array of category responses specific to the given organization.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-category#get-organization-categories-1 Sherl SDK documentation} for further information on fetching organization-specific product categories.
   */
  getOrganizationCategories = this.withFetcher(getOrganizationCategories);

  /**
   * Retrieves subcategories for a specific product category within an organization.
   *
   * @param {string} categoryId - The unique identifier of the main category whose subcategories are being retrieved.
   * @returns {Promise<ICategoryResponse[]>} A promise that resolves to an array of category responses, representing the subcategories of the specified main category.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-category#get-organization-subcategories Sherl SDK documentation} for further information on retrieving subcategories for organization-specific categories.
   */
  getOrganizationSubCategories = this.withFetcher(getOrganizationSubCategories);

  /**
   * Deletes a product category identified by its unique ID.
   *
   * @param {string} categoryId - The unique identifier of the category to be deleted.
   * @returns {Promise<ICategoryResponse>} A promise that resolves to the updated category information post-deletion.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-category#delete-category Sherl SDK documentation} for further information on category management.
   */
  deleteCategory = this.withFetcher(deleteCategory);

  /**
   * Updates a specific product category with new information.
   *
   * @param {string} categoryId - The unique identifier of the category to be updated.
   * @param {Partial<IShopProductCategoryCreateInputDto>} updatedCategory - The new details to update the category with. This is a partial type, allowing for partial updates to the category's properties.
   * @returns {Promise<ICategoryResponse>} A promise that resolves to the category's updated information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-category#update-category Sherl SDK documentation} for further information on updating product categories.
   */
  updateCategory = this.withFetcher(updateCategory);

  /**
   * Retrieves a list of categories that are not restricted by any specific criteria.
   *
   * @returns {Promise<ICategoryResponse[]>} A promise that resolves to an array of category responses, representing the unrestricted categories.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-category#get-unrestricted-products Sherl SDK documentation} for further information on fetching unrestricted categories.
   */
  getUnrestrictedCategories = this.withFetcher(getUnrestrictedCategories);

  /**
   * Retrieves a list of public products, optionally filtered by specific criteria.
   *
   * @param {IProductFindByDto} [filters] - Optional filters to apply when fetching public products. These can include various criteria such as category, price range, etc.
   * @returns {Promise<Pagination<IProductResponse>>} A promise that resolves to a paginated response containing the list of public products based on the provided filters.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product#get-public-products-with-filters Sherl SDK documentation} for further information on fetching public products with filters.
   */
  getPublicProductsWithFilters = this.withFetcher(getPublicProductsWithFilters);

  // Discounts

  /**
   * Retrieves a specific discount by its unique ID.
   *
   * @param {string} id - The unique identifier of the discount to be retrieved.
   * @returns {Promise<IDiscount>} A promise that resolves to the information of the specified discount.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/discount#get-discount-by-id Sherl SDK documentation} for further information
   */
  getDiscount = this.withFetcher(getDiscount);

  /**
   * Retrieves a paginated list of discounts based on provided filter parameters.
   *
   * @param {IDiscountFilter} params - The filter parameters used to query the discounts.
   * @returns {Promise<Pagination<IDiscount>>} A promise that resolves to a paginated response containing the list of discounts based on the provided filters.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/discount#get-discount-by-params Sherl SDK documentation} for further information
   */
  getDiscountByParams = this.withFetcher(getDiscountByParams);

  /**
   * Retrieves a paginated list of discounts based on provided filters.
   *
   * @param {IDiscountFilter} [filters] - Optional filters to apply when fetching discounts.
   * @returns {Promise<Pagination<IDiscount>>} A promise that resolves to a paginated response containing the list of discounts based on the provided filters.
   * TODO: fix link
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/discount#get-discounts-list Sherl SDK documentation} for further information
   */
  getDiscounts = this.withFetcher(getDiscounts);

  /**
   * Retrieves a paginated list of public discounts based on provided filters.
   *
   * @param {IDiscountPublicFilter} [filters] - Optional filters to apply when fetching public discounts.
   * @returns {Promise<Pagination<IDiscount>>} A promise that resolves to a paginated response containing the list of public discounts based on the provided filters.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/discount#get-discounts-list Sherl SDK documentation} for further information
   */
  getPublicDiscounts = this.withFetcher(getPublicDiscounts);

  /**
   * Validates payment for a shopping basket with pending status.
   *
   * @param {IShopBasketValidatePaymentInputDto} validation - The validation details for the pending payment of the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after validating the pending payment.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/discount#create-a-discount Sherl SDK documentation} for further information
   */
  createDiscount = this.withFetcher(createDiscount);

  /**
   * Updates an existing discount with the provided details.
   *
   * @param {string} discountId - The unique identifier of the discount to be updated.
   * @param {Partial<IDiscountParameter>} updatedDiscount - The partial data of the discount to be updated.
   * @returns {Promise<IDiscount>} A promise that resolves to the information of the updated discount.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/discount#update-discount Sherl SDK documentation} for further information
   */
  updateDiscount = this.withFetcher(updateDiscount);

  /**
   * Deletes a specific discount identified by its unique ID.
   *
   * @param {string} discountId - The unique identifier of the discount to be deleted.
   * @returns {Promise<IDiscount>} A promise that resolves to the information of the deleted discount.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/discount#delete-discount Sherl SDK documentation} for further information
   */
  deleteDiscount = this.withFetcher(deleteDiscount);

  /**
   * Validates a discount code against a specific product.
   *
   * @param {string} code - The discount code to be validated.
   * @param {string} productUri - The URI of the product against which the discount code is being validated.
   * @returns {Promise<IDiscount>} A promise that resolves to the information of the discount if the code is valid.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/discount#validate-discount-code Sherl SDK documentation} for further information
   */
  validateDiscountCode = this.withFetcher(validateDiscountCode);

  // Orders

  /**
   * Retrieves a specific order by its unique ID.
   *
   * @param {string} id - The unique identifier of the order to be retrieved.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the specified order.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/order#get-order-by-id Sherl SDK documentation} for further information
   */
  getOrder = this.withFetcher(getOrder);

  /**
   * Retrieves a paginated list of orders based on provided filter criteria.
   *
   * @param {IOrderFindByDto} filters - The filter criteria used to query the orders.
   * @returns {Promise<Pagination<IOrderResponse>>} A promise that resolves to a paginated response containing the list of orders based on the provided filters.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/order#get-orders-list Sherl SDK documentation} for further information
   */
  getOrders = this.withFetcher(getOrders);

  /**
   * Cancels an order with specified cancellation details.
   *
   * @param {string} id - The unique identifier of the order to be cancelled.
   * @param {ICancelOrderInputDto} cancelOrderDates - The details of the cancellation request for the order.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after cancellation.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/order#cancel-order Sherl SDK documentation} for further information
   */
  cancelOrder = this.withFetcher(cancelOrder);

  /**
   * Updates the status of a specific order.
   *
   * @param {string} id - The unique identifier of the order whose status is being updated.
   * @param {OrderStatusEnum} status - The new status to be set for the order.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/order#update-order Sherl SDK documentation} for further information
   */
  updateOrderStatus = this.withFetcher(updateOrderStatus);

  /**
   * Retrieves a paginated list of orders associated with a specific organization, based on provided filter criteria.
   *
   * @param {string} organizationId - The unique identifier of the organization whose orders are being retrieved.
   * @param {IOrderFindByDto} [filters] - Optional filters to apply when fetching orders for the organization.
   * @returns {Promise<Pagination<IOrderResponse>>} A promise that resolves to a paginated response containing the list of orders for the specified organization.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/order#get-organization-orders Sherl SDK documentation} for further information
   */
  getOrganizationOrders = this.withFetcher(getOrganizationOrders);

  // Basket

  /**
   * Retrieves the current shopping basket for a specified customer.
   *
   * @param {string} customerUri - The unique URI of the customer whose basket is being retrieved.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the current order (basket) for the specified customer.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/basket#get-current-basket Sherl SDK documentation} for further information
   */
  getCurrentBasket = this.withFetcher(getCurrentBasket);

  /**
   * Adds a product to a shopping basket.
   *
   * @param {IShopBasketAddProductInputDto} product - The details of the product to be added to the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/basket#add-product-to-basket Sherl SDK documentation} for further information
   */
  addProductToBasket = this.withFetcher(addProductToBasket);

  /**
   * Removes an item from a shopping basket.
   *
   * @param {string} itemId - The unique identifier of the item to be removed from the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after the item removal.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/basket#remove-product-to-basket Sherl SDK documentation} for further information
   */
  removeItemToBasket = this.withFetcher(removeItemToBasket);

  /**
   * Clears the shopping basket for a specified customer.
   *
   * @param {string} customerId - The unique identifier of the customer whose basket is being cleared.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating the success of the basket clearance.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/basket#clear-basket Sherl SDK documentation} for further information
   */
  clearBasket = this.withFetcher(clearBasket);

  /**
   * Applies a discount code to the current shopping basket.
   *
   * @param {string} code - The discount code to be applied to the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after applying the discount code.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/basket#add-discount-code-to-basket Sherl SDK documentation} for further information
   */
  addDiscountCodeToBasket = this.withFetcher(addDiscountCodeToBasket);

  /**
   * Applies a sponsor code to the current shopping basket.
   *
   * @param {string} code - The sponsor code to be applied to the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after applying the sponsor code.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/basket#add-sponsor-code-to-basket Sherl SDK documentation} for further information
   */
  addSponsorCodeToBasket = this.withFetcher(addSponsorCodeToBasket);

  /**
   * Adds a comment to a shopping basket.
   *
   * @param {string} comment - The comment to be added to the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after adding the comment.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/basket/#add-comment-to-basket Sherl SDK documentation} for further information
   */
  commentBasket = this.withFetcher(commentBasket);

  /**
   * Validates and processes payment for the current shopping basket.
   *
   * @param {IShopBasketValidateAndPayDto} validation - The validation and payment details for the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after validation and payment.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/basket/#validate-and-pay-current-basket Sherl SDK documentation} for further information
   */
  validateAndPayBasket = this.withFetcher(validateAndPayBasket);

  /**
   * Validates payment for a shopping basket with pending status.
   *
   * @param {IShopBasketValidatePaymentInputDto} validation - The validation details for the pending payment of the basket.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after validating the pending payment.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/basket/#validate-pending-payment-to-basket Sherl SDK documentation} for further information
   */
  validatePaymentBasket = this.withFetcher(validatePaymentBasket);

  // Payout

  /**
   * Submits a request for a payout.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @returns {Promise<IPayout>} A promise that resolves to the details of the submitted payout.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/payout#submit-payout Sherl SDK documentation} for further information on payouts.
   */
  submitPayout = this.withFetcher(submitPayout);

  /**
   * Generates a new payout.
   *
   * @returns {Promise<IPayout[]>} A promise that resolves to an array of payout details.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/payout#generate-payout Sherl SDK documentation} for further information on generating payouts.
   */
  generatePayout = this.withFetcher(generatePayout);

  // Loyalty

  /**
   * Retrieves loyalty cards associated with the current user based on provided filters.
   *
   * @param {ILoyaltyCardFindByDto} [filters] - Optional filters to apply when fetching loyalty cards for the current user.
   * @returns {Promise<ISearchResult<ILoyaltyCard>>} A promise that resolves to a search result containing the list of loyalty cards associated with the current user.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/loyalty#get-loyalty-cards-current-user-connected Sherl SDK documentation} for further information
   */
  getLoyaltiesCardToMe = this.withFetcher(getLoyaltiesCardToMe);

  /**
   * Updates an existing loyalty card with provided details.
   *
   * @param {string} cardId - The unique identifier of the loyalty card to be updated.
   * @param {IShopLoyaltyCardUpdateInputDto} updatedCard - The details of the loyalty card to be updated.
   * @returns {Promise<ILoyaltyCard>} A promise that resolves to the information of the updated loyalty card.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/loyalty#update-loyalty-card Sherl SDK documentation} for further information
   */
  updateLoyaltyCard = this.withFetcher(updateLoyaltyCard);

  /**
   * Retrieves the loyalty card associated with a specific organization.
   *
   * @param {string} organizationId - The unique identifier of the organization whose loyalty card is being retrieved.
   * @returns {Promise<ILoyaltyCard>} A promise that resolves to the information of the loyalty card for the specified organization.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/loyalty#get-organization-loyalty-card Sherl SDK documentation} for further information
   */
  getOrganizationLoyaltyCard = this.withFetcher(getOrganizationLoyaltyCard);

  // Invoice

  /**
   * Sends a link for online payment of a specific invoice.
   *
   * @param {string} invoiceId - The unique identifier of the invoice for which the payment link is being sent.
   * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the order related to the invoice.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/invoice#send-link-to-paid-online Sherl SDK documentation} for further information
   */
  sendLinkToPaidOnline = this.withFetcher(sendLinkToPaidOnline);

  // Payment

  /**
   * Sets a specific payment card as the default card for a person.
   *
   * @param {string} cardId - The unique identifier of the card to be set as default.
   * @returns {Promise<IPerson>} A promise that resolves to the person's information, reflecting the change in the default card.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/payment#set-default-card Sherl SDK documentation} for further information on managing default payment cards.
   */
  setDefaultCard = this.withFetcher(setDefaultCard);

  /**
   * Deletes a payment card associated with a person, identified by the card's unique ID.
   *
   * @param {string} cardId - The unique identifier of the card to be deleted.
   * @returns {Promise<IPerson>} A promise that resolves to the person's information, reflecting the updated card details.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/payment#delete-card Sherl SDK documentation} for further information on card management.
   */
  deleteCard = this.withFetcher(deleteCard);

  /**
   * Saves a payment card for a person, identified by the card's ID and a provided token.
   *
   * @param {string} cardId - The unique identifier of the card to be saved.
   * @param {string} token - The token associated with the card, used for validation and saving the card.
   * @returns {Promise<IPerson>} A promise that resolves to the person's information, reflecting the updated card details.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/payment#save-card Sherl SDK documentation} for further information on card management.
   */
  saveCard = this.withFetcher(saveCard);

  /**
   * Requests the necessary credentials to add a new credit card.
   *
   * @returns {Promise<ICreditCard>} A promise that resolves to the credit card credentials required for adding a new card.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/payment#request-credentials-to-add-card Sherl SDK documentation} for further information on adding credit cards.
   */
  requestCredentialsToAddCard = this.withFetcher(requestCredentialsToAddCard);

  /**
   * Validates a payment card based on its unique identifier.
   *
   * @param {string} cardId - The unique identifier of the card to be validated.
   * @returns {Promise<ICreditCard>} A promise that resolves to the credit card information post-validation.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/payment#validate-card Sherl SDK documentation} for further information on credit card validation.
   */
  validateCard = this.withFetcher(validateCard);

  // Subscription

  /**
   * Retrieves a specific subscription based on provided filter criteria.
   *
   * @param {ISubscriptionFindOnByDto} [filters] - Optional filters to apply when searching for a subscription.
   * @returns {Promise<ISubscription>} A promise that resolves to the subscription's information matching the filter criteria.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/subscription#find-one-subscription Sherl SDK documentation} for further information on finding subscriptions.
   */
  getSubscriptionFindOneBy = this.withFetcher(getSubscriptionFindOneBy);

  /**
   * Cancels a specific subscription identified by its unique ID.
   *
   * @param {string} subscriptionId - The unique identifier of the subscription to be canceled.
   * @returns {Promise<ISubscription>} A promise that resolves to the subscription's information after cancellation.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/subscription#cancel-subscription Sherl SDK documentation} for further information on subscription management.
   */
  cancelSubscription = this.withFetcher(cancelSubscription);

  // Advertisement

  /**
   * Updates an existing advertisement with the provided details.
   *
   * @param {string} advertisementId - The unique identifier of the advertisement to be updated.
   * @param {Partial<ICreateAdvertisementInputDto>} updatedAdvertisement - The partial data of the advertisement to be updated.
   * @returns {Promise<IAvertisement>} A promise that resolves to the information of the updated advertisement.
   * @throws {AdvertisementErr.UPDATE_FAILED} Throws an error if the advertisement update fails.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/advertisement#update-advertisement Sherl SDK documentation} for further information
   */
  updateAdvertisement = this.withFetcher(updateAdvertisement);

  /**
   * Creates a new advertisement with the provided details.
   *
   * @param {ICreateAdvertisementInputDto} advertisement - The details of the advertisement to be created.
   * @returns {Promise<IAvertisement>} A promise that resolves to the information of the newly created advertisement.
   * @throws {AdvertisementErr.CREATION_FAILED} Throws an error if the advertisement creation fails.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/advertisement#create-advertisement Sherl SDK documentation} for further information
   */
  createAdvertisement = this.withFetcher(createAdvertisement);

  /**
   * Deletes a specific advertisement identified by its unique ID.
   *
   * @param {string} advertisementId - The unique identifier of the advertisement to be deleted.
   * @returns {Promise<IAvertisement>} A promise that resolves to the information of the deleted advertisement.
   * @throws {AdvertisementErr.DELETE_FAILED} Throws an error if the advertisement deletion fails.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/advertisement#delete-advertisement Sherl SDK documentation} for further information
   */
  deleteAdvertisement = this.withFetcher(deleteAdvertisement);

  /**
   * Retrieves a paginated list of advertisements based on provided filters.
   *
   * @param {IFindAdvertisementInputDto} [filters] - Optional filters to apply when fetching advertisements.
   * @returns {Promise<Pagination<IAvertisement>>} A promise that resolves to a paginated response containing the list of advertisements.
   * @throws {AdvertisementErr.FETCH_FAILED} Throws an error if the fetching of advertisements fails.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/advertisement#get-advertisements-public-or-not Sherl SDK documentation} for further information
   */
  getAdvertisements = this.withFetcher(getAdvertisements);

  /**
   * Retrieves a paginated list of public advertisements based on provided filters.
   *
   * @param {IFindAdvertisementInputDto} [filters] - Optional filters to apply when fetching public advertisements.
   * @returns {Promise<Pagination<IAvertisement>>} A promise that resolves to a paginated response containing the list of public advertisements.
   * @throws {AdvertisementErr.FETCH_FAILED} Throws an error if the fetching of public advertisements fails.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/advertisement#get-advertisements-public-or-not Sherl SDK documentation} for further information
   */
  getPublicAdvertisements = this.withFetcher(getPublicAdvertisements);

  /**
   * Retrieves a specific advertisement by its unique ID.
   *
   * @param {string} advertisementId - The unique identifier of the advertisement to be retrieved.
   * @returns {Promise<IAvertisement>} A promise that resolves to the information of the specified advertisement.
   * @throws {AdvertisementErr.NOT_FOUND} Throws an error if the advertisement is not found.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/advertisement#get-advertisement-by-id Sherl SDK documentation} for further information
   */
  getAdvertisementById = this.withFetcher(getAdvertisementById);

  // Picture

  /**
   * Removes a picture from a specific product using its media ID.
   *
   * @param {string} productId - The unique identifier of the product from which the picture is being removed.
   * @param {string} mediaId - The unique identifier of the media (picture) to be removed from the product.
   * @returns {Promise<IProductResponse>} A promise that resolves to the product's information after the picture has been removed.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-picture#remove-picture-on-product Sherl SDK documentation} for further information on managing product pictures.
   */
  removePictureToProduct = this.withFetcher(removePictureToProduct);

  /**
   * Adds a picture to a specific product using its media ID.
   *
   * @param {string} productId - The unique identifier of the product to which the picture is being added.
   * @param {string} mediaId - The unique identifier of the media (picture) to be added to the product.
   * @returns {Promise<IProductResponse>} A promise that resolves to the product's updated information, including the newly added picture.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/shop/product-picture#add-picture-on-product Sherl SDK documentation} for further information on managing product pictures.
   */
  addPictureToProduct = this.withFetcher(addPictureToProduct);
}

export { ShopProvider };
