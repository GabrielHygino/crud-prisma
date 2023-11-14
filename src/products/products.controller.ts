import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(Number(id));
  }

  @Post()
  createProduct(@Body() data: { name: string; description: string; categoryName: string }) {
    return this.productsService.createProduct(data);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() data: { name?: string; description?: string; categoryName?: string }) {
    return this.productsService.updateProduct(Number(id), data);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(Number(id));
  }
}
