import { FaFacebookF, FaApple, FaGoogle } from 'react-icons/fa';

function SocialLogin() {
  return (
    <div>
      <p>o continúa con</p>

      <div>
        <button aria-label="Login con Facebook">
          <FaFacebookF />
        </button>

        <button aria-label="Login con Apple">
          <FaApple />
        </button>

        <button aria-label="Login con Google">
          <FaGoogle />
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
