import '../../styles/auth/auth-form.css';
import { useState } from 'react';
import SocialLogin from './SocialLogin';
import { login } from '../../services/api';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Toast from '../ui/Toast';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

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
        setSuccessMessage('');

        const isValid = validate();
        if (!isValid) return;

        try {
            setLoading(true);

            const response = await login({
                emailOrUser: email, // 🔹 se mantiene igual
                password,
            });

            console.log('Login exitoso:', response);
            setSuccessMessage('Inicio de sesión exitoso. Bienvenido!'); // ✅ mensaje de éxito
        } catch (error) {
            const msg = error.message?.toLowerCase();

            if (msg.includes('contraseña incorrecta')) {
                setApiError('La contraseña ingresada no es válida. Intenta nuevamente.');
            } else if (msg.includes('usuario no registrado')) {
                setApiError('No encontramos tu usuario. Verifica los datos o regístrate.');
            } else {
                setApiError('No se pudo iniciar sesión. Por favor intenta más tarde.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="auth-form">
            <h2 className="auth-form__title">Iniciar sesión</h2>

            {/* ✅ Toast agregado */}
            <Toast
                message={apiError || successMessage}
                type={apiError ? 'error' : 'success'}
                onClose={() => {
                    setApiError('');
                    setSuccessMessage('');
                }}
            />

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
