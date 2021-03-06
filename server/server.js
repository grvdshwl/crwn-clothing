const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const enforce = require("express-sslify");
const compression = require("compression");
let origin = "http://localhost:3000";
if (process.env.NODE_ENV !== "Production") {
  require("dotenv").config();
  origin = "https://adoring-tesla-d43050.netlify.app";
}
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: origin,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

if (process.env.NODE_ENV !== "production") {
  app.use(compression);
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`server is running on the  port : ${port}`);
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.post("/payment", (req, res) => {
  const body = {
    description: "payment",
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr",
  };

  console.log(body);

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    console.log("test");
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
      console.log(stripeErr);
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
