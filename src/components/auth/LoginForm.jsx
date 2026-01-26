import '../../styles/auth/auth-form.css';
import { useState } from 'react';
import SocialLogin from './SocialLogin';
import { login } from '../../services/api';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState('');

    /* ======================
       VALIDACIONES
    ====================== */
    const validate = () => {
        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = 'El email o usuario es obligatorio';
        }

        if (!password) {
            newErrors.password = 'La contraseña es obligatoria';
        } else if (password.length < 6) {
            newErrors.password =
                'La contraseña debe tener al menos 6 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* ======================
       SUBMIT + API
    ====================== */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError('');

        const isValid = validate();
        if (!isValid) return;

        try {
            setLoading(true);

            const response = await login({
                emailOrUser: email, // CAMBIO CLAVE
                password,
            });

            console.log('Login exitoso:', response);

            // 🔜 Más adelante:
            // guardar usuario / redirigir
        } catch (error) {
            setApiError(error.message || 'Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="auth-form">
            <h2 className="auth-form__title">Iniciar sesión</h2>

            <form onSubmit={handleSubmit} noValidate>
                <input
                    className="auth-form__input"
                    type="text"
                    placeholder="Email o nombre de usuario"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                    <span className="auth-form__error">{errors.email}</span>
                )}

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
                        aria-label="Mostrar u ocultar contraseña"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                {errors.password && (
                    <span className="auth-form__error">
                        {errors.password}
                    </span>
                )}

                {apiError && (
                    <span className="auth-form__error">
                        {apiError}
                    </span>
                )}

                <a href="#" className="auth-form__forgot">
                    Olvidé mi contraseña
                </a>

                <button
                    className="auth-form__button"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Ingresando...' : 'Iniciar sesión'}
                </button>

                <SocialLogin />
            </form>
        </section>
    );
}

export default LoginForm;