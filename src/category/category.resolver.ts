import { Controller } from '@nestjs/common';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import {
  DeleteCategoryDto,
  GetCategoryDto,
  UpdateCategoryDto,
} from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  async createCategory(
    @Args('createCategoryDto', { type: () => CreateCategoryDto })
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return await this.categoryService.create(createCategoryDto);
  }

  @Mutation(() => Category)
  async updateCategory(
    @Args('updateCategoryDto', { type: () => UpdateCategoryDto })
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return await this.categoryService.update(updateCategoryDto);
  }

  @Mutation(() => Category)
  async deleteCategory(
    @Args('deleteCategoryDto', { type: () => DeleteCategoryDto })
    deleteCategoryDto: DeleteCategoryDto,
  ): Promise<Category> {
    return await this.categoryService.remove(deleteCategoryDto.id);
  }

  @Query(() => Category)
  async findCategory(
    @Args('getCategoryDto', { type: () => GetCategoryDto })
    getCategoryDto: GetCategoryDto,
  ): Promise<Category> {
    return await this.categoryService.findOne(getCategoryDto.id);
  }

  @Query(() => [Category])
  async findAllCategories(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }
}
