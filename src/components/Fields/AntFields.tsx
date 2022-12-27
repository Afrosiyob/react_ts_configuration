/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React from "react";
import {
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import get from "lodash/get";

import { Label } from "components/Label";

import classes from "./scss/style.module.scss";

const FormItem = Form.Item;
const { Option } = Select;

interface IProps {
  field: { name: string };
  form: {
    touched: object;
    errors: object;
    setFieldValue: (name: string, value: unknown) => void;
    setFieldTouched: (name: string, value: unknown) => void;
  };
  required: boolean;
  hasFeedback: boolean;
  labelLayout?: "vertical" | "horizontal";
  label: string | boolean;
  selectOptions: [];
  onChange: (value: unknown) => void;
  submitCount: number;
  type: string;
  // [propName: string]: any;
}

const CreateAntField =
  (AntComponent: React.ElementType) =>
  ({
    field,
    form,
    required,
    hasFeedback,
    labelLayout,
    label,
    selectOptions,
    onChange,
    submitCount,
    type,
    ...props
  }: IProps) => {
    const touched = get(form, `touched.${field.name}`, false);
    const submitted = submitCount > 0;
    const hasError = get(form, `errors.${field.name}`, false);
    const submittedError = hasError && submitted;
    const touchedError = hasError && touched;

    const onInputChange = ({
      target: { value },
    }: {
      target: {
        value: unknown;
      };
    }): void => {
      onChange?.(value);
      form.setFieldValue(field.name, value);
    };
    const onFieldChange = (value: unknown): void => {
      onChange?.(value);
      form.setFieldValue(field.name, value);
    };

    const onBlur = (): void => form.setFieldTouched(field.name, true);

    return (
      <div className={classes.wrapper}>
        <FormItem
          label={false}
          hasFeedback={
            !!((hasFeedback && submitted) || (hasFeedback && touched))
          }
          help={submittedError || touchedError ? hasError : false}
          validateStatus={submittedError || touchedError ? "error" : "success"}
        >
          <Label
            error={false}
            {...{ required, title: label }}
            position={labelLayout}
          >
            <AntComponent
              {...field}
              {...props}
              onBlur={onBlur}
              onChange={type?.length > 0 ? onInputChange : onFieldChange}
            >
              {selectOptions?.map((name: string) => (
                <Option key={name}>{name}</Option>
              ))}
            </AntComponent>
          </Label>
        </FormItem>
      </div>
    );
  };

export const AntSelect = CreateAntField(Select);
export const AntDatePicker = CreateAntField(DatePicker);
export const AntRangePicker = CreateAntField(DatePicker.RangePicker);
export const AntInput = CreateAntField(Input);
export const AntTextarea = CreateAntField(Input.TextArea);
export const AntPassword = CreateAntField(Input.Password);
export const AntSwitch = CreateAntField(Switch);
export const AntRadio = CreateAntField(Radio);
export const AntCheckbox = CreateAntField(Checkbox);
export const AntInputNumber = CreateAntField(InputNumber);
export const AntTreeSelect = CreateAntField(TreeSelect);
