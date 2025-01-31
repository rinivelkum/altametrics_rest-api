import {
  Controller,
  Get,
  Param,
  UseGuards,
  Request,
  UseFilters,
} from '@nestjs/common';
import { InvoiceDto } from './dto/invoices.dto';
import { InvoicesService } from './invoices.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtExceptionFilter } from 'src/filters/jwt-filter';

@Controller('invoices')
@UseFilters(JwtExceptionFilter)
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getInvoices(@Request() req): Promise<InvoiceDto[]> {
    const userId = req.user.userId;
    return this.invoicesService.findAll(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getInvoice(
    @Request() req,
    @Param('id') id: string,
  ): Promise<InvoiceDto | null> {
    const userId = req.user.userId;
    return this.invoicesService.findOne(id, userId);
  }
}
