"use client";

import Button from "@/ui/Button";
import S from "./CreateRounament.module.scss";
import DialogModal from "@/ui/Dialog";
import { useState } from "react";
import Input from "@/ui/Input";
import { useForm } from "react-hook-form";
import Link from "next/link";

const CreateTournament = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm<{ name: string }>();

  return (
    <>
      <Link
        href={"https://api.tnbmar.ru/admin/resources/Tournament/actions/new"}
        target="_blank"
      >
        <Button className={S.createTournament} onClick={() => setOpen(true)}>
          Создать турнир +
        </Button>
      </Link>

      {/* <DialogModal open={open} onChangeOpen={setOpen} title="Создание турнира">
        <div className={S.content}>
          <Input {...register} placeholder="Название" />
          <Button>Создать</Button>
        </div>
      </DialogModal> */}
    </>
  );
};

export default CreateTournament;
