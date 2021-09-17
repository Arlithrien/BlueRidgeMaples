//const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');

function AboutUsPage(){
  return <div>about </div>
}



/*
// Connection URL
const url = 'mongodb://$[username]:$[password]@$[hostlist]/$[database]?authSource=$[authSource]';


// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  client.close();
});



const db = client.db("test.list");
var cursor = db.collection('Nursery').find({});

function iterateFunc(doc) {
  console.log(JSON.stringify(doc, null, 4));
}

function errorFunc(error) {
  console.log(error);
}

cursor.forEach(iterateFunc, errorFunc);

*/



export default AboutUsPage;