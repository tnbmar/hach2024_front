export type Tournament = {
  name: string;
  avatar: string;
  status: "wait";
  players: number;
  id: number;
};

export type AuthDto = {
  username: string;
  password: string;
};

export type RegDto = {
  username: string;
  password: string;
  email: string;
  address: string;
};

export type User = {
  id: number;
  username: string;
  address: string;
  email: string;
};

export type ResResponse = {
  token: string;
  user: User;
};

export enum TournamentEnum {
  FUTURE = "Предстоит",
  NOW = "В процессе",
  FINISHED = "Завершен",
}

export type TournamentResList = {
  list: TournamentsListItem[];
};

export type TournamentsListItem = {
  id: number;
  name: string;
  icon: string;
  createdAt: string;
  status: "FUTURE" | "NOW" | "FINISHED";
  winner_id: number | null;
  users: User[];
  winner: User | null;
};
export type Stats = {
  match_count: number;
  rating_percent: null | number;
  win_count: number;
};
