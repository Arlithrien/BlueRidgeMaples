//const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');
import classes from './About.module.css';

function AboutPage(){
  return (
  <>
    <div>
      <h1 className={classes.intro1}>
      My name is Christopher Fleming,
      </h1>
      <h1 className={classes.intro2}>
      but you can call me <span className={classes.intro3}>Chris.</span>
      </h1>
    </div>

    <div>
      Projects
    </div>
  </>
  
  )
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



export default AboutPage;