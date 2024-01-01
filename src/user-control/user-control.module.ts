import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserControlResolver } from './user-control.resolver';
import { UserControlService } from './user-control.service';

@Module({
  providers: [PrismaService, UserControlResolver, UserControlService],
  exports: [UserControlService, UserControlResolver],
})
export class UserControlModule {}
