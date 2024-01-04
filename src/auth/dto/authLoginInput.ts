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
    'To Login User fields is one of ["optional" name or "optional" email], and required password',
})
export class LoginUserInput {
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
  @Length(4, 255)
  phone?: string;

  @Field({ nullable: false })
  @IsNotEmpty()
  @Min(5)
  password: string;
}

@InputType()
export class RegisterUserInput {
  @Field({ nullable: false })
  @IsOptional()
  @MaxLength(30)
  name: string;

  @Field({ nullable: false })
  @IsOptional()
  @Length(4, 255)
  @IsEmail()
  email: string;

  @Field({ nullable: false })
  @IsNotEmpty()
  @Min(5)
  password: string;

  @Field({ nullable: false })
  @IsNotEmpty()
  @Min(5)
  address: string;

  @Field({ nullable: false })
  @IsNotEmpty()
  @Min(5)
  phone: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @Min(5)
  avatar?: string;

  @Field({ nullable: false })
  @IsNotEmpty()
  @Min(5)
  passwordRepeat: string;
}
