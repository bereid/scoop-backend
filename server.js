const express = require('express');
const app = express();
const port = 4444;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:scoop_dbUser@cluster0-upzqg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get('/', function (req, res) {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});