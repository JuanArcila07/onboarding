const API_URL = 'https://7wmbjxblzi.execute-api.us-east-1.amazonaws.com';

/**
 * 🔎 Interpreta TODAS las respuestas del backend
 * - Normaliza el formato
 * - Maneja la "trampilla" del 400 con data válida
 * - Centraliza logs y errores
 */
const parseResponse = async (response) => {
  let payload = null;

  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  /**
   * 🪤 TRAMPILLA DEL BACKEND / ONBOARDING
   * El backend responde 400 pero incluye data válida
   */
  if (response.status === 400 && payload?.data) {
    console.info(`API: ${payload.message || 'Consulta Exitosa'}`);

    return {
      ok: true,
      message: payload.message || 'Consulta Exitosa',
      data: payload.data,
      status: 400, // lo dejamos explícito por trazabilidad
    };
  }

  /**
   * ❌ Error real
   */
  if (!response.ok) {
    throw new Error(payload?.message || 'Error en la petición');
  }

  /**
   * ✅ Respuesta correcta (200, 201, etc.)
   */
  if (payload?.message) {
    console.info(`API: ${payload.message}`);
  }

  return {
    ok: true,
    message: payload?.message || 'Consulta Exitosa',
    data: payload?.data ?? payload,
    status: response.status,
  };
};

/**
 * 🔁 Wrapper genérico POST
 */
const post = async (endpoint, body) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return parseResponse(response);
};

/**
 * 🔁 Wrapper genérico GET
 */
const get = async (endpoint) => {
  const response = await fetch(`${API_URL}${endpoint}`);
  return parseResponse(response);
};

// =======================
// AUTH
// =======================
export const login = (data) => post('/login', data);
export const register = (data) => post('/register', data);

// =======================
// SURVEY
// =======================
export const sendSurvey = (data) => post('/survey', data);

// =======================
// USERS
// =======================

// GET /user/:user
export const getUser = (user) =>
  get(`/user/${encodeURIComponent(user)}`);

// GET /
export const getAllUsers = () => get('/');
