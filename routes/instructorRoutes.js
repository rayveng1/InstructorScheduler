//router for instructor  /instructor,
var express = require("express");
const http = require("http");
var db = require("./instructordb");
var instructorRouter = express.Router();

//http://localhost:8080/Instructor/
instructorRouter.route("/").get(async function (req, res) {
  //res.send('hello from instructor route');
  const reslt = await db.GetInstructorsAsync();
  res.write(JSON.stringify(reslt));
  res.end();
});

//http://localhost:8080/Instructor/search/chris
instructorRouter.get("/search/:searchFilter", async function (req, res) {
  const reslt = await db.InstructorSearchAsync(req.params.searchFilter);
  res.write(JSON.stringify(reslt));
  res.end();
});

//http://localhost:8080/Instructor/2
instructorRouter.route("/:id").get(async function (req, res) {
  console.log("DEBUGGING", req.params.id);
  const reslt = await db.GetInstructorByIDAsync(req.params.id);
  res.write(JSON.stringify(reslt));
  res.end();
});

//http://localhost:8080/Instructor
instructorRouter.put("/", async function (req, res) {
  console.log("search req.body", req.body);
  const reslt = await db.UpdateInstructor(req.body);
  res.write("{result:true}");
  res.end();
});

//http://localhost:8080/Instructor
instructorRouter.post("/", async function (req, res) {
  console.log("search req.body", req.body);
  const reslt = await db.InsertInstructor(req.body);
  res.write("{result:true}");
  res.end();
});

module.exports = instructorRouter;
