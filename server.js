require("dotenv").config();
const fs = require("fs");
const express = require("express");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const app = express();
// dung cai nay da giai quyet van de json body client den server
app.use(express.json());
// get users database
const { users, refreshTokens } = JSON.parse(
  fs.readFileSync("./users.json", "UTF-8")
);
// console.log(refreshTokens);
// Check if the user exists in database
function isAuthenticated({ username, password }) {
  return (
    users.findIndex(
      (user) => user.username === username && user.password === password
    ) !== -1
  );
}
const expiresIn = "600000"; //10minute
// Create an access token from a payload
function createAccessToken(payload) {
  return jwt.sign(payload, process.env.SECRET_KEY_TOKEN, { expiresIn });
}
// Create a refresh token from a payload
function createRefreshToken(payload) {
  return addRefreshTokenToDb(jwt.sign(payload, process.env.REFRESH_TOKEN));
}
// Add refresh token
function addRefreshTokenToDb(refreshToken) {
  // if refreshToken not exist add one
  if (!refreshTokens.includes(refreshToken)) {
    fs.readFile("./users.json", (err, data) => {
      if (err) {
        const status = 401;
        const message = err;
        res.status(status).json({ status, message });
        return;
      }
      // Get current users data
      data = JSON.parse(data.toString());

      // Add new refresh token
      data.refreshTokens.push(refreshToken);

      fs.writeFile("users.json", JSON.stringify(data), (err, result) => {
        // WRITE
        if (err) {
          const status = 401;
          const message = err;
          return res.status(status).json({ status, message });
        }

        console.log("luu refresh token to file successfully! ", result);
      });
    });
  }
  return refreshToken;
}
app.get("/", (req, res, next) => {
  res.send("Hello the world!");
});
app.post("/auth/login", (req, res) => {
  console.log("body login o server: ", req.body);
  const { username, password } = req.body;
  //   kiem tra xem user co ton tai trong db khong ? => false ko ton tai
  if (isAuthenticated({ username, password }) === false) {
    const status = 401;
    const message = "Incorrect username or password";
    return res.status(status).json({
      status,
      message,
    });
  }
  const accessToken = createAccessToken({ username, password });
  //   refresh token luc accessToken het han thi dung refresh token de lam moi accessToken
  const refreshToken = createRefreshToken({ username, password });
  res.status(200).json({
    accessToken,
    refreshToken,
    data: "hoa vip",
  });
});

// refresh Token
app.post("/auth/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken == null) return res.sendStatus(401);

  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN,
    (err, { username, password }) => {
      if (err) {
        console.log("loi o auth/refresh superlike: " + err);
        return res.sendStatus(403);
      }
      const accessToken = createAccessToken({ username, password });
      res.json({ accessToken: accessToken });
    }
  );
});
// Verify the token
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log("Auth Header:", authHeader);

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET_KEY_TOKEN, (err, user) => {
    if (err && err.name === "TokenExpiredError") {
      return res.json({ status: 401, err: err.name });
    }

    if (err) {
      console.log("loi o  verifytoken super like: ", err);
      return res.status(403).json({
        message: "Loi xac nhan token o superlike" + err,
      });
    }

    req.user = users.find((item) => item.username === user.username);
    next();
  });
}
app.post("/superlikes", verifyToken, async (req, res) => {
  try {
    const API_URL = "https://5f9fc01ce21bab0016dfc3f7.mockapi.io/shop-hoa/";
    if (req.user && !req.user.isVip) {
      console.log("Chi co tai khoan vip moi thuc hien duoc chuc nang nay!");
      return res.sendStatus(403);
    }

    const cat = await axios.post(API_URL + "superlikes", req.body.cat);
    // res.status(200).json({ "message": "thanh cong "+ cat });
    res.status(200).json(cat.data);
  } catch (err) {
    console.log("loi o post superlike: ", err);
  }
});

app.listen(9000, function () {
  console.log("App listening on port " + 9000);
});
