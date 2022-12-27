/* eslint-disable react-hooks/exhaustive-deps */
import React, { PropsWithChildren, useMemo } from "react";
import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import { NotificationContext } from "providers/contexts";

interface IProps {
  placement?: NotificationPlacement;
  type: "info" | "error" | "success" | "warning";
  message: JSX.Element | string;
  description: JSX.Element | string;
}

const ReactNotificationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = ({
    type,
    placement = "topRight",
    message,
    description,
  }: IProps): void => {
    switch (type) {
      case "success":
        api.success({
          message,
          description,
          placement,
        });
        break;
      case "error":
        api.error({
          message,
          description,
          placement,
        });
        break;
      case "info":
        api.info({
          message,
          description,
          placement,
        });
        break;
      case "warning":
        api.warning({
          message,
          description,
          placement,
        });
        break;

      default:
        api.info({
          message,
          description,
          placement,
        });
        break;
    }
  };

  const contextValue = useMemo(() => ({ openNotification }), []);

  return (
    <NotificationContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export default ReactNotificationProvider;
