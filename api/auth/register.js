import { withCors } from '../lib/cors.js';
import { connectDB } from '../lib/db.js';
import User from '../models/user.js';
import { hashPassword } from '../lib/auth.js';

const handler = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Método no permitido' });
    }

    await connectDB();

    // 🔐 BLINDAJE
    if (!req.body) {
      return res.status(400).json({ message: 'Body vacío' });
    }

    const { email, user, phone, password } = req.body;

    if (!email || !user || !password) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: 'Usuario ya existe' });
    }

    const hashedPassword = hashPassword(password);

    const newUser = await User.create({
      email,
      user,
      phone,
      password: hashedPassword,
      surveyCompleted: false,
    });

    return res.status(201).json({
      message: 'Usuario registrado correctamente',
      data: newUser,
    });
  } catch (error) {
    console.error('REGISTER ERROR:', error);

    return res.status(500).json({
      message: 'Error interno del servidor',
      error: error.message,
    });
  }
};

export default withCors(handler);
