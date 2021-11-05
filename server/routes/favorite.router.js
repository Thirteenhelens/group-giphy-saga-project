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
  let favId = req.params.favId

  let queryText = `
  UPDATE "favorites" 
  SET "category_id" = $1
  WHERE "id" = $2;
  `;

  let category_id = req.body.category_id

  let values = [category_id, favId]

  pool.query(queryText, values)
    .then((response) => {
      console.log('UPDATED', response)
      res.sendStatus(201)
    }).catch((err) => {
      console.log('Err in UPDATE', err)
      res.sendStatus(500);
    });
  // req.body should contain a category_id to add to this favorite image
});

// delete a favorite
router.delete('/:id', (req, res) => {
  //Setting req.params.id to variable  
  const idToDelete = req.params.id;
  console.log('Id to delete -->', idToDelete);
  
  const queryText = `
    DELETE from "favorites"
    WHERE "id" = $1;
  `
  let values = [idToDelete]

  pool.query(queryText, values)
    .then((result) => {
      console.log(`/favorites DELETE request SUCCESS!`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`/favorites DELETE request ERROR!`, err);
      res.sendStatus(500);
    })
});

module.exports = router;
