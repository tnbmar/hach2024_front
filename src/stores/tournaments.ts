import { TournamentsListItem } from "@/types";
import { create } from "zustand";

type TournamentsStore = {
  tournaments: TournamentsListItem[] | null;
  setTournament: (value: TournamentsListItem[]) => void;
};

export const useTournamentsStore = create<TournamentsStore>((set, get) => ({
  tournaments: null,
  setTournament: (value) => {
    set({ tournaments: value });
  },
}));
