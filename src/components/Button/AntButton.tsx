/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from "react";
import { Button } from "antd";

import { Types } from ".";

function AntButton({
  onClick,
  children = "Button",
  ...props
}: Types.IButton): ReactElement {
  return (
    <Button data-testid="ANT_BUTTON_ID" onClick={onClick} {...props}>
      {children}
    </Button>
  );
}

export default AntButton;
