/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseMutateFunction, useMutation, useQueryClient } from "react-query";

import * as Api from "../api";
import * as Constants from "../constants";

const useSyncList = (): {
  mutate: UseMutateFunction;
  isLoading: boolean;
} => {
  const queryClient = useQueryClient();

  return useMutation<any, string, any, any>(
    async () => {
      await Api.SyncList();
    },
    {
      onSuccess: () => {
        void queryClient.invalidateQueries({
          predicate: (query) =>
            query.queryKey[0] === Constants.QUERY_KEY_PRODUCT_LIST,
        });
      },
    }
  );
};

export default useSyncList;
