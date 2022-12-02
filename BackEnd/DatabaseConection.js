require("dotenv").config();
const meals = require("./meals.json");
const { MongoClient, ServerApiVersion, Db } = require("mongodb");
// create a free atlas  and full the .env file with the following information PASSWORD=yourpassword USERNAME=yourusername CLUSTERNAME=yourclustername
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTERNAME}/?retryWrites=true&w=majority `;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const dbname = "forkify";
const collection_name = "recipes";
const accountsCollection = client.db(dbname).collection(collection_name);


  try {
    client.connect();

    let result = await accountsCollection.insertMany(meals);
    console.log(`query result: ${result}`);

  } catch (e) {
    console.log(e);
  } finally {
    client.close();
  }

