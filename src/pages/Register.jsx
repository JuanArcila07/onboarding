import AuthLayout from '../components/auth/AuthLayout';
import RegisterInfo from '../components/auth/RegisterInfo';
import RegisterForm from '../components/auth/RegisterForm';

function Register() {
  return (
    <AuthLayout
      left={<RegisterInfo />}
      center={
        <img
          src="/illustration.png"
          alt="Ilustración"
          className="auth-illustration"
        />
      }
      right={<RegisterForm />}
    />
  );
}

export default Register;
