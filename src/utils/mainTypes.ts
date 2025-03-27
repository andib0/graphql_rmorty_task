import { ApolloError } from "@apollo/client";
import { Key } from "react";

export type TCharacter = {
  id: Key | null | undefined;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  image: string;
};

export type CharactersListProps = {
  characters: TCharacter[];
  error?: ApolloError | undefined;
  loading?: boolean | undefined;
  handleLoadMore: () => void;
};

export type TStatuses = "All" | "Alive" | "Dead" | "Unknown" | undefined;

export type TSpecies =
  | "All"
  | "Human"
  | "Alien"
  | "Humanoid"
  | "Robot"
  | "Mythological Creature"
  | "Cronenberg"
  | "Animal"
  | undefined;

export type TGender = "All" | "Male" | "Female" | "Hermaphrodite" | undefined;

export type SortField = "name" | "origin";
export type SortOrder = "asc" | "desc" | null;
