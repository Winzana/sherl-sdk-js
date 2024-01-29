import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  updateMyPassword,
  resetPasswordRequest,
  resetPasswordValidate,
} from './actions';
import { errorFactory } from './errors';

class UserProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Update the user's password.
   *
   * @param {IUpdatePasswordDto} data - The data for updating the user's password.
   * @returns {Promise<boolean>} A promise that resolves to true if the password update is successful.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/user/#update-current-user-password Sherl SDK documentation} for further information
   */
  public updateMyPassword = this.withFetcher(updateMyPassword);

  /**
   * Send a request to reset the user's password.
   *
   * @param {IResetPasswordRequestDto} data - The data for the password reset request.
   * @returns {Promise<boolean>} A promise that resolves to true if the request is successful.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/user/#reset-password-validate Sherl SDK documentation} for further information
   */
  public resetPasswordRequest = this.withFetcher(resetPasswordRequest);

  /**
   * Validate a user's password reset request.
   *
   * @param {IResetPasswordDto} data - The data for validating the password reset request.
   * @returns {Promise<boolean>} A promise that resolves to true if the validation is successful.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/user/#reset-password-request Sherl SDK documentation} for further information
   */
  public resetPasswordValidate = this.withFetcher(resetPasswordValidate);
}

export { UserProvider };
