const API_URL = 'https://7wmbjxblzi.execute-api.us-east-1.amazonaws.com'; // sin slash final

const post = async (endpoint, data) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Respuesta error:', errorText);
    throw new Error(errorText || 'Error en la petición');
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

/**
 * Enviar encuesta
 */
export const sendSurvey = (data) => {
  return post('/survey', data);
};

export const getUser = async (user) => {
  const response = await fetch(`${API_URL}/user/${encodeURIComponent(user)}`);
  if (!response.ok) {
    throw new Error('No se pudo consultar el usuario');
  }
  return response.json();
};
