import { useAccountQuery, useUpdateAccountMutation } from "@/entities/account";

export const useToggleBlocking = () => {
  const acountQuery = useAccountQuery();
  const udpateAccountMutation = useUpdateAccountMutation();

  const toggleBlocking = () => {
    if (acountQuery.data) {
      udpateAccountMutation.mutate({
        isBlockingEnabled: !acountQuery.data?.isBlockingEnabled,
      });
    }
  };

  return {
    toggleBlocking,
    isLoading: udpateAccountMutation.isLoading,
    isBlockingEnabled: acountQuery.data?.isBlockingEnabled ?? false,
    isReady: acountQuery.isSuccess,
  };
};
