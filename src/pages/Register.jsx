import '../styles/auth/auth-layout.css';
import RegisterInfo from '../components/auth/RegisterInfo';
import RegisterForm from '../components/auth/RegisterForm';

function Register({ onChangeView }) {
  return (
    <main className="auth-container">
      <div className="auth-left">
        <RegisterInfo onChangeView={onChangeView} />
      </div>

      <div className="auth-center">
        <img
          src="/illustration.png"
          alt="Ilustración"
          className="auth-illustration"
        />
      </div>

      <div className="auth-right">
        <RegisterForm />
      </div>
    </main>
  );
}

export default Register;
