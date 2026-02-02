import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // 🔄 cargar desde localStorage al refrescar
  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  /**
   * 👉 SOLO para cuando el usuario inicia sesión
   */
  const login = (data) => {
    setUserData(data);
    localStorage.setItem('userData', JSON.stringify(data));
    localStorage.setItem('user', data.user);
  };

  /**
   * 👉 Para actualizar datos SIN volver a loguear
   */
  const updateUser = (data) => {
    setUserData(data);
    localStorage.setItem('userData', JSON.stringify(data));
  };

  const logout = () => {
    setUserData(null);
    localStorage.removeItem('userData');
    localStorage.removeItem('user');
    localStorage.removeItem('userSurvey');
  };

  return (
    <AuthContext.Provider
      value={{ userData, login, updateUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
