import { FC } from "react";
import CardDescription from "../atoms/CardDescription";
import CardImg from "../atoms/CardImg";

type TProps = {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  image: string;
};

const Card: FC<TProps> = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
}) => {
  return (
    <div
      className="flex flex-row space-around w-128 h-64  bg-[#112240] hover:bg-[#1d3154]   rounded-xl overflow-hidden"
      key={id}
    >
      <CardImg imgsrc={image} />
      <CardDescription
        name={name}
        status={status}
        species={species}
        gender={gender}
        origin={origin}
      />
    </div>
  );
};

export default Card;
