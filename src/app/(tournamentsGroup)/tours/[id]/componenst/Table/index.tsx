"use client";

import { Bracket, IRoundProps } from "react-brackets";
import S from "./Table.module.scss";

const rounds: IRoundProps[] = [
  {
    title: "Round one",
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: "Team A" }, { name: "Team B" }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: "Team C" }, { name: "Team D" }],
      },
    ],
  },
  {
    title: "Round one",
    seeds: [
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: "Team A" }, { name: "Team C" }],
      },
    ],
  },
];

const Table = () => {
  return (
    <div className={S.wrap}>
      <div>
        <span className={S.title}>Турнирная сетка</span>
      </div>

      <div>
        <Bracket rounds={rounds} />
      </div>
    </div>
  );
};

export default Table;
