/* eslint-disable react/jsx-props-no-spreading */
import { FC, PropsWithChildren } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { useMutation, useQueryClient } from "react-query";
import * as yup from "yup";

import * as Api from "../api";
import * as Constants from "../constants";
import * as Mappers from "../mappers";
import * as Types from "../types";

interface IFormValues extends Types.IForm.IUpdate {}

// interface IChildren extends FormikProps<IFormValues> {}

interface IProps extends PropsWithChildren {
  id: string | number;
  // values from product entity
  data: Types.IForm.IUpdate;
  // for styles
  className?: string;
  // for react-query
  onSuccess?: (data: Types.IEntity.IProduct) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
  // form body
  // children: (props: IChildren) => JSX.Element;
}

const Update: FC<IProps> = ({
  id,
  data,
  className,
  onSuccess,
  onError,
  onSettled,
  children,
}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    Types.IEntity.IProduct,
    string,
    IFormValues,
    unknown
  >(
    async (formData) => {
      const response = await Api.Update({ id, values: formData });

      return Mappers.Product(response);
    },
    {
      onSuccess,
      onError,
      onSettled,
    }
  );

  const validationSchema = yup.object().shape({
    title: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().min(10, "more than 10 character").required(),
  });

  const handleSubmit = (
    values: IFormValues,
    { setSubmitting, resetForm }: FormikHelpers<IFormValues>
  ): void => {
    mutation.mutate(values, {
      onSettled: () => setSubmitting(false),
      onSuccess: async () => {
        resetForm();
        await queryClient.invalidateQueries({
          predicate: (query) =>
            query.queryKey[0] === Constants.QUERY_KEY_PRODUCT_LIST,
        });
      },
    });
  };

  return (
    <Formik<IFormValues>
      onSubmit={handleSubmit}
      initialValues={{
        title: data.title,
        price: data.price,
        description: data.description,
      }}
      enableReinitialize
      validateOnChange
      validateOnBlur
      {...{ validationSchema }}
    >
      {/* {(props: FormikProps<IFormValues>) => (
        <Form {...{ className }}>{children(props)}</Form>
      )} */}
      <Form {...{ className }}>{children}</Form>
    </Formik>
  );
};

export default Update;
