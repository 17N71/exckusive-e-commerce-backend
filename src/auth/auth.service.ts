import { Injectable, UnauthorizedException } from '@nestjs/common';
import type { IUser } from '../types/user-control.type';
import { UserControlService } from '../user-control/user-control.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserControlService) {}

  async login({
    name,
    email,
    password,
  }: Partial<Pick<IUser, 'name' | 'email'>> & { password: string }) {
    const user = await this.userService.getUser({ name, email });

    if (user.password !== password) {
      throw new UnauthorizedException();
    }
    const { password: _p, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}
