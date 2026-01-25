import LoginInfo from '../components/auth/LoginInfo';
import LoginForm from '../components/auth/LoginForm';

function Login() {
    return (
        <main style= {{ display: 'flex'}}>
            <LoginInfo />
            <LoginForm />
        </main>
    );
}

export default Login