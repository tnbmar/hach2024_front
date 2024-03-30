"use client";

import { Bracket, IRoundProps } from "react-brackets";
import S from "./Table.module.scss";
import { Tour, User } from "@/types";
import { useMemo } from "react";
import dayjs from "dayjs";

const Table = ({ tours, users }: { tours: Tour[]; users: User[] }) => {
  const getUsername = (id: number) => {
    const currentUser = users.find((elem) => elem.id === id);
    if (currentUser) {
      return currentUser.username;
    } else {
      return `User ${id}`;
    }
  };

  const formattedData = useMemo(() => {
    const rounds: IRoundProps[] = tours.map((tour, i) => ({
      title: `Tour ${i + 1}`,
      seeds: [
        ...tour.map((match) => ({
          id: match.id,
          date: dayjs(match.createdAt).format("DD.MM.YYYY HH:mm"),
          teams: [
            {
              name: `${getUsername(match.first_player_id)}${"ㅤㅤㅤ"}${
                match.first_score
              }`,
            },
            {
              name: `${getUsername(match.second_player_id)}${"ㅤㅤㅤ"}${
                match.second_score
              }`,
            },
          ],
        })),
      ],
    }));

    return rounds;
  }, [tours]);

  return (
    <div className={S.wrap}>
      <div>
        <span className={S.title}>Турнирная сетка</span>
      </div>

      <div className={S.tableWrapper}>
        <Bracket rounds={formattedData} bracketClassName={S.scrolledContent} />
      </div>
    </div>
  );
};

export default Table;
