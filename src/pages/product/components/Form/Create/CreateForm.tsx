/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Control } from "react-hook-form";

import { Button } from "components";

import { InputDescription, InputPrice, InputTitle } from "../Fields";

interface IFormValues {
  title: string;
  price: number;
  description: string;
}

interface IProps {
  control: Control<IFormValues>;
  isSubmitting: boolean;
}

const CreateForm: React.FC<IProps> = ({ control, isSubmitting }) => {
  return (
    <>
      <InputTitle control={control} name="title" />

      <InputPrice control={control} name="price" />

      <InputDescription control={control} name="description" />

      <Button
        loading={isSubmitting}
        type="primary"
        htmlType="submit"
        size="large"
      >
        Submit
      </Button>
    </>
  );
};

export default CreateForm;
