const express = require('express');
const app = express();
const port = 4444;
const password = require('./dbPassword');
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require('cors');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://dbUser:${password}@cluster0-upzqg.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);
app.use(cors());

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get('/expenses', function (req, res) {
  client.connect(err => {
    const collection = client.db("scoop").collection("expenses");
    collection.find({}).toArray((err, data) => {
      res.send(data)
    });
    // perform actions on the collection object
    // client.close();
  });
});