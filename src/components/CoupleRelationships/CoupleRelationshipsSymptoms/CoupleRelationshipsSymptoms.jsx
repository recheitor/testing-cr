import ServicesSymptoms from "../../ServiceSymptomsSection/ServiceSymptomsItem";
import servicesData from "../../ServicesData/ServicesData.json";

const CoupleRelationshipsSymptons = () => {
  const CoupleRelationshipsService = servicesData["relaciones-de-pareja"];

  return (
    <div>
      <ServicesSymptoms service={CoupleRelationshipsService} />
    </div>
  );
};

export default CoupleRelationshipsSymptons;
