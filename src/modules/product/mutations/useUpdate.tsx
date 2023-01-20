import { useMutation } from "react-query";

import * as Api from "../api";
import * as Mappers from "../mappers";

interface IData {
  _id: string;
  user: string;
  title: string;
  price: number;
  description: string;
  productId: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

interface IValues {
  title: string;
  price: number;
  description: string;
}

interface IProps {
  id: string | number;
  onSuccess?: (data?: IData) => void;
  onError?: (error: unknown) => void;
  onSettled?: () => void;
}

interface IReturnProps {
  mutate: (values: IValues, options?: IProps) => void;
}

const useUpdate = ({
  id,
  onSuccess,
  onError,
  onSettled,
}: IProps): IReturnProps => {
  return useMutation<
    IData /** data  */,
    unknown /** error  */,
    IValues /** variables */,
    unknown /** context */
  >(
    async (values) => {
      const response = await Api.Update({ id, values });

      return Mappers.Product(response);
    },
    {
      onSuccess,
      onError,
      onSettled,
    }
  );
};

export default useUpdate;
