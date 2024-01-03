import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserControlService } from 'src/user-control/user-control.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  providers: [UserControlService, AuthResolver, PrismaService, AuthService],
  exports: [AuthResolver, AuthService],
})
export class AuthModule {}
