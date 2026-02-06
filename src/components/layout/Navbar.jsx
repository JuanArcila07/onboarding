import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import '../../styles/layout/navbar.css';
import { useAuth } from '../../context/useAuth';

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { logout, userData } = useAuth();

  const handleLogout = () => {
    setOpen(false);
    logout();
    navigate('/login', { replace: true }); // <--- Esto evita volver atrás
  };

  if (!userData) return null;

  return (
    <header className="navbar">
      <img
        src={logo}
        alt="Compensar"
        className="navbar__logo"
        onClick={() => navigate('/survey')}
        style={{ cursor: 'pointer' }}
      />

      <div className="navbar__actions">
        <button
          className="navbar__icon"
          onClick={() => setOpen(!open)}
          aria-label="Menú de usuario"
        >
          <FaUserCircle size={24} />
        </button>

        {open && (
          <div className="navbar__dropdown">
            <button onClick={() => {
              setOpen(false);
              navigate('/profile');
            }}>
              Ver mi perfil
            </button>

            <button onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
