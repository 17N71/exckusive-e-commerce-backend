import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

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
