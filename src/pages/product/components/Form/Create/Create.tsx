import React from "react";
import { Field } from "formik";

import { Create as CreateForm } from "modules/product/forms";

import { Fields } from "components";
import { Button } from "components/Button";

interface IProps {
  handleSuccess: () => void;
}

const Create: React.FC<IProps> = ({ handleSuccess }) => {
  return (
    <CreateForm
      data={{
        title: "",
        price: 0,
        description: "",
      }}
      onSuccess={(): void => {
        handleSuccess();
      }}
    >
      <>
        <Field
          name="title"
          component={Fields.Input}
          type="text"
          required
          label={"title"}
          placeholder={"title placeholder"}
          size="large"
        />
        <Field
          name="price"
          component={Fields.Number}
          required
          label={"price"}
          placeholder={"price placeholder"}
          size="large"
        />
        <Field
          name="description"
          component={Fields.Textarea}
          rows={4}
          type="text"
          required
          label={"description"}
          placeholder={"description placeholder"}
          size="large"
        />
        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </>
    </CreateForm>
  );
};

export default Create;
