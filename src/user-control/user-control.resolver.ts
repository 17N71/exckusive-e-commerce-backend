import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ICreateUserWithRepeat, IUser } from '../types/user-control.type';
import { CreateUserInput } from './dto/create-user.dto';
import { User } from './user-control.model';
import { UserControlService } from './user-control.service';

@Resolver()
export class UserControlResolver {
  constructor(private readonly userControlService: UserControlService) {}

  @Query(() => User)
  async getUser(@Args('id', { type: () => ID }) id: number): Promise<IUser> {
    return await this.userControlService.getUser(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput', { type: () => CreateUserInput })
    createUserInput: ICreateUserWithRepeat,
  ): Promise<IUser> {
    return await this.userControlService.createUser(createUserInput);
  }
}
