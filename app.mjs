import express from "express";
import welcome from "./hello/index.mjs";
// import { welcome, add } from "./hello/index.mjs";

const app = express();

app.get("/", (req, res) => res.send(welcome));
// app.get("/", (req, res) => res.send(add(5, 5).toString()));

app.set("port", process.env.PORT || 5000);

const server = app.listen(app.get("port"), () =>
  console.log(`App listening on port ${server.address().port}`)
);
