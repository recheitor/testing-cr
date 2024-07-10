import FaqSection from "../../FaqSection/FaqSection";
import "./EatingDisordersFaq.css";

const EatingDisordersFaq = () => {
  const serviceName = "Faq-trastornos-de-conducta-alimentaria";

  return (
    <div className="eating-disorders-fq">
      <div className="eating-faq-section">
        <h2>Preguntas frecuentes</h2>
        <FaqSection serviceName={serviceName} />
      </div>
    </div>
  );
};

export default EatingDisordersFaq;
