import { FC, useRef } from "react";
import Card from "./Card";
import { CharactersListProps, TCharacter } from "../../utils/mainTypes";
import Loading from "../../pages/Loading";

const CharactersList: FC<CharactersListProps> = ({
  characters,
  error,
  loading,
  handleLoadMore,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollElement = scrollRef.current;

  scrollElement?.addEventListener("scroll", () => {
    if (
      scrollElement?.scrollHeight - scrollElement?.scrollTop ===
      scrollElement?.clientHeight
    ) {
      console.log("handleLoadMore");
      handleLoadMore();
    }
  });

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="flex w-fit h-[820px] overflow-hidden mx-auto p-8 rounded-xl border border-[#8892B0] bg-gradient-to-t from-[#112342] to-[#081427]">
      <div className="h-full overflow-y-auto " ref={scrollRef}>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4 place-items-center ml-4 mr-4">
          {characters.map((character: TCharacter) => (
            <Card
              key={character.id}
              id={`${character.id}`}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name}
              image={character.image}
            />
          ))}
          {loading && <Loading />}
        </div>
      </div>
    </div>
  );
};

export default CharactersList;
