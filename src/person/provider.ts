import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  getConfigs,
  getCurrentAddress,
  getMe,
  getPersonById,
  getPersons,
  updatePersonById,
  createPerson,
  registerWithEmailAndPassword,
  createAddress,
  updateAddress,
  deleteAddress,
  addPersonPicture,
} from './actions';
import { errorFactory } from './errors';

class PersonProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Retrieves a list of configuration settings from the API.
   *
   * This function sends a GET request to fetch configuration settings. It aims to retrieve an array
   * of configuration objects. In case the request is successful, it returns the array of configurations.
   * If the request fails due to connectivity issues or other errors, it throws a generic error indicating
   * the inability to reach the API. Additionally, if the response is empty, it throws an error indicating
   * an empty response from the API.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @returns {Promise<IConfig[]>} A promise that resolves to an array of configuration objects.
   * @throws {Error} Throws an error if the API is unreachable or if the response is empty.
   */
  public getConfigs = this.withFetcher(getConfigs);

  /**
   * Retrieves the information of the currently authenticated user.
   *
   * This function sends a GET request to an endpoint designed to fetch the details of the current user.
   * It aims to retrieve a single IPerson object representing the user. If the request is successful,
   * it returns the user's data. In case of any connectivity or other errors, it throws a generic error
   * indicating the inability to reach the API. Additionally, if the response is empty, it throws an error
   * indicating an empty response from the API.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @returns {Promise<IPerson>} A promise that resolves to the authenticated user's information.
   * @throws {Error} Throws an error if the API is unreachable or if the response is empty.
   */
  public getMe = this.withFetcher(getMe);

  /**
   * Retrieves the information of a person by its unique identifier.
   *
   * This function sends a GET request to fetch the details of a person based on a specified ID.
   * It constructs the endpoint using the ID and then sends the request. If successful,
   * it returns the person's data encapsulated in an IPerson object. In case of connectivity issues
   * or other errors, it throws an error indicating the inability to reach the API.
   * Additionally, if the response from the API is empty, it throws an error indicating this condition.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} id - The unique identifier of the person to retrieve.
   * @returns {Promise<IPerson>} A promise that resolves to the information of the person identified by the ID.
   * @throws {Error} Throws an error if the API is unreachable or if the response is empty.
   */
  public getPersonById = this.withFetcher(getPersonById);

  /**
   * Retrieves a paginated list of persons based on provided filters.
   *
   * This function sends a GET request to fetch a list of persons, allowing pagination and filtering.
   * The page number and items per page can be specified, along with any additional filters encapsulated
   * in the IPersonFilters object. It returns a paginated response containing a list of persons.
   * If the request fails, it throws an error with the status code of the failed request.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {number} [page=1] - The page number of the results to be fetched (defaults to 1).
   * @param {number} [itemsPerPage=10] - The number of items per page (defaults to 10).
   * @param {IPersonFilters} filters - The filtering criteria to apply to the person list.
   * @returns {Promise<Pagination<IPerson>>} A promise that resolves to a paginated response containing the list of persons.
   * @throws {Error} Throws an error if the API request fails, including the status code of the failure.
   */
  public getPersons = this.withFetcher(getPersons);

  /**
   * Retrieves the current address based on a given position.
   *
   * This function sends a GET request with the provided position details to fetch the current address.
   * The position is specified using the IPositionInputDto object. The function returns a paginated response
   * containing location data. If the request fails, an error is thrown with the status code of the failed request.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IPositionInputDto} position - The position data used to determine the current address.
   * @returns {Promise<Pagination<ILocation>>} A promise that resolves to a paginated response containing the location data.
   * @throws {Error} Throws an error if the API request fails, including the status code of the failure.
   */
  public getCurrentAddress = this.withFetcher(getCurrentAddress);

  /**
   * Updates the details of a person identified by their unique ID.
   *
   * This function sends a PUT request to update a person's information based on their unique ID.
   * The ID and the updated information, provided as a partial IPersonUpdate object, are used to
   * make the update. On successful update, it returns the updated person's information.
   * In case of any errors during the update process, a specific error is thrown indicating
   * the failure of the PUT operation.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} id - The unique identifier of the person to be updated.
   * @param {Partial<IPersonUpdate>} body - The updated information for the person, as a partial update object.
   * @returns {Promise<IPerson>} A promise that resolves to the updated person's information.
   * @throws {PersonErr.PUT_FAILED} Throws an error if the update operation fails.
   */
  public updatePersonById = this.withFetcher(updatePersonById);

  /**
   * Creates a new person record in the system.
   *
   * This function sends a POST request to create a new person record. It takes a person object
   * as input and sends it to the specified endpoint. If the person is successfully created,
   * the function returns true. In case of any failure during the creation process, a specific
   * error is thrown to indicate that the person creation failed.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IPersonRegister} person - The person object containing the details of the new person to be created.
   * @returns {Promise<boolean>} A promise that resolves to true if the person is successfully created.
   * @throws {PersonErr.CREATE_PERSON_FAILED} Throws a specific error if the person creation fails.
   */
  public createPerson = this.withFetcher(createPerson);

  /**
   * Registers a new user with its email and password.
   *
   * This function sends a POST request to register a new user using their email and password.
   * The registration data, encapsulated within the IPersonRegister object, is sent to the specified endpoint.
   * On successful registration, the function returns the newly created user's information.
   * If the registration process encounters any errors, such as API connectivity issues or failure in
   * the post operation, it throws a specific error.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IPersonRegister} data - The registration data including email and password.
   * @returns {Promise<IPerson>} A promise that resolves to the information of the newly registered user.
   * @throws {Error} Throws an error if there is a failure in the post operation or if the API cannot be reached.
   */
  public registerWithEmailAndPassword = this.withFetcher(
    registerWithEmailAndPassword,
  );

  /**
   * Adds a picture to a person's profile.
   *
   * This function is responsible for uploading a picture and associating it with a specific person.
   * It creates a FormData object, appends the picture file, and sends a POST request to the specified endpoint.
   * The function returns true if the picture is successfully added, otherwise, it throws an error.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IPictureRegister} picture - The picture object containing the file and associated person and media IDs.
   * @returns {Promise<boolean>} A promise that resolves to true if the picture is successfully added.
   * @throws {PersonErr.ADD_PICTURE_FAILED} Throws a specific error if the picture addition fails.
   */
  public addPersonPicture = this.withFetcher(addPersonPicture);

  /**
   * Creates a new address record and associates it with a person.
   *
   * This function sends a POST request to create a new address record in the system.
   * It accepts an address object and sends it to the specified endpoint.
   * On successful creation, it returns the updated person's information, including the new address.
   * If the creation fails, it throws a specific error.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IPlace} address - The address object containing the details of the new address to be created.
   * @returns {Promise<IPerson>} A promise that resolves to the person's information with the newly created address.
   * @throws {PersonErr.CREATE_ADDRESS_FAILED} Throws a specific error if the address creation fails.
   */
  public createAddress = this.withFetcher(createAddress);

  /**
   * Updates the address details for a specific address ID.
   *
   * This function sends a PUT request to update the address associated with a given address ID.
   * It takes the address ID and the new address details encapsulated within the IPlace object.
   * On successful update, it returns the updated person's information including the modified address.
   * If the update process encounters any errors, a specific error indicating the failure of the PUT operation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} addressId - The unique identifier of the address to be updated.
   * @param {IPlace} updatedAddress - The new address details to be updated.
   * @returns {Promise<IPerson>} A promise that resolves to the updated person's information after the address update.
   * @throws {PersonErr.PUT_ADDRESS_FAILED} Throws an error if the address update fails.
   */
  public updateAddress = this.withFetcher(updateAddress);

  /**
   * Deletes an address record associated with a given ID.
   *
   * This function sends a DELETE request to remove an address record from the system.
   * It uses an address ID to identify the specific record to be deleted. The function
   * then returns the updated person's information, excluding the deleted address.
   * If the deletion process encounters any errors, it throws a specific error.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} id - The unique identifier of the address to be deleted.
   * @returns {Promise<IPerson>} A promise that resolves to the person's information after the address deletion.
   * @throws {PersonErr.DELETE_ADDRESS_FAILED} Throws a specific error if the address deletion fails.
   */
  public deleteAddress = this.withFetcher(deleteAddress);
}

export { PersonProvider };
