import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { cathToError } from 'src/utils';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      return await this.prismaService.category.create({
        data: createCategoryDto,
      });
    } catch (error) {
      cathToError(error, 'ErrorOnTryingToCreateCategory');
    }
  }

  async findAll(): Promise<Category[]> {
    try {
      return await this.prismaService.category.findMany();
    } catch (error) {
      cathToError(error, 'ErrorOnTryingToGetAllCategories');
    }
  }

  async findOne(id: number): Promise<Category> {
    try {
      return await this.prismaService.category.findUnique({
        where: { id },
      });
    } catch (error) {
      cathToError(error, 'ErrorOnTryingToGetCategory');
    }
  }

  async update(updateCategoryInput: UpdateCategoryDto): Promise<Category> {
    try {
      const { id, ...data } = updateCategoryInput;
      return await this.prismaService.category.update({
        data,
        where: { id },
      });
    } catch (error) {
      cathToError(error, 'ErrorOnTryingToUpdateCategory');
    }
  }

  async remove(id: number): Promise<Category> {
    try {
      return await this.prismaService.category.delete({
        where: { id },
      });
    } catch (error) {
      cathToError(error, 'ErrorOnTryingToDeleteCategory');
    }
  }
}
