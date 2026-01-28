import { useAuth } from '../context/AuthContext';


function Profile() {
  const { userData } = useAuth();

  if (!userData) {
    return <p>No hay información del usuario</p>;
  }

  let survey = {};
  try {
    survey = userData.survey ? JSON.parse(userData.survey) : {};
  } catch (e) {
    console.error('Error parseando survey', e);
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h2>Mi Perfil</h2>

      <p><strong>Usuario:</strong> {userData.user}</p>
      <p><strong>Email:</strong> {userData.mail}</p>
      <p><strong>Teléfono:</strong> {userData.phone}</p>

      

      {Object.entries(survey).map(([key, value]) =>
        key !== 'fecha' && (
          <p key={key}>
            {key}: {value}
          </p>
        )
      )}
    </section>
  );
}

export default Profile;
