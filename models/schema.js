import mongoose from 'mongoose';

delete mongoose.connection.models['Agenda'];
delete mongoose.connection.models['Info'];

const AgendaSchema = new mongoose.Schema(
  {
    time: { type: String },
    description: { type: String },
  },
  { autoCreate: true }
);
export const Agenda = mongoose.model('Agenda', AgendaSchema);

const InfoSchema = new mongoose.Schema(
  {
    type: String,
  },
  { autoCreate: true }
);
export const Info = mongoose.model('Info', InfoSchema);
