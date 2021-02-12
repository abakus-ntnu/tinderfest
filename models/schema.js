import mongoose from "mongoose";

delete mongoose.connection.models["Agenda"];
delete mongoose.connection.models["Lines"];

const AgendaSchema = new mongoose.Schema(
    {
        time: { type: String },
        description: { type: String },
    },
    { autoCreate: true }
);
export const Agenda = mongoose.model("Agenda", AgendaSchema);

const LinesSchema = new mongoose.Schema(
    {
        type: String
    },
    { autoCreate: true }
);
export const Lines = mongoose.model("Lines", LinesSchema);
