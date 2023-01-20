/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import { useQueryClient } from "react-query";

import UpdateForm from "pages/product/components/Form/Update/UpdateForm";

import * as Constants from "../../constants";
import * as Hooks from "../../hooks";
import * as Mutations from "../../mutations";
import * as Types from "../../types";
import * as Schemas from "../validations";

interface IProps {
  id: string | number;
  className?: string;
  onSuccess?: (data?: Types.IEntity.IProduct) => void;
  onError?: (error: unknown) => void;
  onSettled?: () => void;
}

const Update: React.FC<IProps> = ({ id, onSuccess, onSettled, onError }) => {
  const queryClient = useQueryClient();

  const { item } = Hooks.useSingle({ productId: id });

  const { control, handleSubmit, reset } = useForm<Types.IForm.IUpdate>({
    defaultValues: {
      title: "",
      price: 0,
      description: "",
    },
    values: {
      title: item.title,
      price: item.price,
      description: item.description,
    },
    resolver: yupResolver(Schemas.update),
    mode: "all",
  });

  const { isValid, isSubmitting } = useFormState({ control });

  const { mutate } = Mutations.useUpdate({
    id,
    onSuccess,
    onSettled,
    onError,
  });

  const onSubmit: SubmitHandler<Types.IForm.IUpdate> = (data) => {
    if (isValid) {
      mutate(data, {
        id,
        onSuccess: () => {
          reset();
          void queryClient.invalidateQueries({
            predicate: (query) =>
              query.queryKey[0] === Constants.QUERY_KEY_PRODUCT_LIST,
          });
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UpdateForm control={control} isSubmitting={isSubmitting} />
    </form>
  );
};

export default Update;
