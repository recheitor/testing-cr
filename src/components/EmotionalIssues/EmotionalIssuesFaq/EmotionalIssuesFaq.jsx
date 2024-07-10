import FaqSection from "../../FaqSection/FaqSection";
import "./EmotionalIssuesFaq.css";

const EmotionalFaq = () => {
  const serviceName = "Faq-problemas-emocionales";

  return (
    <div className="emotional-fq">
      <div className="emotional-faq-section">
        <h2>Preguntas frecuentes</h2>
        <FaqSection serviceName={serviceName} />
      </div>
    </div>
  );
};

export default EmotionalFaq;
