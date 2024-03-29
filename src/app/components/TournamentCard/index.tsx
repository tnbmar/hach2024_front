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
import { useTournamentsStore } from "@/stores/tournaments";
import { useUserStore } from "@/stores/user";
import { getTournaments, signInTournament } from "@/rest/tournaments";

type TournamentCardProps = {
  tournament: Tournament;
};

const MAX_MOCK_PLAYERS = 8;

const TournamentCard = ({ icon, id, name, status, users }: TournamentsListItem) => {
  const { setTournament } = useTournamentsStore();
  const { user } = useUserStore();

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

  const validateMyStatus = useMemo(() => {
    if (user) {
      return users.find((elem) => elem.id === user.id);
    }
  }, [user]);

  const acceptTournament = async () => {
    const { data } = await signInTournament(id);
    updateData();
  };

  const updateData = async () => {
    const {
      data: { list },
    } = await getTournaments();
    setTournament(list);
  };

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
          {validateMyStatus ? (
            <div className={S.accept}>
              <Image src={"/icons/access.svg"} width={20} height={20} alt="" />
              <span className={S.columnTitle}>Вы учавствуете</span>
            </div>
          ) : (
            <Button onClick={acceptTournament}>Участвовать</Button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default TournamentCard;
