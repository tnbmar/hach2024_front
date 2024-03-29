import { forwardRef } from "react";
import S from "./Button.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, InputProps>(
  ({ children, type, ...props }, ref) => {
    return (
      <button ref={ref} {...props} className={S.buttonWrap}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
