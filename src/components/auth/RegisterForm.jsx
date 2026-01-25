import '../../styles/auth/auth-form.css';
import { useState } from 'react';
import SocialLogin from './SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            email,
            username,
            phone,
            password,
            confirmPassword,
        });
    };

    return (
        <section className="auth-form">
            <h2 className="auth-form__title">Registro</h2>

            <form onSubmit={handleSubmit}>
                <input
                    className="auth-form__input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="auth-form__input"
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className="auth-form__input"
                    type="tel"
                    placeholder="Número de celular"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <div className="auth-form__password">
                    <input
                        className="auth-form__input"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirmar contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button
                        type="button"
                        className="auth-form__toggle"
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                    >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <button className="auth-form__button" type="submit">
                    Regístrate
                </button>

                <SocialLogin />
            </form>
        </section>
    );
}

export default RegisterForm;
