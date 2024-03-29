import Badge from "@/ui/Badge";
import S from "./TournamentCard.module.scss";
import { Tournament } from "@/app/types";
import Image from "next/image";
import Button from "@/ui/Button";

type TournamentCardProps = {
  tournament: Tournament;
};

const MAX_MOCK_PLAYERS = 8;

const TournamentCard = ({ tournament }: TournamentCardProps) => {
  return (
    <div className={S.tournament}>
      <div className={S.leftWrap}>
        <Image
          src={tournament.avatar}
          alt={tournament.name}
          width={60}
          height={60}
          className={S.avatar}
        />
        <span className={S.username}>{tournament.name}</span>
      </div>

      <div className={S.rightWrap}>
        <div className={S.column}>
          <span className={S.columnTitle}>Cтатус</span>

          <Badge status={tournament.status}>{tournament.status}</Badge>
        </div>

        <div className={S.column}>
          <span className={S.columnTitle}>Количество игроков</span>

          <span className={S.players}>
            {tournament.players}/{MAX_MOCK_PLAYERS}
          </span>
        </div>

        <Button>Спонсировать</Button>
        <Button>Участвовать</Button>
      </div>
    </div>
  );
};

export default TournamentCard;
