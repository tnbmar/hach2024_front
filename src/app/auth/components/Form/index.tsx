"use client";

import Input from "@/ui/Input";
import S from "./Form.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/ui/Button";
import { AuthDto, RegDto } from "@/types";
import { signIn, signUp } from "@/rest/auth";
import { useAccount } from "wagmi";
import jsCookie from "js-cookie";
import { COOKIES } from "@/constants/cookies";
import { useRouter } from "next/navigation";
import { URLS } from "@/constants/urls";

const Form = () => {
  const [type, setType] = useState<"login" | "signup">("login");
  const { isConnected, address } = useAccount();
  const router = useRouter();

  const { register, handleSubmit } = useForm<AuthDto>({
    defaultValues: { username: "", password: "" },
  });

  const { register: registerSignUp, handleSubmit: handleSubmitRegister } =
    useForm<RegDto>({
      defaultValues: { username: "", password: "", address: "", email: "" },
    });

  const handleLogin = handleSubmit(async (data) => {
    const { data: authRes } = await signIn(data);
    jsCookie.set(COOKIES.TOKEN, authRes.token);
    router.push(URLS.MAIN);
  });

  const handleRegister = handleSubmitRegister(async (data) => {
    try {
      if (!address) throw new Error("Кошелек не подключен");
      data.address = address;
      const { data: regRes } = await signUp(data);
      jsCookie.set(COOKIES.TOKEN, regRes.token);
      router.push(URLS.MAIN);
    } catch (e) {
      console.error(e);
    }
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
          <Input placeholder="Пароль" {...register("password")} type="password" />
          <Button onClick={handleLogin}>Войти</Button>
        </>
      )}

      {type === "signup" && (
        <>
          <Input placeholder="Почта" {...registerSignUp("email")} />
          <Input placeholder="Логин" {...registerSignUp("username")} />
          <Input placeholder="Пароль" type="password" {...registerSignUp("password")} />

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
