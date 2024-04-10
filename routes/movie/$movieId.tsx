import React from 'react';
import { FetchArgType } from 'openapi-typescript-fetch';
import { createFileRoute, useParams } from '@tanstack/react-router';

import { useCacheService } from '@torr/shared';
import { TApiResponse, getPictureById, getPictureByIdKey } from '@torr/data';

export const Route = createFileRoute('/movie/$movieId')({
  component: Movie,
});

function Movie() {
  const { movieId } = useParams({ from: '/movie/$movieId' });
  const { useClientQuery } = useCacheService();
  const pictureQueryData: FetchArgType<typeof getPictureById> = {
    mediaType: 'movie',
    tmdbId: movieId,
  };

  const {
    data: movie,
    isLoading,
    isError,
  } = useClientQuery<TApiResponse<typeof getPictureById>>({
    queryKey: getPictureByIdKey(pictureQueryData),
    queryFn: () => getPictureById(pictureQueryData),
  });

  React.useEffect(() => {
    console.log('MOVIE DATA', { movie, isLoading, isError });
  }, [movie, isLoading, isError]);

  return (
    <div>
      <h3>Movie id-{movie?.data.tmdbId}</h3>
    </div>
  );
}
