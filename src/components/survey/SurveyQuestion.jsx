function SurveyQuestion({ number }) {
  return (
    <div className="survey-question">
      <p className="survey-question__title">
        Pregunta {number}
      </p>

      <div className="survey-options">
        <label>
          <input type="radio" name={`q${number}`} />
          A
        </label>

        <label>
          <input type="radio" name={`q${number}`} />
          B
        </label>

        <label>
          <input type="radio" name={`q${number}`} />
          C
        </label>

        <label>
          <input type="radio" name={`q${number}`} />
          D
        </label>
      </div>
    </div>
  );
}

export default SurveyQuestion;
