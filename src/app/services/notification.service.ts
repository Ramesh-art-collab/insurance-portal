import { api } from './api';

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
}

export const notificationService = {
  list: () => api.get<Notification[]>('/notifications'),
  markAsRead: (id: string) => api.patch<Notification>(`/notifications/${id}/read`, {}),
};
