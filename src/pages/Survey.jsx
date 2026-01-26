import '../styles/survey/survey-layout.css';
import SurveyForm from '../components/survey/SurveyForm';
import Navbar from '../components/layout/Navbar';

function Survey() {
  return (
    <>
      <Navbar />

      <main className="survey-page">
        <SurveyForm />
      </main>
    </>
  );
}

export default Survey;
