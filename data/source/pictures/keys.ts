import { FetchArgType } from 'openapi-typescript-fetch';

import { getPictureById } from './requests.ts';

export const getPictureByIdKey = (
  requestOption: Partial<FetchArgType<typeof getPictureById>>,
) => {
  return [...Object.values(requestOption)];
};
