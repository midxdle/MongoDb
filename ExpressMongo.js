const express = require('express');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://midxdle:fFbE2DpWoxmGTAXF@cluster0.axsj3.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
let str = "";

//in this step, i am going to to get
//all of the records im my database collection
app.route('/people').get(function(req, res) {
    const dbName = "test";
async function run() {
  try {
       await client.connect();
       console.log("Connected correctly to server");
       const db = client.db(dbName);

       // Use the collection "people"
       const col = db.collection("people");
       const myDoc = await col.findOne();
            
         res.send(myDoc);
  }
         finally {
          await client.close();
  }
}

run().catch(console.dir);
})

let server = app.listen(3000, ()=>{});