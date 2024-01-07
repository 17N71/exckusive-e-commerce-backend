import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { ProductModule } from './product/product.module';
import { UserControlModule } from './user-control/user-control.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    UserControlModule,
    AuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
    }),
    ProductModule,
    CategoryModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
