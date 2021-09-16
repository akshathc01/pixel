const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;


const uri = "mongodb+srv://pixel:1cFRy2MoV8owyrMU@cluster0.58py8.mongodb.net/pixelImageUploader?retryWrites=true&w=majority";

console.log('Database is working')

const app = express()

app.use(express.json());

app.use(cors());


const port = 3002


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const imagesCollection = client.db("pixelImageUploader").collection("addingImage");
  const images = client.db("pixelImageUploader").collection("images");
  const privateCollection = client.db("pixelImageUploader").collection("privateImages");
  const communityCollection = client.db("pixelImageUploader").collection("communityImg");
  console.log('Database Connected')

  app.post('/addPrivate', (req, res) => {
    privateCollection.insertOne(req.body)
      .then(result => {
        console.log("result", result)
        res.send(result.insertedCount > 0)
      })
  })

  app.post('/addCommunity', (req, res) => {
    communityCollection.insertOne(req.body)
      .then(result => {
        console.log("result", result)
        res.send(result.insertedCount > 0)
      })
  })
  app.get('/communityImages', (req, res) => {
    communityCollection.find({})
      .toArray((err, services) => {
        res.send(services)
      })
  })

  app.get('/getCommunity', (req, res) => {
    communityCollection.find({ email: req.query.email })
      .toArray((err, services) => {
        res.send(services)
      })
  })
  app.get('/getPrivate', (req, res) => {
    privateCollection.find({ email: req.query.email })
      .toArray((err, services) => {
        res.send(services)
      })
  })

  app.delete('/deletePublic/:id', (req, res) => {
    communityCollection.deleteOne({ _id: ObjectId(req.params.id) })
      .then(result => {
        res.send(result.deletedCount > 0)

      })
  })

  app.delete('/deletePrivate/:id', (req, res) => {
    privateCollection.deleteOne({ _id: ObjectId(req.params.id) })
      .then(result => {
        res.send(result.deletedCount > 0)

      })
  })

});

app.get('/', (req, res) => {
  res.send('Hello World! New Project.')
})

app.listen(process.env.PORT || port)