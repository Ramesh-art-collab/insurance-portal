import { api } from './api';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}

export const authService = {
  login: (payload: LoginPayload) => api.post<AuthResponse>('/auth/login', payload),
  logout: () => api.post('/auth/logout', {}),
  me: () => api.get<AuthResponse>('/auth/me'),
};
