import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // 🔄 cargar desde localStorage al refrescar
  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const login = (data) => {
    setUserData(data);
    localStorage.setItem('userData', JSON.stringify(data));
    localStorage.setItem('user', data.user); // 👈 mantiene compatibilidad
  };

  const logout = () => {
    setUserData(null);
    localStorage.removeItem('userData');
    localStorage.removeItem('user');
    localStorage.removeItem('userSurvey');
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
