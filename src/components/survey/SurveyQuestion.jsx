function SurveyQuestion({ number, value, onChange, disabled }) {
  return (
    <div className="survey-question">
      <p className="survey-question__title">
        Pregunta {number}
      </p>
      <div className="survey-options">
        {['A', 'B', 'C', 'D'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name={`q${number}`}
              value={option}
              checked={value === option}
              onChange={() => onChange(number, option)}
              required
              disabled={disabled}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default SurveyQuestion;
