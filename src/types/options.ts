export type NotificationId = string;
export type NotificationType = 'info' | 'success' | 'error' | 'warning';
// type NotificationPosition = 'left' | 'center' | 'right';

export interface VnNotificationOptions {
  type: NotificationType
  title: string
  description?: string
  timeout?: number
  dark?: boolean
  callback?(): void
}

export interface VnNotificationOptionsWithID extends VnNotificationOptions {
  id: NotificationId
}

export interface VnNotificationProps extends VnNotificationOptionsWithID {}
