"use client";

import Header from "./componenst/Header";
import S from "../../Home.module.scss";
import Players from "./componenst/Players";
import dynamic from "next/dynamic";
import { getTournament } from "@/rest/tournaments";
import { useEffect, useState } from "react";
import { TournamentReceive } from "@/types";
import Loader from "@/ui/Loader";

type TourProps = {
  params: { id: number };
};

const Table = dynamic(() => import("./componenst/Table"), { ssr: false });

const Tour = ({ params }: TourProps) => {
  if (!params.id) throw new Error("Отсутствуют данные для загрузки турнира");
  const [data, setData] = useState<TournamentReceive | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTournament(+params.id);
      setData(data);
    };

    const interval = setInterval(() => {
      fetchData();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [params.id]);

  if (!data) return <Loader />;

  return (
    <>
      <Header info={data.info} />
      <div className={S.content}>
        <Table tours={data.mathes} />
        <Players users={data.info.users} />
      </div>
    </>
  );
};

export default Tour;
