const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log(`/favorite GET`);

  let queryText = `SELECT * FROM "favorites";`;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`ERROR! /favorite GET`, err);
      res.sendStatus(500);
    })
});

// add a new favorite
router.post('/', (req, res) => {
  console.log(`/favorite POST`);
  const newGif = req.body;

  let queryText = `
    INSERT INTO "favorites" ("name", "image_url")
    VALUES ($1, $2);
  `;
  let values = [newGif.name, newGif.image_url];


  pool.query(queryText, values)
    .then((result) => {
      console.log(`/favorites POST request SUCCESS!`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`/favorites POST request ERROR!`, err);
      res.sendStatus(500);
    })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {

  
  res.sendStatus(200);
});

module.exports = router;
