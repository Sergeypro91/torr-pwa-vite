import {
  UndefinedInitialDataOptions,
  UseMutationOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export const useCacheService = () => {
  const queryClient = useQueryClient();

  const useClientQuery = <TData,>({
    throwOnError = true,
    ...rest
  }: UndefinedInitialDataOptions<TData>) =>
    useQuery({
      throwOnError,
      ...rest,
    });

  const useClientMutation = <TData,>({
    queryKey,
    onSuccess,
    throwOnError = true,
    ...rest
  }: UseMutationOptions<TData> & {
    queryKey: string[];
    onSuccess: () => void;
  }) =>
    useMutation({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey });

        if (onSuccess) {
          onSuccess();
        }
      },
      throwOnError,
      ...rest,
    });

  return { queryClient, useClientQuery, useClientMutation };
};
