import { Link } from 'react-router-dom';
import '../../styles/auth/auth-info.css';

function LoginInfo() {
  return (
    <section className="auth-info">
      <h1 className="auth-info__title">Bienvenido</h1>

      <p className="auth-info__subtitle">
        Ingresa y disfruta
      </p>

      <p className="auth-info__text">
        Si aún no tienes una cuenta <br />
        puedes{' '}
        <Link to="/register" className="auth-info__link">
          Registrarte aquí
        </Link>
      </p>
    </section>
  );
}

export default LoginInfo;
