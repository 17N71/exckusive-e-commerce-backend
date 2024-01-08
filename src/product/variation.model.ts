import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Variation {
  @Field(() => String)
  color: string;

  @Field(() => String)
  quantity: number;

  @Field(() => String)
  sale: number;
}
