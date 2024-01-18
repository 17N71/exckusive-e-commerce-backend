import { Field, InputType, Int } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateGenreInput } from './create-genre.input';

@InputType()
export class UpdateGenreInput extends PartialType(CreateGenreInput) {
  @Field(() => Int)
  id: number;
}
