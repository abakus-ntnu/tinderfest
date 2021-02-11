// TODO:
/*
Passord for å skrive i chat og/eller se stream?
hot or not
*/

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
const rateLimit = require("express-rate-limit");
const redisStore = require("rate-limit-redis");
const store =  new redisStore({
    redisURL: "redis://127.0.0.1:6379"
  })
const env = require("./env");

const apiLimiter = rateLimit({
  store,
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 7, // limit each IP to 7 requests per windowMs
  statusCode: 400,
  message: "rate limit exceeded. Please wait",
  perfix: "message",
});

app.use("/messages", apiLimiter);
app.use("/hot", apiLimiter);
app.use("/not", apiLimiter);
app.use(cors());
app.use(express.static(__dirname, ));
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

app.post("/hot", async(req, res) => {
  try {
    io.emit("hot");
    return res.sendStatus(200);

  } catch (error) {
    res.sendStatus(500);
    return console.log("error", error);

  } finally {
    console.log("Hot Posted");
  }
});

app.post("/not", async(req, res) => {
  try {
    io.emit("not");
    return res.sendStatus(200);

  } catch (error) {
    res.sendStatus(500);
    return console.log("error", error);

  } finally {
    console.log("Not Posted");
  }
});

/*
mongoose.connect(dbUrl, (err) => {
  console.log('mongodb connected',err);
})*/

server.listen(5000, () => {
  console.log("server is running on port", server.address().port);
});
