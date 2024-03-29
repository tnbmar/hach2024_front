import { forwardRef } from "react";
import S from "./Button.module.scss";
import classNames from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, InputProps>(
  ({ children, type, className, ...props }, ref) => {
    return (
      <button ref={ref} {...props} className={classNames(S.buttonWrap, className)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
