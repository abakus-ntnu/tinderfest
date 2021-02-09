// TODO:
/*
Passord for å skrive i chat og/eller se stream?
hot or not
*/

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 7, // limit each IP to 7 requests per windowMs
});

app.use("/messages", apiLimiter);
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const Message = mongoose.model('Message',{
//   name : String,
//   message : String
// })

// const dbUrl = ''
// app.get('/messages', (req, res) => {
//   Message.find({},(err, messages)=> {
//     res.send(messages);
//   })
// })

// app.get('/messages/:user', (req, res) => {
//   const user = req.params.user
//   Message.find({name: user},(err, messages)=> {
//     res.send(messages);
//   })
// })

app.post("/messages", async (req, res) => {
  try {
    //console.log(req)
    //const message = new Message(req.body);

    //const savedMessage = await message.save()
    // console.log('saved');

    /*const censored = await Message.findOne({message:'badword'});
      if(censored)
        await Message.remove({_id: censored.id})
      else
    */
   
    if (req.body.name && req.body.text) {
      io.emit("message", req.body);
      return res.sendStatus(200);
    }
    return res.sendStatus(400);
  } catch (error) {
    res.sendStatus(500);
    return console.log("error", error);
  } finally {
    console.log("Message Posted");
  }
});

io.on("connection", (socket) => {
  console.log("a user is connected");

  socket.on("hot", () => {
    io.emit("hot");
  });
});

/*
mongoose.connect(dbUrl, (err) => {
  console.log('mongodb connected',err);
})*/

server.listen(5000, () => {
  console.log("server is running on port", server.address().port);
});
