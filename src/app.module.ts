import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ProductsModule, ],
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
})
export class AppModule {}
