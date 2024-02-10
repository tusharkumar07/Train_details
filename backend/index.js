const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const bcrypt = require("bcrypt");
const cors=require("cors");
app.use(cors());
const User = require("./database/user");
const uri = "mongodb://127.0.0.1:27017/trackLink";
const station =require("./station.json");
const trainSchedule =require("./trainSchedule.json");
const trainBtStations =require("./trainBtStations.json")
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB", error));

app.get("/", (req, res) => {
  res.send("hello from backend");
});

app.post("/signup", async (req, res) => {
  const iemail = req.body.email;
  const findUser = await User.find({ email: iemail });
  const ipassword = req.body.password;
  if (findUser.length > 0) {
    res.send(false)
  } else {
    try {
      const hashedPass = await bcrypt.hash(ipassword, 10);
      const setUser = await new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
      });
      const saveUser = await setUser.save();
      console.log(saveUser);
      res.send(true);
    } catch (err) {
      console.log(`err in saving data in database :${err}`);
      res.send(false);
    }
  }
});

app.post("/login", async (req, res) => {
  const iemail = req.body.email;
  const vpassword = req.body.password;
  console.log("called");
  const userSearch = await User.findOne({ email: iemail });
  if (userSearch) {
    console.log(userSearch);
    const checkedPass = bcrypt.compare(vpassword, userSearch.password);
    console.log(checkedPass);
    if (checkedPass) {
      res.send(true)
      // res.send("user logged in");
      console.log("user logged in");
    } else {
      res.send(false)
      // res.send("Invallid user details");
      console.log("Invallid user details");
    }
  } else {
    res.send(false)
    // res.send("Invallid user details");
    console.log("Invallid user details");
  }
});

app.get("/stations",(req,res)=>{
  res.send(station);
})

app.get("/schedule",(req,res)=>{
  res.send(trainSchedule);
})

app.get("/trainBtStations",(req,res)=>{
  res.send(trainBtStations);
})

app.get("singleStation",(req,res)=>{
  const stationCode1=req.query.stationCode;
  console.log(stationCode1);
})

app.listen("5000", () => {
  console.log("listening on port no 5000");
});
