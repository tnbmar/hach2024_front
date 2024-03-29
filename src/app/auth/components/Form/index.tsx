"use client";

import Input from "@/ui/Input";
import S from "./Form.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/ui/Button";

type AuthDto = {
  login: string;
  password: string;
};

const Form = () => {
  const [type, setType] = useState<"login" | "signup">("login");

  const { register, handleSubmit } = useForm<AuthDto>({
    defaultValues: { login: "", password: "" },
  });

  const handleLogin = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className={S.formWrapper} onSubmit={(e) => e.preventDefault()}>
      <Image width={154} height={40} alt="logo" src={"/icons/logo_full.svg"} />
      <div className={S.linkWrap}>
        <button
          className={classNames(S.link, { [S.active]: type === "login" })}
          onClick={() => setType("login")}
        >
          Авторизация
        </button>
        <button
          className={classNames(S.link, { [S.active]: type === "signup" })}
          onClick={() => setType("signup")}
        >
          Регистрация
        </button>
      </div>

      {type === "login" && (
        <>
          <Input placeholder="Логин" {...register("login")} />
          <Input placeholder="Пароль" {...register("password")} />
          <Button onClick={handleLogin}>Войти</Button>
        </>
      )}
    </form>
  );
};

export default Form;
