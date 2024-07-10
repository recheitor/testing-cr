import FaqSection from "../../FaqSection/FaqSection";
import "./AddictionsFaq.css";

const AddictionsFaq = () => {
  const serviceName = "Faq-adicciones";

  return (
    <div className="adicitons-fq">
      <div className="adictions-faq-section">
        <h2>Preguntas frecuentes</h2>
        <FaqSection serviceName={serviceName} />
      </div>
    </div>
  );
};

export default AddictionsFaq;
