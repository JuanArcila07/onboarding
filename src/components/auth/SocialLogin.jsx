import '../../styles/auth/social-login.css';
import { FaFacebookF, FaApple, FaGoogle } from 'react-icons/fa';

function SocialLogin() {
  return (
    <div className="social-login">
      <p className="social-login__text">o continúa con</p>

      <div className="social-login__buttons">
        <button
          type="button"
          className="social-login__btn facebook"
          aria-label="Login con Facebook"
        >
          <FaFacebookF />
        </button>

        <button
          type="button"
          className="social-login__btn apple"
          aria-label="Login con Apple"
        >
          <FaApple />
        </button>

        <button
          type="button"
          className="social-login__btn google"
          aria-label="Login con Google"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
