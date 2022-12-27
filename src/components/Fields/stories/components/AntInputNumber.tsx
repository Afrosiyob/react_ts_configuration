/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { InputNumber } from "antd";

interface IProps {
  size: "small" | "middle" | "large";
  placeholder?: string;
}

const AntInputNumber: React.FC<IProps> = (props): JSX.Element => {
  const { placeholder = "Placeholder", size = "middle", ...rest } = props;

  return <InputNumber size={size} placeholder={placeholder} {...rest} />;
};

export default AntInputNumber;
