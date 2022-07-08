// import { Client } from "pg";
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import {stationRoute, allStationsList} from "./utils/stationsGraph"


config(); //Read .env file lines as though they were env vars.

//Call this script with the environment variable LOCAL set if you want to connect to a local db (i.e. without SSL)
//Do not set the environment variable LOCAL if you want to connect to a heroku DB.

//For the ssl property of the DB connection config, use a value of...
// false - when connecting to a local DB
// { rejectUnauthorized: false } - when connecting to a heroku DB
//const herokuSSLSetting = { rejectUnauthorized: false }
//const sslSetting = process.env.LOCAL ? false : herokuSSLSetting
// const dbConfig = {
//   connectionString: process.env.DATABASE_URL,
//   ssl: sslSetting,
// };

const app = express();

app.use(express.json()); //add body parser to each following route handler
app.use(cors()) //add CORS support to each following route handler

// const client = new Client(dbConfig);
// client.connect();

app.get("/", (req, res) => {
  res.send({
    message:
      "Welcome station routes api, try GET /allStations and GET/path/:from/:to ",
  });
});

app.get("/allStations", (req,res) => {
 
 res.json(allStationsList)
})

app.get("/path/:from/:to", (req,res) => {
  const fromStation: string = req.params.from
  const toStation: string = req.params.to
  const shortestPath: {path: string[]| null, cost: number} = stationRoute.path(fromStation, toStation, {cost:true})
  if(!shortestPath.path){
    res.json('stations do not exist or there is no path between stations')
  }
  res.json(shortestPath)
})


//Start the server on the given port
const port = process.env.PORT;
if (!port) {
  throw 'Missing PORT environment variable.  Set it in .env file.';
}
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
