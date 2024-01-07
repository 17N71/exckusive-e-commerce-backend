import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

// type OrderStatus = 'backlog' | 'in-progress' | 'rejected';

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
  categoryId: number;
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
