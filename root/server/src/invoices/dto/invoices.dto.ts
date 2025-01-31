import { Decimal } from '@prisma/client/runtime/library';

export class InvoiceDto {
  id: string;
  vendor_name: string;
  amount: Decimal;
  due_date: Date;
  description: string | null;
  user_id: string | null;
}
