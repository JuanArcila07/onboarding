const API_URL = 'https://7wmbjxblzi.execute-api.us-east-1.amazonaws.com';

/**
 * Función base para peticiones POST
 * Centraliza fetch y manejo de errores
 */
const post = async (endpoint, data) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error en la petición');
  }

  return response.json();
};

/**
 * Login
 */
export const login = (data) => {
  return post('/login', data);
};

/**
 * Registro
 */
export const register = (data) => {
  return post('/register', data);
};
