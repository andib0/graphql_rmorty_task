import { FC } from "react";
import { useTranslation } from "react-i18next";

type TProps = {
  reset: () => void;
};

const ResetButton: FC<TProps> = ({ reset }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col mt-1">
      <label className="text-neutral-300 block text-sm font-extrabold">
        {t("reset")}:{" "}
      </label>
      <button
        onClick={reset}
        className="w-full p-2 rounded-lg bg-[#0a192f] border border-[#8892B0] text-neutral-300 hover:bg-[#112342] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        ↻
      </button>
    </div>
  );
};

export default ResetButton;
