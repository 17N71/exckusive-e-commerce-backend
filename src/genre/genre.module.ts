import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { GenreResolver } from './genre.resolver';
import { GenreService } from './genre.service';

@Module({
  providers: [PrismaService, GenreResolver, GenreService],
})
export class GenreModule {}
