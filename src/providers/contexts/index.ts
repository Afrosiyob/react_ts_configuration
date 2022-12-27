import { createContext } from "react";
import { NotificationPlacement } from "antd/es/notification/interface";

interface IValues {
  placement?: NotificationPlacement;
  type: "info" | "error" | "success" | "warning";
  message: JSX.Element | string;
  description: JSX.Element | string;
}

interface IProps {
  openNotification: (props: IValues) => void;
}

export const NotificationContext = createContext<IProps | null>(null);
