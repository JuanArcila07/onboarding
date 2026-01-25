import '../../styles/auth/auth-form.css';
import { useState } from 'react';
import SocialLogin from './SocialLogin';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <section className="auth-form">
            <h2 className="auth-form__title">Iniciar sesión</h2>

            <form onSubmit={handleSubmit}>
                <input
                    className="auth-form__input"
                    type="text"
                    placeholder="Email o nombre de usuario"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="auth-form__password">
                    <input
                        className="auth-form__input"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="button"
                        className="auth-form__toggle"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        👁
                    </button>
                </div>

                <a href="#" className="auth-form__forgot">
                    Olvidé mi contraseña
                </a>

                <button className="auth-form__button" type="submit">
                    Iniciar sesión
                </button>

                <SocialLogin />
            </form>
        </section>
    );
}

export default LoginForm;
