import { FC } from "react";
import { useTranslation } from "react-i18next";

type TProps = {
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
};

const CardDescription: FC<TProps> = ({
  name,
  status,
  species,
  gender,
  origin,
}) => {
  const { t } = useTranslation();

  const checkAlive = (status: string) => {
    if (status.toLowerCase().includes("alive")) {
      return <>🟢 {t("alive")}</>;
    } else if (status.toLowerCase().includes("dead")) {
      return <>🔴 {t("dead")}</>;
    } else {
      return <>⚫️ {t("unknown")}</>;
    }
  };

  const checkAliveColor = (status: string) => {
    if (status.toLowerCase().includes("alive")) {
      return "text-[#64FFDA]";
    } else if (status.toLowerCase().includes("dead")) {
      return "text-red-500";
    } else {
      return "text-neutral-300";
    }
  };

  return (
    <div className="m-4  h-full space-y-4">
      {/*  */}
      <div>
        <div className={`text-2xl font-black ${checkAliveColor(status)} `}>
          {name}
        </div>
        <div className="text-md text-neutral-100">
          {checkAlive(status)} - {species}
        </div>
      </div>

      {/*  */}
      <div>
        <div className="text-sm text-neutral-300">{t("gender")} :</div>
        <div className="text-lg text-neutral-100">{gender}</div>
      </div>

      {/*  */}
      <div>
        <div className="text-sm text-neutral-300">{t("origin")} :</div>
        <div className="text-lg text-neutral-100">{origin}</div>
      </div>
    </div>
  );
};

export default CardDescription;
