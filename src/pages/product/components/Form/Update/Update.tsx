import React from "react";
import { Field } from "formik";
import get from "lodash/get";

import { Update as UpdateForm } from "modules/product/forms";
import { useSingle } from "modules/product/hooks";

import { Fields } from "components";
import { Button } from "components/Button";

interface IProps {
  handleSuccess: () => void;
  itemId: string | number;
}

const Update: React.FC<IProps> = ({ handleSuccess, itemId }) => {
  const { item } = useSingle({ productId: itemId });

  return (
    <UpdateForm
      id={itemId}
      data={{
        title: get(item, "title", ""),
        price: get(item, "price", 0),
        description: get(item, "description", ""),
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
    </UpdateForm>
  );
};

export default Update;
