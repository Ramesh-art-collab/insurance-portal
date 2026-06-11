export interface PaymentRecord {
  id: string;
  amount: number;
  currency?: string;
  status: 'pending' | 'paid' | 'failed';
  paidAt?: string;
}
