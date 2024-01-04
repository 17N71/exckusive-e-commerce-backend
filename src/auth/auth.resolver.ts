import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserWithoutPassword } from 'src/user-control/user-control.model';
import type { ICreateUserWithRepeat, IUser } from '../types/user-control.type';
import { AuthService } from './auth.service';
import { LoginUserInput, RegisterUserInput } from './dto/authLoginInput';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => UserWithoutPassword)
  async getSome() {
    return await {};
  }

  @Mutation(() => UserWithoutPassword)
  async register(
    @Args('payload', { type: () => RegisterUserInput })
    payload: ICreateUserWithRepeat,
  ): Promise<UserWithoutPassword> {
    return await this.authService.register(payload);
  }

  @Mutation(() => UserWithoutPassword)
  async login(
    @Args('payload', { type: () => LoginUserInput })
    { name, password, email }: Pick<IUser, 'password' | 'name' | 'email'>,
  ): Promise<UserWithoutPassword> {
    return await this.authService.login({ name, password, email });
  }
}
