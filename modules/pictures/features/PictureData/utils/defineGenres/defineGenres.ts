import { MediaType } from '@torr/data';
import { movieGenres, tvGenres } from '@torr/shared';

type TDefineGenresOptions = {
  genres: number[];
  mediaType: `${MediaType}`;
};

export const defineGenres = ({ genres, mediaType }: TDefineGenresOptions) => {
  const genreMap = new Map(
    (mediaType === MediaType.MOVIE ? movieGenres : tvGenres).map((genre) => [
      genre.id,
      genre,
    ]),
  );

  return genres
    .reduce((genres, genreId) => {
      const genreString = genreMap.get(genreId)?.name;

      if (genreString) {
        genres.push(genreString);
      }

      return genres;
    }, [] as string[])
    .join(' | ');
};
