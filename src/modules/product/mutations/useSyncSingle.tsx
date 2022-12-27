/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "react-query";

import * as Api from "../api";
import * as Constants from "../constants";

const useSyncSingle = (): {
  mutate: ({ id }: { id: string | number }) => void;
  isLoading: boolean;
} => {
  const queryClient = useQueryClient();

  return useMutation<any, string, { id: string | number }, any>(
    async ({ id }) => {
      await Api.Delete({ id });
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

export default useSyncSingle;
