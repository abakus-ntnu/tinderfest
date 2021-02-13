import mongoose from "mongoose";

import {
    Agenda,
    Lines
} from "../../../models/schema.js";

const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const dbname = "Tinderfest";

//export const url = `mongodb+srv://${username}:${password}@cluster.au8e8.mongodb.net/${dbname}?retryWrites=true&w=majority`;
export const url = 'mongodb://localhost/Tinderfest'

export default async function handler(_, res) {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  // Get all the state we need for the page
   const agenda = await Agenda.find({});
   const lines = await Lines.find({});

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  /*
  res.end(
    JSON.stringify({
        agenda,
        lines,
    })
  );
  */

   res.end(JSON.stringify({ 
      agenda: [
       {time: "18.00", title: "event1", description: "dette er en ting som skal skje"}, 
       {time: "13.00", title: "event3", description: "dette er en annen ting som skal skje"},
       {time: "17.00", title: "event2", description: "blablabla"},
       {time: "20.00", title: "event4", description: "hei ho"},
     ],
     lines: ["gherifj<OJFAJO", "JFOEJOFWJF", "jorroikgekfmandkf"],
 }));
 
}