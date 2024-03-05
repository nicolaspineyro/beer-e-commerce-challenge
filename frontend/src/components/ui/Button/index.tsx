import ButtonProps from "src/utils/interfaces/ButtonProps";

const Button = (props: ButtonProps) => {
  const { disabled, onClick, onFocus, variant, children, className, ...rest } =
    props;

  const buttonClass = `button ${
    disabled ? "button-disabled" : "button-enabled"
  } button-${variant}`;

  return (
    <button
      className={`${buttonClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
      onFocus={onFocus}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
