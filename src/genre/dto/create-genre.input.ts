import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateGenreInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  slug: string;
}
