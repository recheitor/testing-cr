import ServicesSymptoms from "../../ServiceSymptomsSection/ServiceSymptomsItem";
import servicesData from "../../ServicesData/ServicesData.json";

const EmotionalSymptoms = () => {
  const servicioProblemasEmocionales = servicesData["problemas-emocionales"];

  return (
    <div>
      <ServicesSymptoms service={servicioProblemasEmocionales} />
    </div>
  );
};

export default EmotionalSymptoms;
