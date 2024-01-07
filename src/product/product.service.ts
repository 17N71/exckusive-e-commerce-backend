import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { cathToError } from 'src/utils';
import { CreateProductInput, UpdateProductInput } from './dto/product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    try {
      return await this.prismaService.product.findMany();
    } catch (error) {
      cathToError(error, 'ErrorOnTryingToGetAllProducts');
    }
  }
  async findOne(id: number): Promise<Product> {
    try {
      return await this.prismaService.product.findUnique({ where: { id } });
    } catch (error) {
      cathToError(error, 'ErrorOnTryingToGetOneProduct');
    }
  }

  async createProduct(createProductDto: CreateProductInput): Promise<Product> {
    try {
      return await this.prismaService.product.create({
        data: createProductDto,
      });
    } catch (error) {
      cathToError(error, 'errorOnTryToCreateProduct');
    }
  }

  async updateProduct(
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    try {
      const { id, ...data } = updateProductInput;
      return await this.prismaService.product.update({ data, where: { id } });
    } catch (error) {
      cathToError(error, 'errorOnTryToCreateProduct');
    }
  }

  async remove(id: number): Promise<Product> {
    console.log({ id });

    try {
      return await this.prismaService.product.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      cathToError(error, 'ErrorOnTryingToGetOneProduct');
    }
  }
}
