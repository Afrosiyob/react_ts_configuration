export interface IButton {
  children: JSX.Element | string;
  size?: "small" | "large" | "middle";
  icon?: JSX.Element;
  className?: string;
  type?: "primary" | "dashed" | "text" | "link";
  htmlType?: "submit" | "reset" | "submit";
  disabled?: boolean;
  href?: string;
  danger?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}
