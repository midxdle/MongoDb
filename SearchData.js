const { MongoClient } = require("mongodb");                                                                                                                                    
const url = "mongodb+srv://midxdle:fFbE2DpWoxmGTAXF@cluster0.axsj3.mongodb.net";
const client = new MongoClient(url);
const dbName = "sample_mflix";
async function run() {
  try {
       await client.connect();
       console.log("Connected correctly to server");
       const db = client.db(dbName);

       // Use the collection "people"
       const col = db.collection("sessions");
       const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);
  }
         finally {
          await client.close();
  }
}

run().catch(console.dir);