import PlayerCard from "../PlayerCard";
import S from "./Players.module.scss";

const MOCKS = [
  {
    avatar: "/images/default.webp",
    name: "user",
  },
  {
    avatar: "/images/default.webp",
    name: "user1",
  },
  {
    avatar: "/images/default.webp",
    name: "user2",
  },
  {
    avatar: "/images/default.webp",
    name: "user3",
  },
  {
    avatar: "/images/default.webp",
    name: "user4",
  },
  {
    avatar: "/images/default.webp",
    name: "user5",
  },
  {
    avatar: "/images/default.webp",
    name: "user6",
  },
];

const Players = () => {
  return (
    <div className={S.wrap}>
      <div>
        <span className={S.title}>Участники</span>
      </div>

      <div className={S.list}>
        {MOCKS.map((mock) => (
          <PlayerCard key={mock.name} {...mock} />
        ))}
      </div>
    </div>
  );
};

export default Players;
