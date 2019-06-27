const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const urgentDb = [];
const modDb = [];
const notUrgentDb = [];
const accomplishmentsDb = [];


app.get("/urgent", (req, res) => {
  res.send(urgentDb);
});

app.get("/moderatelyUrgent", (req, res) => {
    res.send(modDb);
})

app.get("/notUrgent", (req, res) => {
    res.send(notUrgentDb);
})

app.post("/urgent", (req, res) => {
  const urgentTask = req.body;
  urgentDb.push(urgentTask);
  res.send(urgentDb);
});

app.post("/moderatelyUrgent", (req, res) => {
    const modTask = req.body;
    modDb.push(modTask);
    res.send(modDb);
})

app.post("/notUrgent", (req, res) => {
    const notUrgentTask = req.body;
    notUrgentDb.push(notUrgentTask);
    res.send(notUrgentDb);
})

app.post("/accomplishments", (req, res) => {
  const accomplishedTask = req.body;
  accomplishmentsDb.push(accomplishedTask);
  res.send(accomplishmentsDb);
})


const port = 8080;
app.listen(port, () => console.log(`Listening on port: ${port}`));
