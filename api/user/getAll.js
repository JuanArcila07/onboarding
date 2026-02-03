import { withCors } from '../lib/cors.js';
import { connectDB } from '../lib/db.js';
import User from '../models/user.js';

const handler = async (req, res) => {
  await connectDB();
  const users = await User.find();

  return res.status(200).json({
    message: 'Usuarios obtenidos',
    data: users,
  });
};

export default withCors(handler);
