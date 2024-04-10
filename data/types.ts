import { ApiResponse, FetchReturnType } from 'openapi-typescript-fetch';

export type TApiResponse<TQueryReturn> = ApiResponse<
  FetchReturnType<TQueryReturn>
>;
