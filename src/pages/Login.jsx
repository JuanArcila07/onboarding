import AuthLayout from '../components/auth/AuthLayout';
import LoginInfo from '../components/auth/LoginInfo';
import LoginForm from '../components/auth/LoginForm';

function Login() {
  return (
    <AuthLayout
      left={<LoginInfo />}
      center={
        <img
          src="/illustration.png"
          alt="Ilustración"
          className="auth-illustration"
        />
      }
      right={<LoginForm />}
    />
  );
}

export default Login;
