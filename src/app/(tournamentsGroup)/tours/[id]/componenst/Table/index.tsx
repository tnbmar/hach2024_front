"use client";

import { Bracket, IRoundProps } from "react-brackets";
import S from "./Table.module.scss";
import { Tour } from "@/types";
import { useMemo } from "react";
import dayjs from "dayjs";

const Table = ({ tours }: { tours: Tour[] }) => {
  const formattedData = useMemo(() => {
    const rounds: IRoundProps[] = tours.map((tour, i) => ({
      title: `Tour ${i + 1}`,
      seeds: [
        ...tour.map((match) => ({
          id: match.id,
          date: dayjs(match.createdAt).format("DD.MM.YYYY HH:mm"),
          teams: [
            { name: `User #${match.first_player_id}` },
            { name: `User #${match.second_player_id}` },
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
