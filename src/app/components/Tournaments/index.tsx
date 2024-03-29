import { Tournament } from "@/app/types";
import TournamentCard from "../TournamentCard";
import S from "./Tournaments.module.scss";

const MOCKS: Tournament[] = [
  { avatar: "/images/default.webp", name: "User", status: "wait", players: 6 },
  { avatar: "/images/default.webp", name: "User1", status: "wait", players: 6 },
  { avatar: "/images/default.webp", name: "User2", status: "wait", players: 6 },
  { avatar: "/images/default.webp", name: "User3", status: "wait", players: 6 },
  { avatar: "/images/default.webp", name: "User4", status: "wait", players: 6 },
];

const Tournaments = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 10));

  return (
    <div className={S.list}>
      {MOCKS.map((mock) => (
        <TournamentCard key={mock.name} tournament={mock} />
      ))}
    </div>
  );
};

export default Tournaments;
