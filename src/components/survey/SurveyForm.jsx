import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SurveyQuestion from './SurveyQuestion';
import { sendSurvey } from '../../services/api';
import Modal from '../ui/Modal';
import '../../styles/survey/survey-form.css';

function SurveyForm() {
  const [date, setDate] = useState('');
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [alreadyAnswered, setAlreadyAnswered] = useState(false);
  const navigate = useNavigate();

  // Al montar, revisa si ya respondió (usando localStorage)
  useEffect(() => {
    const surveyStr = localStorage.getItem('userSurvey');
    if (surveyStr) {
      const surveyObj = parseSurveyString(surveyStr);
      setDate(surveyObj['fecha'] || '');
      setAnswers({
        1: surveyObj['Pregunta 1'],
        2: surveyObj['Pregunta 2'],
        3: surveyObj['Pregunta 3'],
        4: surveyObj['Pregunta 4'],
      });
      setAlreadyAnswered(true);
    }
  }, []);

  // Función para parsear el string de la API
  function parseSurveyString(str) {
    try {
      // Limpia las barras y comillas para que sea JSON válido
      const clean = str
        .replace(/\\+/g, '') // quita barras invertidas
        .replace(/'/g, '"'); // comillas simples a dobles
      return JSON.parse(clean);
    } catch {
      return {};
    }
  }

  // Maneja el cambio de fecha
  const handleDateChange = (e) => setDate(e.target.value);

  // Maneja el cambio de respuesta
  const handleAnswerChange = (number, value) => {
    setAnswers((prev) => ({ ...prev, [number]: value }));
  };

  // Envía la encuesta
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Valida que todas las preguntas tengan respuesta y que se haya seleccionado una fecha
    if (!date || !answers[1] || !answers[2] || !answers[3] || !answers[4]) {
      setMessage('Por favor responde todas las preguntas y selecciona la fecha.');
      setLoading(false);
      return;
    }

    // Construye el string de respuestas como pide la API
    const surveyString = `{'fecha':'${date}','Pregunta 1':'${answers[1]}','Pregunta 2':'${answers[2]}','Pregunta 3':'${answers[3]}','Pregunta 4':'${answers[4]}'}`;

    const user = localStorage.getItem('user');

    try {
      const response = await sendSurvey({
        user: user || 'usuario',
        survey: surveyString,
      });
      console.log('Respuesta de la API:', response); // <-- Agrega esta línea
      setShowModal(true); // Mostrar el modal de éxito
      localStorage.setItem('userSurvey', surveyString);
      setAlreadyAnswered(true);
    } catch (err) {
      console.error(err);
      setMessage('Error al enviar la encuesta');
    } finally {
      setLoading(false);
    }
  };

  // Cerrar sesión y redirigir al login
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userSurvey');
    navigate('/login');
  };

  return (
    <section className="survey-card">
      <header className="survey-header">
        <h2>Encuesta</h2>
        <button className="survey-close" onClick={handleLogout}>✕</button>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="survey-field">
          <label>Fecha</label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            required
            disabled={alreadyAnswered}
          />
        </div>

        {[1, 2, 3, 4].map((n) => (
          <SurveyQuestion
            key={n}
            number={n}
            value={answers[n] || ''}
            onChange={handleAnswerChange}
            disabled={alreadyAnswered}
          />
        ))}

        <div className="survey-actions">
          <button
            className="survey-submit"
            type="submit"
            disabled={loading || alreadyAnswered}
          >
            {alreadyAnswered
              ? 'Ya enviaste tus respuestas'
              : loading
              ? 'Enviando...'
              : 'Enviar'}
          </button>
        </div>
        {message && <div>{message}</div>}
      </form>

      <Modal open={showModal} onClose={handleLogout}>
        <div style={{ marginBottom: 16 }}>
          <span style={{ fontSize: 48, color: '#4caf50' }}>✔️</span>
        </div>
        <h3>Tus respuestas se han guardado de manera correcta</h3>
      </Modal>
    </section>
  );
}

export default SurveyForm;
