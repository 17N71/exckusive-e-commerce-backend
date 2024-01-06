import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
  providers: [PrismaService, ProductResolver, ProductService],
})
export class ProductModule {}
