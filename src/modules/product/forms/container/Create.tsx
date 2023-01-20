/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { PropsWithChildren } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import { useQueryClient } from "react-query";

import CreateForm from "pages/product/components/Form/Create/CreateForm";

import * as Constants from "../../constants";
import * as Mutations from "../../mutations";
import * as Types from "../../types";
import * as Schemas from "../validations";

interface IProps extends PropsWithChildren {
  className?: string;
  onSuccess?: (data?: Types.IEntity.IProduct) => void;
  onError?: (error: unknown) => void;
  onSettled?: () => void;
}

const Create: React.FC<IProps> = ({ onSuccess, onSettled, onError }) => {
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm<Types.IForm.ICreate>({
    defaultValues: {
      title: "",
      price: 0,
      description: "",
    },
    resolver: yupResolver(Schemas.create),
    mode: "all",
  });

  const { isValid, isSubmitting } = useFormState({ control });

  const { mutate } = Mutations.useCreate({
    onSuccess,
    onSettled,
    onError,
  });

  const onSubmit: SubmitHandler<Types.IForm.ICreate> = (data) => {
    if (isValid) {
      mutate(data, {
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
      <CreateForm control={control} isSubmitting={isSubmitting} />

      {/* {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                control,
                key: child.props.name,
              },
            })
          : child;
      })} */}
    </form>
  );
};

export default Create;
