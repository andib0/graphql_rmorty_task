import { create } from "zustand";
import { TSpecies, TStatuses, SortField, SortOrder } from "../utils/mainTypes";

interface CharacterFilterState {
  statusFilter: TStatuses;
  speciesFilter: TSpecies;
  sortField: SortField | null;
  sortOrder: SortOrder | null;

  setStatusFilter: (status: TStatuses) => void;
  setSpeciesFilter: (species: TSpecies) => void;
  setSortField: (field: SortField | null) => void;
  setSortOrder: (order: SortOrder | null) => void;
}

export const useCharacterFilters = create<CharacterFilterState>((set) => ({
  statusFilter: "All",
  speciesFilter: "All",
  sortField: null,
  sortOrder: null,

  setStatusFilter: (status) => set({ statusFilter: status }),
  setSpeciesFilter: (species) => set({ speciesFilter: species }),
  setSortField: (field) => set({ sortField: field }),
  setSortOrder: (order) => set({ sortOrder: order }),
}));
