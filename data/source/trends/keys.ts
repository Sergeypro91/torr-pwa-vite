import { FetchArgType } from 'openapi-typescript-fetch';

import { getTrends } from './requests.ts';

export const getTrendsKey = (
  requestOption: Partial<FetchArgType<typeof getTrends>>,
) => {
  return ['pictures', ...Object.values(requestOption)];
};
