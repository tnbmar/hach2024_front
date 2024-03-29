import { User } from "@/types";
import PlayerCard from "../PlayerCard";
import S from "./Players.module.scss";

const Players = ({ users }: { users: User[] }) => {
  return (
    <div className={S.wrap}>
      <div>
        <span className={S.title}>Участники</span>
      </div>

      <div className={S.list}>
        {users.map((user) => (
          <PlayerCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Players;
