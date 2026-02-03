import mongoose from 'mongoose';

const SurveySchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    date: String,
    answers: Object,
  },
  { timestamps: true }
);

export default mongoose.models.Survey ||
  mongoose.model('Survey', SurveySchema);
