import { Link } from 'react-router-dom';
import '../../styles/auth/auth-info.css';

function RegisterInfo() {
  return (
    <section className="auth-info">
      <h1 className="auth-info__title">Registrate</h1>

      <p className="auth-info__subtitle">
        Te invitamos a crear tu cuenta
      </p>

      <p className="auth-info__text">
        si ya tienes una cuenta<br />
        puedes{' '}
        <Link to="/login" className="auth-info__link">
          iniciar sesión aquí !
        </Link>
      </p>
    </section>
  );
}

export default RegisterInfo;
