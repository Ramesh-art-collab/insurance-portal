export interface ClaimRecord {
  id: string;
  policyId: string;
  status: 'submitted' | 'under_review' | 'approved' | 'rejected';
  amount: number;
  submittedAt?: string;
}
