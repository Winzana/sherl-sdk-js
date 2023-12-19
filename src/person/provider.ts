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
   * @returns {Promise<IConfig[]>} A promise that resolves to an array of configuration objects.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/person/person-config#get-person-configuration Sherl SDK documentation} for further information
   */
  public getConfigs = this.withFetcher(getConfigs);

  /**
   * Retrieves the information of the currently authenticated user.
   *
   * @returns {Promise<IPerson>} A promise that resolves to the authenticated user's information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/person/#get-current-person Sherl SDK documentation} for further information
   */
  public getMe = this.withFetcher(getMe);

  /**
   * Retrieves the information of a person by its unique identifier.
   *
   * @param {string} id - The unique identifier of the person to retrieve.
   * @returns {Promise<IPerson>} A promise that resolves to the information of the person identified by the ID.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/person/#get-person-by-id Sherl SDK documentation} for further information
   */
  public getPersonById = this.withFetcher(getPersonById);

  /**
   * Retrieves a paginated list of persons based on provided filters.
   *
   * @param {number} [page=1] - The page number of the results to be fetched (defaults to 1).
   * @param {number} [itemsPerPage=10] - The number of items per page (defaults to 10).
   * @param {IPersonFilters} filters - The filtering criteria to apply to the person list.
   * @returns {Promise<Pagination<IPerson>>} A promise that resolves to a paginated response containing the list of persons.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/person/#get-list-of-persons Sherl SDK documentation} for further information
   */
  public getPersons = this.withFetcher(getPersons);

  /**
   * Retrieves the current address based on a given position.
   *
   * @param {IPositionInputDto} position - The position data used to determine the current address.
   * @returns {Promise<Pagination<ILocation>>} A promise that resolves to a paginated response containing the location data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/person/#get-person-address Sherl SDK documentation} for further information
   */
  public getCurrentAddress = this.withFetcher(getCurrentAddress);

  /**
   * Updates the details of a person identified by their unique ID.
   *
   * @param {string} id - The unique identifier of the person to be updated.
   * @param {Partial<IPersonUpdate>} body - The updated information for the person, as a partial update object.
   * @returns {Promise<IPerson>} A promise that resolves to the updated person's information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/person/#update-a-user Sherl SDK documentation} for further information
   */
  public updatePersonById = this.withFetcher(updatePersonById);

  /**
   * Creates a new person record in the system.
   *
   * @param {IPersonRegister} person - The person object containing the details of the new person to be created.
   * @returns {Promise<boolean>} A promise that resolves to true if the person is successfully created.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/person/#register-a-user-for-your-application Sherl SDK documentation} for further information
   */
  public createPerson = this.withFetcher(createPerson);

  /**
   * Registers a new user with its email and password.
   *
   * @param {IPersonRegister} data - The registration data including email and password.
   * @returns {Promise<IPerson>} A promise that resolves to the information of the newly registered user.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/person/#register-a-user-for-your-sherl Sherl SDK documentation} for further information
   */
  public registerWithEmailAndPassword = this.withFetcher(
    registerWithEmailAndPassword,
  );

  /**
   * Adds a picture to a person's profile.
   *
   * @param {IPictureRegister} picture - The picture object containing the file and associated person and media IDs.
   * @returns {Promise<boolean>} A promise that resolves to true if the picture is successfully added.
   * TODO: fix link
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/person/#add-picture-to-person Sherl SDK documentation} for further information
   */
  public addPersonPicture = this.withFetcher(addPersonPicture);

  /**
   * Creates a new address record and associates it with a person.
   *
   * @param {IPlace} address - The address object containing the details of the new address to be created.
   * @returns {Promise<IPerson>} A promise that resolves to the person's information with the newly created address.
   * TODO: fix link
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/person/#create-address-to-person Sherl SDK documentation} for further information
   */
  public createAddress = this.withFetcher(createAddress);

  /**
   * Updates the address details for a specific address ID.
   *
   * @param {string} addressId - The unique identifier of the address to be updated.
   * @param {IPlace} updatedAddress - The new address details to be updated.
   * @returns {Promise<IPerson>} A promise that resolves to the updated person's information after the address update.
   * TODO: fix link
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/person/#update-address-by-id Sherl SDK documentation} for further information
   */
  public updateAddress = this.withFetcher(updateAddress);

  /**
   * Deletes an address record associated with a given ID.
   *
   * @param {string} id - The unique identifier of the address to be deleted.
   * @returns {Promise<IPerson>} A promise that resolves to the person's information after the address deletion.
   * TODO: fix link
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/person/#delete-address-by-id Sherl SDK documentation} for further information
   */
  public deleteAddress = this.withFetcher(deleteAddress);
}

export { PersonProvider };
