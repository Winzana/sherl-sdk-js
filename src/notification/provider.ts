import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  disableToOrganization,
  enableToOrganization,
  getNotifications,
  notificationRegistration,
  sendNotificationByType,
  updateNotification,
} from './actions';
import { errorFactory } from './errors';

class NotificationProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Register a notification.
   *
   * @param {INotificationRegistration} notificationRegistration - Data for registering the notification.
   * @returns {Promise<INotificationRegistrationResponse>} A promise that resolves to an INotificationRegistrationResponse.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/notification#registration Sherl SDK documentation} for further information
   */
  public notificationRegistration = this.withFetcher(notificationRegistration);
  /**
   * Enable a notification for a specific organization.
   *
   * @param {INotificationUpdateAvailabilityInput} enableToOrganization - The input data to enable the notification for an organization.
   * @param {string} id - The ID of the notification to enable.
   * @returns {Promise<INotification>} A promise that resolves to the updated notification as an INotification.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/notification#enable-notifications-on-organization Sherl SDK documentation} for further information
   */

  public enableToOrganization = this.withFetcher(enableToOrganization);

  /**
   * Disable a notification for a specific organization.
   *
   * @param {INotificationUpdateAvailabilityInput} disableToOrganizationInput - The input data to disable the notification for an organization.
   * @param {string} id - The ID of the notification to disable.
   * @returns {Promise<INotification>} A promise that resolves to the updated notification as an INotification.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/notification#disable-notifications-on-organization Sherl SDK documentation} for further information
   */
  public disableToOrganization = this.withFetcher(disableToOrganization);

  /**
   * Update a notification.
   *
   * @param {string} id - The ID of the notification to update.
   * @param {INotificationUpdateDto} body - The update body containing the changes to apply.
   * @returns {Promise<INotification>} A promise that resolves to the updated notification.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/notification#update-notification Sherl SDK documentation} for further information
   */
  public updateNotification = this.withFetcher(updateNotification);

  /**
   * Get a list of notifications based on specified filters.
   *
   * @param {INotificationFilters} filters - Filters to apply when fetching notifications.
   * @returns {Promise<ISearchResult<INotification>>} A promise that resolves to an ISearchResult containing the list of notifications.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/notification#get-notifications Sherl SDK documentation} for further information
   */
  public getNotifications = this.withFetcher(getNotifications);

  /**
   * Send a notification by its type.
   *
   * @param {NotificationTypeEnum} notificationType - The type of notification to send.
   * @param {SendNotificationInput} notificationInfo - Information for sending the notification.
   * @returns {Promise<boolean>} A promise that resolves to a boolean value (true if successful).
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/notification#send-notification-by-type Sherl SDK documentation} for further information
   */
  public sendNotificationByType = this.withFetcher(sendNotificationByType);
}

export { NotificationProvider };
