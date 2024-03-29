import { Stats, User } from "@/types";
import { create } from "zustand";

type UserStore = {
  user: User | null;
  stats: Stats | null;

  setUser: (u: User) => void;
  setStats: (stats: Stats) => void;
};

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  stats: null,

  setUser: (u) => {
    set({ user: u });
  },
  setStats: (stats) => {
    set({ stats });
  },
}));
