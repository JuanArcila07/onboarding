import '../../styles/auth/auth-form.css';
import { useState } from 'react';
import SocialLogin from './SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { register } from '../../services/api';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState('');

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validate = () => {
        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = 'El email es obligatorio';
        } else if (!validateEmail(email)) {
            newErrors.email = 'El email no tiene un formato válido';
        }

        if (!user.trim()) {
            newErrors.user = 'El nombre de usuario es obligatorio';
        }

        if (!phone.trim()) {
            newErrors.phone = 'El número de celular es obligatorio';
        } else if (!/^\d+$/.test(phone)) {
            newErrors.phone = 'El número de celular solo debe contener números';
        }

        if (!password) {
            newErrors.password = 'La contraseña es obligatoria';
        } else if (password.length < 6) {
            newErrors.password =
                'La contraseña debe tener al menos 6 caracteres';
        }

        if (!confirmPassword) {
            newErrors.confirmPassword =
                'Debes confirmar la contraseña';
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword =
                'Las contraseñas no coinciden';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validate();
        if (!isValid) return;

        setLoading(true);
        setApiError('');

        try {
            const data = {
                email,   // CAMBIO CLAVE
                user,
                phone,
                password,
            };
            console.log('Datos enviados al backend:', data);

            const response = await register(data);

            console.log('Registro exitoso:', response);

            // En el siguiente feature:
            // - redirigir al login
            // - mostrar mensaje de éxito
        } catch (error) {
            setApiError(error.message || 'Error al registrarse');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="auth-form">
            <h2 className="auth-form__title">Registro</h2>

            <form onSubmit={handleSubmit} noValidate>
                <input
                    className="auth-form__input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                    <span className="auth-form__error">{errors.email}</span>
                )}

                <input
                    className="auth-form__input"
                    type="text"
                    placeholder="Nombre de usuario"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                {errors.user && (
                    <span className="auth-form__error">
                        {errors.user}
                    </span>
                )}

                <input
                    className="auth-form__input"
                    type="tel"
                    placeholder="Número de celular"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && (
                    <span className="auth-form__error">{errors.phone}</span>
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
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                {errors.password && (
                    <span className="auth-form__error">
                        {errors.password}
                    </span>
                )}

                <div className="auth-form__password">
                    <input
                        className="auth-form__input"
                        type={
                            showConfirmPassword ? 'text' : 'password'
                        }
                        placeholder="Confirmar contraseña"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                    />
                    <button
                        type="button"
                        className="auth-form__toggle"
                        onClick={() =>
                            setShowConfirmPassword(
                                !showConfirmPassword
                            )
                        }
                    >
                        {showConfirmPassword ? (
                            <FaEyeSlash />
                        ) : (
                            <FaEye />
                        )}
                    </button>
                </div>
                {errors.confirmPassword && (
                    <span className="auth-form__error">
                        {errors.confirmPassword}
                    </span>
                )}

                {apiError && (
                    <div className="auth-form__api-error">
                        {apiError}
                    </div>
                )}

                <button
                    className="auth-form__button"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Registrando...' : 'Regístrate'}
                </button>

                <SocialLogin />
            </form>
        </section>
    );
}

export default RegisterForm;