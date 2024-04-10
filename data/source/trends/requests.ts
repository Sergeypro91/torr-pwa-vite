import { apiClientService } from '@torr/shared';

export const getTrends = apiClientService.config
  .path('/api/picture/trends/{mediaType}/{timeWindow}')
  .method('get')
  .create();
