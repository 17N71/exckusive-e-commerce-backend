import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { cathToError } from 'src/utils';
import { ICreateUserWithRepeat, IUser } from '../types/user-control.type';

@Injectable()
export class UserControlService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUser(id: number): Promise<IUser> {
    try {
      return await this.prismaService.user.findUnique({
        where: { id },
      });
    } catch (error) {
      cathToError(error, 'ErrorOnTryingGetUser');
    }
  }

  async createUser(data: ICreateUserWithRepeat): Promise<IUser> {
    try {
      const { password, passwordRepeat, ...userData } = data;
      const notSamePasswords = password !== passwordRepeat;
      if (notSamePasswords) {
        throw {
          code: 401,
          message: 'Error::PasswordsIsNotSame',
        };
      }
      return this.prismaService.user.create({
        data: { ...userData, password },
      });
    } catch (error) {
      cathToError(error, 'ErrorOnTryingCreateUser');
    }
  }
}
