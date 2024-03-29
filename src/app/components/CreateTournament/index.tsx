"use client";

import Button from "@/ui/Button";
import S from "./CreateRounament.module.scss";
import DialogModal from "@/ui/Dialog";
import { useState } from "react";
import Input from "@/ui/Input";
import { useForm } from "react-hook-form";

const CreateTournament = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm<{ name: string }>();

  return (
    <>
      <Button className={S.createTournament} onClick={() => setOpen(true)}>
        Создать турнир +
      </Button>

      <DialogModal open={open} onChangeOpen={setOpen} title="Создание турнира">
        <div className={S.content}>
          <Input {...register} placeholder="Название" />
          <Button>Создать</Button>
        </div>
      </DialogModal>
    </>
  );
};

export default CreateTournament;
