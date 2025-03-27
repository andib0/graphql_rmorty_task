import { FC } from "react";

type TProps = {
  imgsrc: string;
};

const CardImg: FC<TProps> = ({ imgsrc }) => {
  return (
    <div className={`w-1/3 h-full bg-neutral-900`}>
      <img src={imgsrc} alt="card-img" className="w-full h-full object-cover" />
    </div>
  );
};

export default CardImg;
