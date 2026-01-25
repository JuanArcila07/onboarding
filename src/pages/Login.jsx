import '../styles/auth/auth-layout.css';
import LoginInfo from '../components/auth/LoginInfo';
import LoginForm from '../components/auth/LoginForm';

function Login({ onChangeView }) {
  return (
    <main className="auth-container">
      <div className="auth-left">
        <LoginInfo onChangeView={onChangeView} />
      </div>

      <div className="auth-center">
        <img
          src="/illustration.png"
          alt="Ilustración"
          className="auth-illustration"
        />
      </div>

      <div className="auth-right">
        <LoginForm />
      </div>
    </main>
  );
}

export default Login;
