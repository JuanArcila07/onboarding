import { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { getUser } from '../services/api';
import '../styles/profile/profile.css';

function Profile() {
  const { userData } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await getUser(user);
        console.log(response.message);
        console.log('Usuario:', response.data);
        setProfileData(response.data);
      } catch (error) {
        console.error('Error consultando usuario:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const data = profileData || userData;

  if (loading) return <p className="profile__loading">Cargando perfil…</p>;
  if (!data) return <p className="profile__empty">No hay información del usuario</p>;

  /**
   * 🧠 PARSER DEFINITIVO Y A PRUEBA DE BACKEND ROTO
   */
  const parseSurvey = (raw) => {
    if (!raw) return {};

    let result = raw;

    for (let i = 0; i < 5; i++) {
      if (typeof result !== 'string') break;

      try {
        let cleaned = result.trim();

        if (
          (cleaned.startsWith('"') && cleaned.endsWith('"')) ||
          (cleaned.startsWith("'") && cleaned.endsWith("'"))
        ) {
          cleaned = cleaned.slice(1, -1);
        }

        cleaned = cleaned.replace(/\\"/g, '"');
        cleaned = cleaned.replace(/'/g, '"');

        result = JSON.parse(cleaned);
      } catch {
        return {};
      }
    }

    return typeof result === 'object' && result !== null ? result : {};
  };

  const survey = parseSurvey(data.survey);
  const surveyDate = survey.fecha; // ✅ SOLO ESTO SE AGREGA

  return (
    <div className="profile">
      <div className="profile__card">
        <h2 className="profile__title">Mi Perfil</h2>

        <div className="profile__section">
          <div className="profile__row">
            <span>Usuario</span>
            <strong>{data.user}</strong>
          </div>

          <div className="profile__row">
            <span>Email</span>
            <strong>{data.email}</strong>
          </div>

          <div className="profile__row">
            <span>Teléfono</span>
            <strong>{data.phone}</strong>
          </div>
        </div>

        <div className="profile__section">
          <h3 className="profile__subtitle">Encuesta</h3>

          {Object.keys(survey).length === 0 && (
            <p className="profile__empty">No hay encuesta registrada</p>
          )}

          {/* ✅ FECHA MOSTRADA */}
          {surveyDate && (
            <div className="profile__row">
              <span>Fecha de la encuesta</span>
              <strong>{surveyDate}</strong>
            </div>
          )}

          {Object.entries(survey).map(([key, value]) =>
            key !== 'fecha' ? (
              <div className="profile__row" key={key}>
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
