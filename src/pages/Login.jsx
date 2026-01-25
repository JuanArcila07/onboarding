import LoginInfo from '../components/auth/LoginInfo';
import LoginForm from '../components/auth/LoginForm';

function Login({ onChangeView }) {
  return (
    <main style={{ display: 'flex' }}>
      <LoginInfo onChangeView={onChangeView} />
      <LoginForm />
    </main>
  );
}

export default Login;
