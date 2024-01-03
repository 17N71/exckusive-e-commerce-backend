import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserWithoutPassword } from 'src/user-control/user-control.model';
import type { IUser } from '../types/user-control.type';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/authLoginInput';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => UserWithoutPassword)
  async getSome() {
    return await {};
  }

  @Mutation(() => UserWithoutPassword)
  async login(
    @Args('payload', { type: () => LoginUserInput })
    { name, password, email }: Pick<IUser, 'password' | 'name' | 'email'>,
  ) {
    return await this.authService.login({ name, password, email });
  }
}
