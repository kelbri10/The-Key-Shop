import { MongoClient } from 'mongodb'; 
import '../loadEnvironment.js'

const connectionString = process.env.MONGODB_URI || ""; 

const client = new MongoClient(connectionString); 

let conn; 

try{ 
  conn = await client.connect();
  console.log('successfully connected to database'); 
} catch(err) { 
  console.log(err); 
}

let db = conn.db('sample_ecommerce'); 

export default db; 