import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int, { description: 'Product Id' })
  id: number;

  @Field(() => String, { description: 'Product name' })
  name: string;
}
