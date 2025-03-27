import { useQuery } from "@apollo/client";
import { FC, useEffect, useState } from "react";
import { GET_CHARACTERS } from "../../graphql/queries/getCharacters";
import CharactersList from "../molecules/CharactersList";
import { TCharacter } from "../../utils/mainTypes";
import Filters from "../molecules/Filters";
import { useSortedCharacters } from "../../hooks/useSortedCharacters";
import { useCharacterFilters } from "../../stores/useCharacterFilters.store";

const Characters: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState<TCharacter[]>([]);
  const {
    statusFilter,
    speciesFilter,
    sortField,
    sortOrder,
    setSpeciesFilter,
    setStatusFilter,
  } = useCharacterFilters();

  const sortedCharacters = useSortedCharacters(
    characters,
    sortField,
    sortOrder
  );

  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: {
      page: currentPage,
      filter: {
        status: statusFilter !== "All" ? statusFilter : undefined,
        species: speciesFilter !== "All" ? speciesFilter : undefined,
      },
    },
  });

  //Filter Logic --------------------------
  const handleResetFilters = () => {
    setStatusFilter("All");
    setSpeciesFilter("All");
    setCurrentPage(1);
    setCharacters([]);
  };
  const handleChangedFilters = () => {
    setCurrentPage(1);
    setCharacters([]);
  };
  //Reset when filters change
  useEffect(() => {
    handleChangedFilters();
  }, [statusFilter, speciesFilter]);

  //Character Fetch Logic -----------------
  useEffect(() => {
    const hasData = data?.characters.results;
    if (hasData) {
      setCharacters([...characters, ...data.characters.results]);
    }
  }, [data]);

  const handleLoadMore = () => {
    const hasNext = data?.characters.info.next;
    const nextPage = currentPage + 1;
    if (hasNext) {
      fetchMore({
        variables: {
          page: nextPage,
        },
      });
      setCurrentPage(nextPage);
    }
  };

  return (
    <div className=" rounded-md p-4 w-full">
      <Filters reset={handleResetFilters} />
      <CharactersList
        characters={sortedCharacters}
        error={error}
        loading={loading}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default Characters;
