import AuthLayout from '../components/auth/AuthLayout';
import LoginInfo from '../components/auth/LoginInfo';
import LoginForm from '../components/auth/LoginForm';
import useIllustrationScroll from '../hooks/useIllustrationScroll';


function Login() {
   useIllustrationScroll();

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
