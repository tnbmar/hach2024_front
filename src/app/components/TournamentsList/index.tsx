"use client";

import { Suspense } from "react";
import CreateTournament from "../CreateTournament";
import Tournaments from "../Tournaments";
import S from "./TournamentsList.module.scss";
import PacmanLoader from "react-spinners/PacmanLoader";
import Loader from "@/ui/Loader";

const TournamentsList = () => {
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
