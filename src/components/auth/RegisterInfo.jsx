import '../../styles/auth/auth-info.css';

function RegisterInfo({ onChangeView }) {
    return (
        <section className="auth-info">
            <img
                className="auth-info__logo"
                src="/logo.svg"
                alt="Logo"
            />

            <h1 className="auth-info__title">Regístrate</h1>
            <p className="auth-info__subtitle">
                Te invitamos a crear tu cuenta
            </p>

            <p className="auth-info__text">
                ¿Ya tienes una cuenta?{' '}
                <button
                    type="button"
                    className="auth-info__link"
                    onClick={() => onChangeView('login')}
                >
                    Inicia sesión aquí
                </button>
            </p>

        </section>
    );
}

export default RegisterInfo;
