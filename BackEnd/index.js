require("dotenv").config();
const app = require("express")();
const cors = require("cors");
const { MongoClient, ServerApiVersion, Db, ObjectId } = require("mongodb");
const PORT = 8080;
// create a free atlas  and full the .env file with the following information PASSWORD=yourpassword USERNAME=yourusername CLUSTERNAME=yourclustername
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTERNAME}/?retryWrites=true&w=majority `;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const dbname = "forkify";
const collection_name = "recipes";
const recipes = client.db(dbname).collection(collection_name);

try {
  client.connect();
  app.use(cors({ origin: "*" }));
  // app.use(cors({ origin: "http://localhost:42053/" }));
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  app.get("/recipes", async (req, res) => {
    const { search, key } = { ...req.query };
    if (key) {
      res.statusCode = 200;

      const agg = [
        {
          $search: {
            index: "forkify_meal_search",
            text: {
              query: search,
              path: {
                wildcard: "*",
              },
            },
          },
        },
        {
          $project: {
            _id: 0,
            status: "success",
            results: {
              $sum: {
                $size: "$data.recipes",
              },
            },
            data: 1,
          },
        },
      ];

      const cursor = recipes.aggregate(agg);
      const result = await cursor.toArray();
      // console.log("🚀 ~ file: index.js:55 ~ app.get ~ result", result)
      if (!result.length)
        res.send({
          status: "success",
          results: 0,
          data: {
            recipes: [],
          },
        });
      res.send(result[0]);
    } else {
      res.statusCode = 403;
      res.send({ err: "IP KEY IS NOT VALID" });
      // after we should add an ip key for every user ....
    }
  });
  // app.get("/recipes/:id", async (req, res) => {
  //   const { id } = req.params;
  //   // console.log(req);
  //   const { key } = req.query;
  //   if (key) {
  //     res.statusCode = 200;
  //     // console.log(`"_id":"ObjectId('${id}')"`);
  //     const result = await recipes.findOne({ _id: ObjectId(id) });
  //     // console.log("🚀 ~ file: index.js:78 ~ app.get ~ result", result)
  //     // const result =await recipes.findOne({"_id":`ObjectId('${id}')`});
  //     // {"_id":ObjectId('6388942404ccab5457d804da')}
  //     // console.log("🚀 ~ file: index.js:78 ~ app.get ~ result", result)
  //     if (!result.length)
  //       res.send({
  //         status: "fail",
  //         message: "No recipe found with that ID!",
  //       });
  //     res.send({ result });
  //   } else {
  //     res.statusCode = 403;
  //     res.send({ err: "IP KEY IS NOT VALID" });
  //     // after we should add an ip key for every user ....
  //   }
  // });
  // let result = await recipes.insertMany(meals);
  // console.log(`query result: ${result}`);
} catch (e) {
  console.log(e);
} finally {
  client.close();
}

//?search=:search
// &key=:key
//&key=d3552f5b-6c19-4089-a907-dfdfa80f2882localhost:8080
//recipes?search=pizza&key=d3552f5b-6c19-4089-a907-dfdfa80f2882
