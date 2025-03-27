import { FC } from "react";
import { useTranslation } from "react-i18next";
import Languages from "../atoms/Languages";

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="m-12">
      <Languages />
      <p className="text-center text-neutral-300 text-sm">
        &copy; 2025 {t("footer")}
      </p>
    </footer>
  );
};

export default Footer;
