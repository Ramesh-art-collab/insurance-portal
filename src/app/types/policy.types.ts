export interface PolicySummary {
  id: string;
  type: string;
  status: 'active' | 'inactive' | 'pending';
  premium: number;
  startDate?: string;
  endDate?: string;
}
