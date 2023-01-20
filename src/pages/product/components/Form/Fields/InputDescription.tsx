/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Form, Input } from "antd";
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

const InputDescription: React.FC<UseControllerProps<IFormValues>> = (props) => {
  const { field, fieldState } = useController(props);

  const { submitCount } = useFormState(props);

  const { hasFeedback, validationMessage, validationStatus } =
    useFieldValidation({ fieldState, submitCount });

  return (
    <Form.Item
      label={"label"}
      hasFeedback={hasFeedback}
      help={validationMessage}
      validateStatus={validationStatus}
    >
      <Input.TextArea size="middle" placeholder="placeholder" {...field} />
    </Form.Item>
  );
};

export default InputDescription;
