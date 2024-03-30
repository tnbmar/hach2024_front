import Header from "./componenst/Header";
import S from "../../Home.module.scss";
import Players from "./componenst/Players";
import dynamic from "next/dynamic";
import { getTournament } from "@/rest/tournaments";
import { cookies } from "next/headers";
import { COOKIES } from "@/constants/cookies";
import { User } from "@/types";

type TourProps = {
  params: { id: number };
};

const Table = dynamic(() => import("./componenst/Table"), { ssr: false });

const Tour = async ({ params }: TourProps) => {
  const token = cookies().get(COOKIES.TOKEN)?.value;
  if (!token || !params.id) throw new Error("Отсутствуют данные для загрузки турнира");

  const { data } = await getTournament(+params.id, token);

  return (
    <>
      <Header info={data.info} />
      <div className={S.content}>
        <Table tours={data.mathes} users={data.info.users} />
        <Players users={data.info.users} />
      </div>
    </>
  );
};

export default Tour;
