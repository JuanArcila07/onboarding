import { withCors } from '../lib/cors.js';
import { connectDB } from '../lib/db.js';
import User from '../models/user.js';

const handler = async (req, res) => {
  const { user } = req.query;

  await connectDB();

  const foundUser = await User.findOne({ user }).select('-password');

  if (!foundUser) {
    return res.status(404).json({ message: 'No encontrado' });
  }

  return res.status(200).json({
    message: 'Usuario encontrado',
    data: foundUser,
  });
};

export default withCors(handler);
