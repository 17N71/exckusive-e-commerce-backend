import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  UserLoginResult,
  UserWithoutPassword,
} from 'src/user-control/user-control.model';
import type {
  ICreateUserWithRepeat,
  ILoginResult,
  IUser,
} from '../types/user-control.type';
import { AuthService } from './auth.service';
import { LoginUserInput, RegisterUserInput } from './dto/authLoginInput';

@Resolver('auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => UserWithoutPassword)
  async getSome() {
    return {};
  }

  @Mutation(() => UserWithoutPassword)
  async register(
    @Args('payload', { type: () => RegisterUserInput })
    payload: ICreateUserWithRepeat,
  ): Promise<ILoginResult> {
    return await this.authService.register(payload);
  }

  @Mutation(() => UserLoginResult)
  async login(
    @Args('payload', { type: () => LoginUserInput })
    {
      name,
      password,
      email,
      phone,
    }: Pick<IUser, 'password' | 'name' | 'email' | 'phone'>,
  ): Promise<ILoginResult> {
    return await this.authService.login({ name, password, email, phone });
  }
}
