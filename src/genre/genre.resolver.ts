import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { Genre } from './entities/genre.entity';
import { GenreService } from './genre.service';

@Resolver(() => Genre)
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}

  @Mutation(() => Genre, { name: 'createGenre' })
  async createGenre(
    @Args('createGenreInput') createGenreInput: CreateGenreInput,
  ) {
    console.log(createGenreInput);

    return await this.genreService.createGenre(createGenreInput);
  }

  @Query(() => [Genre], { name: 'getAllGenres' })
  async getAllGenres() {
    return await this.genreService.getAllGenres();
  }

  @Query(() => Genre, { name: 'getGenre' })
  async getGenre(@Args('id') id: number) {
    return await this.genreService.getGenre(id);
  }

  @Mutation(() => Genre, { name: 'updateGenre' })
  async updateGenre(
    @Args('updateGenreInput') updateGenreInput: UpdateGenreInput,
  ) {
    return await this.genreService.updateGenre(
      updateGenreInput.id,
      updateGenreInput,
    );
  }

  @Mutation(() => Genre, { name: 'removeGenre' })
  async removeGenre(@Args('id') id: number) {
    return await this.genreService.removeGenre(id);
  }
}
