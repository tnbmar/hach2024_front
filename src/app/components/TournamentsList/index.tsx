"use client";

import { Suspense } from "react";
import CreateTournament from "../CreateTournament";
import Tournaments from "../Tournaments";
import S from "./TournamentsList.module.scss";
import Loader from "@/ui/Loader";
import { TournamentsListItem } from "@/types";

const TournamentsList = ({ list }: { list: TournamentsListItem[] }) => {
  return (
    <div className={S.wrap}>
      <div className={S.headerWrap}>
        <span className={S.title}>Турниры</span>
        <CreateTournament />
      </div>
      <Suspense fallback={<Loader />}>
        <Tournaments list={list} />
      </Suspense>
    </div>
  );
};

export default TournamentsList;
