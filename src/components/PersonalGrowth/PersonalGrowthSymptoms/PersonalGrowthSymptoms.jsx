import ServicesSymptoms from "../../ServiceSymptomsSection/ServiceSymptomsItem";
import servicesData from "../../ServicesData/ServicesData.json";

const PersonalGrowthSymptoms = () => {
  const PersonalGrowthService = servicesData["crecimiento-personal"];

  return (
    <div>
      <ServicesSymptoms service={PersonalGrowthService} />
    </div>
  );
};

export default PersonalGrowthSymptoms;
