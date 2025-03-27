import { useTranslation } from "react-i18next";
import Title from "../components/atoms/Title";
import Characters from "../components/organisms/Characters";
import Footer from "../components/molecules/Footer";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title title={t("title")} subtitle={t("technologies")} />
      <Characters />
      <Footer />
    </>
  );
};

export default Home;
