import Image from "next/image";
import S from "./PlayerCard.module.scss";

type PlayerCardProps = {
  name: string;
  avatar: string;
};

const PlayerCard = ({ avatar, name }: PlayerCardProps) => {
  return (
    <div className={S.card}>
      <Image src={avatar} alt={name} width={30} height={30} className={S.avatar} />
      <span className={S.name}>{name}</span>
    </div>
  );
};

export default PlayerCard;
