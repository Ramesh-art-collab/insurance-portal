export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  role: 'admin' | 'agent' | 'customer';
  createdAt?: string;
}
