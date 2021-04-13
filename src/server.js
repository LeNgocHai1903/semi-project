const express = require("express");
const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept, Authorization "
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});

app.get("/api/otp", (req, res) => {
  try {
    res.send({
      status: 201,
      phoneNumber:"",
      OTP: {
        first: "1",
        second: "2",
        third: "3",
        fourth: "4",
      },
    });
  } catch (error) {
    res.send({ error: "Error!!!" });
  }
});

app.post("/api/otp/:o1/:o2/:o3/:o4", (req, res) => {
  const o1 = req.params.o1;
  const o2 = req.params.o2;
  const o3 = req.params.o3;
  const o4 = req.params.o4;
  try {
    if (o1 === "1" && o2 === "2" && o3 === "3" && o4 === "4") {
      res.send({
        message: "Success",
      });
    }
    else {
      res.send({ error: " Your OTP was wrong!!!" });
    }
  } catch (error) {
    res.send({ error: "Your OTP was wrong!!!" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
