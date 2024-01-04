import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ICreateUserWithRepeat } from 'src/types/user-control.type';
import { UserWithoutPassword } from '../user-control/user-control.model';
import { UserControlService } from '../user-control/user-control.service';
import { LoginPayload } from './auth.type';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserControlService) {}

  async register(payload: ICreateUserWithRepeat) {
    return await this.userService.createUser(payload);
  }

  async login({
    name,
    email,
    password,
    phone,
  }: LoginPayload): Promise<UserWithoutPassword> {
    const user = await this.userService.getUser({ name, email, phone });

    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }
    const { password: _p, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}
