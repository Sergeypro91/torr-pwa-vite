import { apiClientService } from '@torr/shared';

export const getPictureById = apiClientService.config
  .path('/api/picture/{tmdbId}/{mediaType}')
  .method('get')
  .create();
