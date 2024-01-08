import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCategoryDto {
  @Field(() => String)
  title: string;

  @Field(() => String)
  icon: string;
}
