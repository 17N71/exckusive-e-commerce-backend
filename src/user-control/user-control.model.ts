import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: false })
  password: string;

  @Field({ nullable: true })
  avatar?: string;
}

@ObjectType()
export class UserWithoutPassword {
  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: false })
  phone: string;

  @Field({ nullable: false })
  address: string;
}
