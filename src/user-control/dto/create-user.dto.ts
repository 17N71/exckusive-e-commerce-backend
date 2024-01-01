import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Length,
  MaxLength,
  Min,
} from 'class-validator';

@InputType({
  description:
    'To Create User fields is one of ["optional" name or "optional" email], password, ["optional" avatar]',
})
export class CreateUserInput {
  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(30)
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(4, 255)
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  avatar?: string;

  @Field({ nullable: false })
  @IsNotEmpty()
  @Min(5)
  password: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @Min(5)
  passwordRepeat?: string;
}
