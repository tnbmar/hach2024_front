"use client";

import Input from "@/ui/Input";
import S from "./Form.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/ui/Button";
import { AuthDto, RegDto } from "@/types";
import { signUp } from "@/rest/auth";
import { useAccount } from "wagmi";

const Form = () => {
  const [type, setType] = useState<"login" | "signup">("login");
  const { isConnected, address } = useAccount();

  const { register, handleSubmit } = useForm<AuthDto>({
    defaultValues: { username: "", password: "" },
  });

  const { register: registerSignUp, handleSubmit: handleSubmitRegister } =
    useForm<RegDto>({
      defaultValues: { username: "", password: "", address: "", email: "" },
    });

  const handleLogin = handleSubmit((data) => {
    console.log(data);
  });

  const handleRegister = handleSubmitRegister(async (data) => {
    signUp(data);
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
          <Input placeholder="Логин" {...register("username")} />
          <Input placeholder="Пароль" {...register("password")} />
          <Button onClick={handleLogin}>Войти</Button>
        </>
      )}

      {type === "signup" && (
        <>
          <Input placeholder="Логин" {...register("username")} />
          <Input placeholder="Пароль" {...register("password")} />
          {/* @ts-ignore */}
          <w3m-button />
          <Button onClick={handleRegister} disabled={!isConnected}>
            Войти
          </Button>
        </>
      )}
    </form>
  );
};

export default Form;
