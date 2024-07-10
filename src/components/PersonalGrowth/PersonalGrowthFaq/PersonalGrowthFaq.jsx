import FaqSection from "../../FaqSection/FaqSection";
import "./PersonalGrowthFaq.css";

const PersonalGrowthFaq = () => {
  const serviceName = "Faq-crecimiento-personal";

  return (
    <div className="personal-growth-fq">
      <div className="personal-growth-faq-section">
        <h2>Preguntas frecuentes</h2>
        <FaqSection serviceName={serviceName} />
      </div>
    </div>
  );
};

export default PersonalGrowthFaq;
