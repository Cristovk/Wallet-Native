const functions = require("firebase-functions");
const express = require("express");
const ex = express();
const admin = require("firebase-admin");
const morgan = require("morgan");
ex.use(morgan("dev"));

admin.initializeApp({
  credential: admin.credential.cert("./permissions.json"),
  databaseURL: "https://henrybankfire.firebaseio.com",
});
const db = admin.firestore();
const auth = admin.auth();

ex.post("/api/cards", async (req, res) => {
  try {
    const { number, expiry, cvc, name, type } = req.body;
    let card = await db.doc(`/Users/${"348FpTmPKmUFGMbwfeTe5nVlM3G3"}`);
    const response = card.data();
    return res.json(response);
  } catch (error) {
    return res.send(error).status(500);
  }
});

exports.ex = functions.https.onRequest(ex);
