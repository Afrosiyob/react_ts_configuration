/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { ReactElement } from "react";
import cx from "classnames";

import classes from "./scss/style.module.scss";

interface IProps {
  title?: string | boolean;
  required: boolean;
  link?: string;
  icon?: JSX.Element;
  error: boolean;
  position?: "horizontal" | "vertical" | undefined;
  children: JSX.Element;
}

const Label = ({
  title,
  required,
  link,
  icon,
  error,
  position = "vertical",
  children,
}: IProps): ReactElement => (
  <div
    className={cx(
      classes.wrapper,
      classes[`wrapper--position-${position}`],
      error && classes["wrapper--error"]
    )}
    data-testid="ANT_LABEL_ID"
  >
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <div className={classes.title}>
          {required && <span>*</span>}
          {title}
        </div>
      </div>
      {(!!link || !!icon) && (
        <div className={classes.headerRight}>
          {!(link?.length === 0) && <div className={classes.link}>{link}</div>}
          {!!icon && <div className={classes.icon}>{icon}</div>}
        </div>
      )}
    </div>
    {!!children && <div className={classes.content}>{children}</div>}
  </div>
);

export default Label;
