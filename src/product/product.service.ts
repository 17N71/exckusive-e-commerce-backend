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
      const variations = createProductDto.variations;
      return await this.prismaService.product.create({
        data: { ...createProductDto, variations: { create: variations } },
        include: {
          variations: true,
        },
      });
    } catch (error) {
      cathToError(error, 'errorOnTryToCreateProduct');
    }
  }

  async updateProduct(
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    try {
      const { id, variations, ...data } = updateProductInput;
      return await this.prismaService.product.update({
        data: { ...data, variations: { create: variations } },
        where: { id },
      });
    } catch (error) {
      cathToError(error, 'errorOnTryToCreateProduct');
    }
  }

  async remove(id: number): Promise<Product> {
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
