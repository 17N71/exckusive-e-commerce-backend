import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UpdateUserInput } from './dto/update-user.dto';
import { UserWithoutPassword } from './user-control.model';
import { UserControlService } from './user-control.service';
import { IUserUpdatePayload } from './user.type';

@Resolver()
export class UserControlResolver {
  constructor(private readonly userService: UserControlService) {}
  @Mutation(() => UserWithoutPassword)
  async updateUser(
    @Args('payload', { type: () => UpdateUserInput })
    payload: IUserUpdatePayload,
  ): Promise<UserWithoutPassword> {
    return await this.userService.updateUser(payload);
  }
}
