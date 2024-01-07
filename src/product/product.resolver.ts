import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateProductInput,
  DeleteProductInput,
  GetProductInput,
  UpdateProductInput,
} from './dto/product.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async findAllProducts(): Promise<Product[]> {
    return await this.productService.findAll();
  }
  @Query(() => [Product])
  async findProduct(
    @Args('getProductDto', { type: () => GetProductInput })
    getProductDto: GetProductInput,
  ): Promise<Product> {
    return await this.productService.findOne(getProductDto.id);
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('productDto', { type: () => CreateProductInput })
    productDto: CreateProductInput,
  ): Promise<Product> {
    return await this.productService.createProduct(productDto);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('updateProductDto', { type: () => UpdateProductInput })
    updateProductDto: UpdateProductInput,
  ): Promise<Product> {
    return await this.productService.updateProduct(updateProductDto);
  }

  @Mutation(() => Product)
  async removeProduct(
    @Args('removeProductDto', { type: () => DeleteProductInput })
    removeProductDto: DeleteProductInput,
  ): Promise<Product> {
    return await this.productService.remove(removeProductDto.id);
  }
}
