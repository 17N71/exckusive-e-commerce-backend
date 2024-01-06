import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
  ICreateUserWithRepeat,
  ILoginResult,
} from 'src/types/user-control.type';
import { UserControlService } from '../user-control/user-control.service';
import { LoginPayload } from './auth.type';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserControlService) {}

  async register(payload: ICreateUserWithRepeat) {
    const { password: _password, ...user } = await this.userService.createUser({
      ...payload,
    });

    return user;
  }

  async login({
    name,
    email,
    password,
    phone,
  }: LoginPayload): Promise<ILoginResult> {
    const user = await this.userService.getUser({ name, email, phone });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      throw new BadRequestException();
    }

    const { password: _p, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}
