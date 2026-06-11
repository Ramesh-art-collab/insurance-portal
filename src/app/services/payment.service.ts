import { api } from './api';

export interface Payment {
  id: string;
  claimId?: string;
  amount: number;
  status: string;
}

export const paymentService = {
  list: () => api.get<Payment[]>('/payments'),
  create: (payload: Partial<Payment>) => api.post<Payment>('/payments', payload),
};
