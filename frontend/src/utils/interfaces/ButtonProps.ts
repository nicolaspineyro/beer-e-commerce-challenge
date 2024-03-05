import { ReactElement } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  disabled?: boolean;
  variant: "primary" | "secondary" | "chip";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  children?: string | ReactElement;
  className?: string;
}

export default ButtonProps;
