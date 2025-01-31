import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(userId: string) {
    return this.prismaService.invoice.findMany({
      where: {
        User: {
          id: userId,
        },
      },
    });
  }

  async findOne(id: string, userId: string) {
    return this.prismaService.invoice.findUnique({
      where: { id, user_id: userId },
    });
  }
}
