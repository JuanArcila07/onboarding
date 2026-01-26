import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import '../../styles/layout/navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setOpen(false);
    navigate('/login');
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <img
        src={logo}
        alt="Compensar"
        className="navbar__logo"
      />

      {/* Actions */}
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
