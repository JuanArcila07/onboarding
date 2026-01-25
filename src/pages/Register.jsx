import RegisterInfo from '../components/auth/RegisterInfo';
import RegisterForm from '../components/auth/RegisterForm';

function Register({ onChangeView }) {
  return (
    <main style={{ display: 'flex' }}>
      <RegisterInfo onChangeView={onChangeView} />
      <RegisterForm />
    </main>
  );
}

export default Register;
