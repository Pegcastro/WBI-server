"use strict";
const firebase = require("../firebase");
const Sneaker = require("../models/sneaker");
const db = firebase.firestore();
const data = require("../DB/DB.json");

// Saves a new record for a new sneaker on the DB
const addSneaker = async (req, res, next) => {
  try {
    console.log(req);
    const data = req.body;
    const sneaker = {
      name: data.name,
      brand: data.brand,
      model: data.model,
      price: data.price,
      date: data.date,
      store: data.store,
      image_url: data.image_url,
    };
    const doc = await db.collection("sneakers").add(sneaker);
    res.send({ id: doc.id, ...sneaker });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Loads all the sneakers into the firestore DB
const loadSneakers = async (req, res) => {
  try {
    const promises = data.map(async (sneaker) => {
      const entry = {
        name: sneaker.name,
        brand: sneaker.brand,
        model: sneaker.model,
        price: sneaker.price,
        date: sneaker.date,
        store: sneaker.store,
        image_url: sneaker.image_url,
      };
      return await db.collection("sneakers").add(entry);
    });
    Promise.all(promises).then(fulfilled => res.send(fulfilled));
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Gets all the sneakers in the DB
const getAllSneakers = async (req, res, next) => {
  try {
    const sneakersRef = await db.collection("sneakers").get();
    const sneakesArray = [];
    if (sneakersRef.empty) {
      res.status(404).send("No reference found");
    } else {
      sneakersRef.forEach((doc) => {
        const sneaker = new Sneaker(
          doc.id,
          doc.data().name,
          doc.data().brand,
          doc.data().model,
          doc.data().price,
          new Date(doc.data().date),
          doc.data().store,
          doc.data().image_url
        );
        sneakesArray.push(sneaker);
      });
    }
    res.send(sneakesArray);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addSneaker,
  getAllSneakers,
  loadSneakers,
};
