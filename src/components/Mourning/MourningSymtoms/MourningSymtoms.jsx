import ServicesSymptoms from "../../ServiceSymptomsSection/ServiceSymptomsItem";
import servicesData from "../../ServicesData/ServicesData.json";

const MourningSymptons = () => {
  const MourningService = servicesData["duelo"];

  return (
    <div>
      <ServicesSymptoms service={MourningService} />
    </div>
  );
};

export default MourningSymptons;
