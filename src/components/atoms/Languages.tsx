import { FC } from "react";
import { useTranslation } from "react-i18next";

const Languages: FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  console.log("current lang", currentLang);

  const handleChange = (lang: string) => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  const isActive = (btnLng: string) => {
    return btnLng.toLowerCase() === currentLang
      ? "text-[#64FFDA]"
      : "text-[#CCD6F6]";
  };

  return (
    <div className="flex flex-row align-middle justify-center gap-10 mb-2">
      <button
        onClick={() => handleChange("en")}
        className={`border-1 border-[#64FFDA] pl-3.5 pr-3.5 pt-1.5 pb-1.5 rounded-xl  hover:bg-[#112240] active:text-[#64FFDA] ${isActive(
          "en"
        )}`}
      >
        EN
      </button>
      <button
        onClick={() => handleChange("de")}
        className={`border-1 border-[#64FFDA] pl-3.5 pr-3.5 pt-1.5 pb-1.5 rounded-xl  hover:bg-[#112240] active:text-[#64FFDA] ${isActive(
          "de"
        )}`}
      >
        DE
      </button>
      <button
        onClick={() => handleChange("it")}
        className={`border-1 border-[#64FFDA] pl-3.5 pr-3.5 pt-1.5 pb-1.5 rounded-xl  hover:bg-[#112240] active:text-[#64FFDA] ${isActive(
          "it"
        )}`}
      >
        IT
      </button>
    </div>
  );
};

export default Languages;
