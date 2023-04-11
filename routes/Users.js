const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddlewar");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: null,
  database: "events",
});

router.post("/", async (req, res) => {
  const { email, username, password } = req.body;
  const sqlInsert =
    "INSERT INTO users (email, username,password) VALUES (?,?,?)";
  await db.query(sqlInsert, [email, username, password], (err, result) => {
    if (result) {
      res.json("Success");
    }
    else{
      res.json(err);
    }
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const sqlInsert = "SELECT * from users where username=? and password=?";

  await db.query(sqlInsert, [username, password], (err, result) => {
    if (result.length > 0) {
      const accessToken = sign(
        { username: result[0].username, id: result[0].idusers },
        "hello"
      );

      res.json({
        token: accessToken,
        username: result[0].username,
        id: result[0].idusers,
      });
      console.log(result[0].username, result[0].idusers);
    } else {
      res.json({ error: "Invalid email or password" });
    }
  });
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

router.post("/getProfile", validateToken, (req, res) => {
  const { id } = req.body;
  const sqlInsert = "SELECT * from users where idusers = ?";
  db.query(sqlInsert, [id], (err, result) => {
    res.json(result);
  });
});

router.post("/book", (req, res) => {
  const { date, time, id } = req.body;
  const sql = "SELECT * from booking where idevents=? and time=? and date=?";
  const sql2 = "INSERT INTO booking (idevents, time, date) VALUES(?,?,?)";
  db.query(sql, [id, time, date], (err, result) => {
    if (result.length == 0) {
      db.query(sql2, [id, time, date], (err, result) => {});
      res.json("Success");
    } else {
      res.json({ error: "This slot is already Booked" });
    }
  });
});
module.exports = router;
