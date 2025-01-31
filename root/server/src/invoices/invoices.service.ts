import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.invoice.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.invoice.findUnique({
      where: { id },
    });
  }
}
