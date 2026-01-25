import { Link } from 'react-router-dom';
import '../../styles/auth/auth-info.css';

function LoginInfo() {
    return (
        <section className="auth-info">
            <img
                className="auth-info__logo"
                src="/logo.svg"
                alt="Logo"
            />

            <h1 className="auth-info__title">Bienvenido</h1>
            <p className="main-text">Ingresa y disfruta</p>

            <p className="auth-info__text">
                Si aún no tienes una cuenta puedes{' '}
                <Link to="/register" className="auth-info__link">
                    Registrarte aquí
                </Link>
            </p>

        </section>
    );
}

export default LoginInfo;
