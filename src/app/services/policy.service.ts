import { api } from './api';

export interface Policy {
  id: string;
  type: string;
  status: string;
  premium: number;
}

export const policyService = {
  list: () => api.get<Policy[]>('/policies'),
  getById: (id: string) => api.get<Policy>(`/policies/${id}`),
  create: (payload: Partial<Policy>) => api.post<Policy>('/policies', payload),
};
