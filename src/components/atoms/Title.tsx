import { FC } from "react";

type TProps = {
  title: string;
  subtitle?: string;
};

const Title: FC<TProps> = ({ title, subtitle }) => {
  return (
    <div className="mt-12 mb-24">
      <div className="text-8xl font-bold text-center text-[#CCD6F6]">
        {title}
      </div>
      {subtitle && (
        <div className="text-md font-bold text-center  text-[#8892B0]">
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default Title;
