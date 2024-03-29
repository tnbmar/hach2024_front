import { Tournament, TournamentsListItem } from "@/types";
import TournamentCard from "../TournamentCard";
import S from "./Tournaments.module.scss";

const Tournaments = async ({ list }: { list: TournamentsListItem[] }) => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 10));

  return (
    <div className={S.list}>
      {list.map((elem) => (
        <TournamentCard key={elem.id} {...elem} />
      ))}
    </div>
  );
};

export default Tournaments;
