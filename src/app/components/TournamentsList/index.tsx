"use client";

import { Suspense, useEffect } from "react";
import CreateTournament from "../CreateTournament";
import Tournaments from "../Tournaments";
import S from "./TournamentsList.module.scss";
import Loader from "@/ui/Loader";
import { TournamentsListItem } from "@/types";
import { useTournamentsStore } from "@/stores/tournaments";

const TournamentsList = ({ list }: { list: TournamentsListItem[] }) => {
  const { setTournament } = useTournamentsStore();

  useEffect(() => {
    setTournament(list);
  }, [list]);
  return (
    <div className={S.wrap}>
      <div className={S.headerWrap}>
        <span className={S.title}>Турниры</span>
        <CreateTournament />
      </div>
      <Suspense fallback={<Loader />}>
        <Tournaments />
      </Suspense>
    </div>
  );
};

export default TournamentsList;
