function RegisterInfo({ onChangeView }) {
    return (
        <section>
            <img src="/logo.svg" alt="Logo" />

            <h1>Regístrate</h1>
            <p>Te invitamos a crear tu cuenta</p>

            <p>
                ¿Ya tienes una cuenta?{' '}
                <button
                    type="button"
                    onClick={() => onChangeView('login')}
                    style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
                >
                    Inicia sesión aquí
                </button>
            </p>

            <img src="/illustration.png" alt="Ilustración" />
        </section>
    );
}

export default RegisterInfo;
