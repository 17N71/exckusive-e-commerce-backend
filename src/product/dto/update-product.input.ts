import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id: number;
}
