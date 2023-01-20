/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Form, InputNumber } from "antd";
import useFieldValidation from "hooks/useFieldValidation";
import {
  useController,
  UseControllerProps,
  useFormState,
} from "react-hook-form";

interface IFormValues {
  title: string;
  price: number;
  description: string;
}

const InputPrice: React.FC<UseControllerProps<IFormValues>> = (props) => {
  const { field, fieldState } = useController(props);

  const { submitCount } = useFormState(props);

  const { hasFeedback, validationMessage, validationStatus } =
    useFieldValidation({ fieldState, submitCount });

  return (
    <Form.Item
      label="label"
      hasFeedback={hasFeedback}
      help={validationMessage}
      validateStatus={validationStatus}
    >
      <InputNumber size="middle" placeholder="placeholder" {...field} />
    </Form.Item>
  );
};

export default InputPrice;
