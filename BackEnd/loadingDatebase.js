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

(async function main() {
  try {

    console.log("database loaded is loading ...");
    client.connect();
    if (!(await accountsCollection.countDocuments())) {
      // insert the meal to the database
      result = await accountsCollection.insertMany(meals);
      console.log(`Inserted document: ${result.insertedCount}`);
      //create an index on RecipeName
      await accountsCollection.createIndex({ RecipeName: 1 });
      // test the connection
      result = await accountsCollection.findOne();
      // console.log("Findeddocument:", result);
    }
    console.log("connection with atlas established");
    // console.log(uri)
    // console.log(meals.length)
  } catch (e) {
    console.log(e);
  } finally {
    client.close();
    process.exit(0)
  }
})();
