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
        <secction>
            <h2>Iniciar Sesión</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email o nombre de usuario"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    👁
                </button>

                <a href="#">Olvidé mi contraseña</a>

                <button type="submit">Iniciar Sesión</button>

                <SocialLogin />
            </form>
        </secction>
    );
}

export default LoginForm;