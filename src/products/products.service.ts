import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getAllProducts() {
    return this.prisma.product.findMany({ include: { category: true } });
  }

  async getProductById(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async createProduct(data: { name: string; description: string; categoryName: string }) {
    return this.prisma.product.create({ data, include: { category: true } });
  }

  async updateProduct(id: number, data: { name?: string; description?: string; categoryName?: string }) {
    return this.prisma.product.update({
      where: { id },
      data,
      include: { category: true },
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
