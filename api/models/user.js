import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    surveyCompleted: {
      type: Boolean,
      default: false,
    },
    survey: {
      type: String, // 👈 aquí va el string que ya usas
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model('User', UserSchema);
