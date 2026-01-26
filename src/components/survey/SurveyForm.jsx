import SurveyDate from './SurveyDate';
import SurveyQuestion from './SurveyQuestion';

function SurveyForm() {
  return (
    <section className="survey-card">
      <header className="survey-header">
        <h2>Encuesta</h2>
        <button className="survey-close">✕</button>
      </header>

      <SurveyDate />

      <SurveyQuestion number={1} />
      <SurveyQuestion number={2} />
      <SurveyQuestion number={3} />
      <SurveyQuestion number={4} />

      <div className="survey-actions">
        <button className="survey-submit">
            Enviar
        </button>
    </div>
    </section>
  );
}

export default SurveyForm;
