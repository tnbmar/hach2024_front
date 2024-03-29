"use client";

import Badge from "@/ui/Badge";
import S from "./TournamentCard.module.scss";
import { Tournament, TournamentsListItem, TournamentEnum } from "@/types";
import Image from "next/image";
import Button from "@/ui/Button";
import Link from "next/link";
import { URLS } from "@/constants/urls";
import SponsorButton from "../SponsorButton";
import { useMemo } from "react";

type TournamentCardProps = {
  tournament: Tournament;
};

const MAX_MOCK_PLAYERS = 8;

const TournamentCard = ({
  icon,
  id,
  name,
  status,
  winner_id,
  users,
}: TournamentsListItem) => {
  const validateStatus = useMemo(() => {
    switch (status) {
      case "FUTURE":
        return "wait";
      case "FINISHED":
        return "closed";
      case "NOW":
        return "progress";
    }
  }, [status]);

  return (
    <Link href={URLS.TOURNAMENT(id)}>
      <div className={S.tournament}>
        <div className={S.leftWrap}>
          <Image src={icon} alt={name} width={60} height={60} className={S.avatar} />
          <span className={S.username}>{name}</span>
        </div>

        <div className={S.rightWrap}>
          <div className={S.column}>
            <span className={S.columnTitle}>Cтатус</span>

            <Badge status={validateStatus}>{TournamentEnum[status]}</Badge>
          </div>

          <div className={S.column}>
            <span className={S.columnTitle}>Количество игроков</span>

            <span className={S.players}>
              {users.length}/{MAX_MOCK_PLAYERS}
            </span>
          </div>
        </div>

        <div className={S.actions}>
          <SponsorButton />
          {}
          <Button>Участвовать</Button>
        </div>
      </div>
    </Link>
  );
};

export default TournamentCard;
