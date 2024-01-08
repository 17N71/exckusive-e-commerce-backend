import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

// type OrderStatus = 'backlog' | 'in-progress' | 'rejected';

@InputType()
class VariationsType {
  @Field(() => String)
  color: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int)
  sale: number;
}

@InputType()
export class CreateProductInput {
  @Field(() => Int)
  price: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  avatar: string;

  @Field(() => [String])
  images: string[];

  @Field(() => Int)
  categoryId: number; // Instead of 'never', use the appropriate type (e.g., number)

  @Field(() => Int)
  rate: number;

  @Field(() => [VariationsType]) // Array of VariationsType objects
  variations: VariationsType[];
}

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id: number;
}
@InputType()
export class GetProductInput {
  @Field(() => Int)
  id: number;
}
@InputType()
export class DeleteProductInput {
  @Field(() => Int)
  id: number;
}
