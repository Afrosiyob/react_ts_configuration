/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from "react";
import { Input } from "antd";

import { Types } from "components/Fields";

function AntInput({
  placeholder = "Placeholder",
  size = "middle",
  ...props
}: Types.IInput): ReactElement {
  return <Input size={size} placeholder={placeholder} {...props} />;
}

export default AntInput;
