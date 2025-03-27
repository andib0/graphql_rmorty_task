import { useMemo } from "react";
import { TCharacter } from "../utils/mainTypes";

type SortField = "name" | "origin" | null;
type SortOrder = "asc" | "desc" | null;

export const useSortedCharacters = (
  characters: TCharacter[],
  sortField: SortField,
  sortOrder: SortOrder
): TCharacter[] => {
  return useMemo(() => {
    if (!sortField || !sortOrder) return characters;

    const getValue = (character: TCharacter) => {
      return sortField === "origin" ? character.origin.name : character.name;
    };

    const sortedCharacters = [...characters].sort((a, b) => {
      const aValue = getValue(a);
      const bValue = getValue(b);

      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });

    return sortedCharacters;
  }, [characters, sortField, sortOrder]);
};
