import { forwardRef } from "react";

import S from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} className={S.inputDefault} {...props} />;
});

Input.displayName = "Input";

export default Input;
