import { useQuery } from "react-query";

import * as Api from "../api";
import * as Constants from "../constants";
import * as Mappers from "../mappers";
import * as Types from "../types";

interface IProps {
  productId: string | number;
}

interface IReturnProps {
  item?: Types.IEntity.IProduct;
  [propName: string]: unknown;
}

const useSingle = ({ productId }: IProps): IReturnProps => {
  const initialData: Types.IQuery.ISingle = { item: Mappers.Product() };

  const { data = initialData, ...args } = useQuery<
    Types.IQuery.ISingle,
    Error,
    Types.IQuery.ISingle
  >({
    queryKey: [Constants.QUERY_KEY_PRODUCT_SINGLE, productId],
    queryFn: async () => {
      const response = await Api.Single({ id: productId });

      return {
        item: Mappers.Product(response),
      };
    },
    initialData,
  });

  return { ...data, ...args };
};

export default useSingle;
