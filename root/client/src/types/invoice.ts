export interface Invoice {
  id: string;
  vendor_name: string;
  amount: number;
  due_date: Date;
  description: string | null;
  user_id: string | null;
  created_at: Date;
  paid: boolean;
}
