/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from "react";
import { Input } from "antd";

interface IProps {
  size: "small" | "middle" | "large";
  rows: number;
  placeholder?: string;
  // onChange?: (event: React.ChangeEventHandler<HTMLTextAreaElement>) => void;
}

function AntInputTextArea({
  placeholder = "Placeholder",
  size = "middle",
  rows = 4,
  // onChange,
  ...props
}: IProps): ReactElement {
  return (
    <Input.TextArea
      rows={rows}
      size={size}
      placeholder={placeholder}
      // onChange={onChange}
      {...props}
    />
  );
}

export default AntInputTextArea;
