import { withCors } from '../lib/cors.js';
import { connectDB } from '../lib/db.js';
import User from '../models/user.js';
import { comparePassword } from '../lib/auth.js';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  await connectDB();

  const { emailOrUser, password } = req.body;

  if (!emailOrUser || !password) {
    return res.status(400).json({ message: 'Datos incompletos' });
  }

  const user = await User.findOne({
    $or: [{ email: emailOrUser }, { user: emailOrUser }],
  });

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  if (!comparePassword(password, user.password)) {
    return res.status(401).json({ message: 'Contraseña no válida' });
  }

  return res.status(200).json({
    message: 'Login exitoso',
    data: {
      user: user.user,
      email: user.email,
      phone: user.phone,
      survey: user.survey,
      surveyCompleted: user.surveyCompleted,
    },
  });
};

export default withCors(handler);
