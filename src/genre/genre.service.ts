import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { cathToError } from 'src/utils';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';

@Injectable()
export class GenreService {
  constructor(private readonly prismaService: PrismaService) {}

  async createGenre(createGenreInput: CreateGenreInput) {
    try {
      console.log('hereee');

      return await this.prismaService.genre.create({ data: createGenreInput });
    } catch (error) {
      cathToError(error, 'errorOnTryingCreateGenre');
    }
  }

  async getAllGenres() {
    try {
      return await this.prismaService.genre.findMany();
    } catch (error) {
      cathToError(error, 'errorOnTryingToGetGenres');
    }
  }

  async getGenre(id: number) {
    try {
      return await this.prismaService.genre.findUnique({ where: { id } });
    } catch (error) {
      cathToError(error, 'errorOnTryingToGetGenre');
    }
  }

  async updateGenre(id: number, updateGenreInput: UpdateGenreInput) {
    try {
      return this.prismaService.genre.update({
        where: {
          id,
        },
        data: updateGenreInput,
      });
    } catch (error) {
      cathToError(error, 'errorOnTryingToUpdateGenre');
    }
  }

  async removeGenre(id: number) {
    try {
      return await this.prismaService.genre.delete({ where: { id } });
    } catch (error) {
      cathToError(error, 'errorOnTryingToDeleteGenre');
    }
  }
}
