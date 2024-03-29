import Image from "next/image";
import S from "./PlayerCard.module.scss";
import { User } from "@/types";

type PlayerCardProps = {
  user: User;
};

const PlayerCard = ({ user }: PlayerCardProps) => {
  return (
    <div className={S.card}>
      <Image
        src={"/images/default.webp"}
        alt={user.username}
        width={30}
        height={30}
        className={S.avatar}
      />
      <span className={S.name}>{user.username}</span>
    </div>
  );
};

export default PlayerCard;
