import FaqSection from "../../FaqSection/FaqSection";
import "./CoupleRelationshipsFaq.css";

const CoupleRelationshipsFaq = () => {
  const serviceName = "Faq-relaciones-de-pareja";

  return (
    <div className="coupleRelationships-fq">
      <div className="coupleRelationships-faq-section">
        <h2>Preguntas frecuentes</h2>
        <FaqSection serviceName={serviceName} />
      </div>
    </div>
  );
};

export default CoupleRelationshipsFaq;
