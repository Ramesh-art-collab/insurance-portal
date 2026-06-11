import { api } from './api';

export interface Claim {
  id: string;
  policyId: string;
  status: string;
  amount: number;
}

export const claimsService = {
  list: () => api.get<Claim[]>('/claims'),
  getById: (id: string) => api.get<Claim>(`/claims/${id}`),
  create: (payload: Partial<Claim>) => api.post<Claim>('/claims', payload),
};
