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
