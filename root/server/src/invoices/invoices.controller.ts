import { Controller, Get, Param } from '@nestjs/common';
import { InvoiceDto } from './dto/invoices.dto';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  async getInvoices(): Promise<InvoiceDto[]> {
    return this.invoicesService.findAll();
  }

  @Get(':id')
  async getInvoice(@Param('id') id: string): Promise<InvoiceDto | null> {
    return this.invoicesService.findOne(id);
  }
}
