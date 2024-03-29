import { Tournament, TournamentsListItem } from "@/types";
import TournamentCard from "../TournamentCard";
import S from "./Tournaments.module.scss";
import { useTournamentsStore } from "@/stores/tournaments";

const Tournaments = () => {
  const { tournaments } = useTournamentsStore();

  return (
    <>
      {tournaments !== null && (
        <div className={S.list}>
          {tournaments.map((elem) => (
            <TournamentCard key={elem.id} {...elem} />
          ))}
        </div>
      )}
    </>
  );
};

export default Tournaments;
