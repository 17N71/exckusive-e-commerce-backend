import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { cathToError } from 'src/utils';
import { ICreateUserWithRepeat, IUser } from '../types/user-control.type';
import { UserWithoutPassword } from './user-control.model';
import { IUserUpdatePayload } from './user.type';

@Injectable()
export class UserControlService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUser({
    name,
    email,
    phone,
  }: Pick<IUser, 'email' | 'name' | 'phone'>): Promise<IUser> {
    try {
      const users = await this.prismaService.user.findMany({
        where: { OR: [{ email }, { phone }, { name }] },
      });

      return users[0] || null;
    } catch (error) {
      cathToError(error, 'ErrorOnTryingGetUser');
    }
  }

  async createUser(data: ICreateUserWithRepeat): Promise<IUser> {
    try {
      const { password, passwordRepeat, ...userData } = data;
      const notSamePasswords = password !== passwordRepeat;
      if (notSamePasswords) {
        throw new BadRequestException(undefined, {
          cause: 'passwords not are the same',
          description: 'Please write credentials, and same passwords',
        });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      return this.prismaService.user.create({
        data: { ...userData, password: hashPassword },
      });
    } catch (error) {
      cathToError(error, 'ErrorOnTryingCreateUser');
    }
  }

  async updateUser(payload: IUserUpdatePayload): Promise<UserWithoutPassword> {
    try {
      const { id, name, email, phone, password } = payload;
      const user = await this.getUser({ name, email, phone });
      const isMatch = await bcrypt.compare(password, user.password);

      if (!user || !isMatch || id !== user.id) {
        throw new BadRequestException();
      }

      return await this.prismaService.user.update({
        where: { id, AND: { password } },
        data: payload,
      });
    } catch (error) {
      cathToError(error, 'ErrorOnTryingUpdateUser');
    }
  }
}
