import ServicesHero from "../../../components/ServiceHeroSection/ServicesHeroItem";
import servicesData from "../../ServicesData/ServicesData.json";
import "./EmotionalHero.css";
import { useLanguage } from "./../../LanguageContext/LanguageContext";

const EmotionalHero = () => {
  const servicioProblemasEmocionales = servicesData["problemas-emocionales"];
  const { language } = useLanguage();

  return (
    <div>
      <ServicesHero service={servicioProblemasEmocionales} />
      <div className="service-links">
        <a href="#">Ansiedad</a>
        <a href="#">Depresión</a>
        <a href="#">Apatía</a>
      </div>
    </div>
  );
};

export default EmotionalHero;
