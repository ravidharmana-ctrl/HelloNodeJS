const { MongoClient } = require('mongodb');
// or as an es module:
const dns = require('node:dns/promises');
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// Connection URL
const url = "mongodb+srv://ravikumardharmana258_db_user:CiJ2rHm7y7MvOWjR@hellonode.qbo56m4.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  const data ={
    firstname : "de",
    lastname : "padukonea",
    phonenumber : "8648987367"
    
  }

//   const insertResult = await collection.insertMany([data]);
//  console.log('Inserted documents =>', insertResult);

//  const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);

// const countResult = await collection.countDocuments({});
// console.log("count of the documents in the collection=>", countResult);

// const updateResult = await collection.updateOne( { firstname : "Ravi" }, 
//   { $set: { age: 26, status: "Active" }});
// console.log("update the data=>", updateResult);

// const updateResult1 = await collection.updateMany( { firstname : "deepika" }, 
//   { $set: { gender : "female"}});
// console.log("update the data=>", updateResult1);

const deleteResult = await collection.deleteOne({lastname : "padukonea"});
console.log("delete field in document=>" ,deleteResult);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());