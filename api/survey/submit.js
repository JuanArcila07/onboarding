import { withCors } from '../lib/cors.js';
import { connectDB } from '../lib/db.js';
import Survey from '../models/survey.js';
import User from '../models/user.js';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await connectDB();

  const { user, survey } = req.body;

  if (!user || !survey) {
    return res.status(400).json({ message: 'Datos incompletos' });
  }

  // 🔹 sigue guardando la encuesta
  await Survey.create({ user, survey });

  // 🔹 Y AHORA SÍ queda asociada al usuario
  await User.findOneAndUpdate(
    { user },
    {
      surveyCompleted: true,
      survey: survey,
    }
  );

  return res.status(200).json({
    message: 'Encuesta guardada',
  });
};

export default withCors(handler);
