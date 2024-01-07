import { Field, InputType, Int } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

@InputType()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @Field(() => Int)
  id: number;
}

@InputType()
export class GetCategoryDto {
  @Field(() => Int)
  id: number;
}

@InputType()
export class DeleteCategoryDto {
  @Field(() => Int)
  id: number;
}
