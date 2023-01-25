/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery } from "react-query";

import * as Api from "../api";
import * as Constants from "../constants";
import * as Mappers from "../mappers";
import * as Types from "../types";

interface IProps {
  params?: Types.IApi.IList.IParams;
}

interface IReturnProps {
  items: Types.IEntity.IProduct[];
  meta?: Types.IEntity.IMeta;
  // error?: Error | null;
  // isError?: boolean;
  [propName: string]: any;
}

const useList = ({ params }: IProps): IReturnProps => {
  const initialData: Types.IQuery.IList = { items: [], meta: Mappers.Meta() };

  // const paramsWithDefault = {
  //   page: has(params, "page") ? get(params, "page", 1) - 1 : 0,
  //   perPage: get(params, "perPage", 20),
  //   sort: {
  //     name: get(params, "sort.name", "modified_at"),
  //     direction: get(params, "sort.direction", "DESC"),
  //   },
  //   filter: get(params, "filter", []).filter((i: unknown) => has(i, "value")),
  // };

  const { data = initialData, ...args } = useQuery<
    Types.IQuery.IList,
    Error,
    Types.IQuery.IList
  >({
    queryKey: [Constants.QUERY_KEY_PRODUCT_LIST],
    queryFn: async () => {
      const response = await Api.List();

      const items = (response || []).reduce(
        (
          prev: Types.IEntity.IProduct[],
          item: Types.IEntity.IProduct
        ): Types.IApi.IProduct[] => [...prev, Mappers.Product(item)],
        []
      );

      return {
        items,
        meta: Mappers.Meta(response),
      };
    },
    // onError(err) {
    //   context?.openNotification({
    //     type: "error",
    //     message: err.message,
    //     description: "Something went wrong",
    //   });
    // },
    keepPreviousData: true,
    initialData,
  });

  return { ...data, ...args };
};

export default useList;
