import mongoose from 'mongoose';

import { Agenda, Info } from '../../../models/schema.js';

const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const dbname = 'tinderfest';

export const url = `mongodb+srv://${username}:${password}@tinderfest.zrvrz.mongodb.net/${dbname}?retryWrites=true&w=majority`;

export default async function handler(_, res) {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  // Get all the state we need for the page
  const agenda = await Agenda.find({});
  const info = await Info.find({});

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  res.end(
    JSON.stringify({
      agenda,
      info,
    })
  );
}
