import { useMemo } from 'react';
import { FetchArgType } from 'openapi-typescript-fetch';

import { useCacheService } from '@torr/shared';
import {
  MovieSlim,
  ShowSlim,
  TApiResponse,
  getTrends,
  getTrendsKey,
} from '@torr/data';

type TGetTrends = typeof getTrends;

export const useLogic = () => {
  const { useClientQuery } = useCacheService();
  const weeklyTrendsOptions: FetchArgType<typeof getTrends> = {
    mediaType: 'all',
    timeWindow: 'week',
  };

  const { data, isLoading, isError, error } = useClientQuery<
    TApiResponse<TGetTrends>
  >({
    queryKey: getTrendsKey(weeklyTrendsOptions),
    queryFn: () => getTrends(weeklyTrendsOptions),
    throwOnError: false,
  });

  const weeklyTrends = useMemo(() => {
    const trends = data?.data.results ?? [];

    if (trends.length) {
      return trends.filter((trend) => !('name' in trend)) as (
        | MovieSlim
        | ShowSlim
      )[];
    }

    return [];
  }, [data]);

  return { weeklyTrends, isLoading, isError, error };
};
