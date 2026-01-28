import '../../styles/auth/auth-layout.css';
import logo from '../../assets/logo.svg';

function AuthLayout({ left, center, right }) {
  return (
    <div className="auth-container">
      {/* LOGO */}
      <img src={logo} alt="Compensar" className="auth-logo" />

      <div className="auth-left">{left}</div>
      <div className="auth-center">{center}</div>
      <div className="auth-right">{right}</div>
    </div>
  );
}

export default AuthLayout;
