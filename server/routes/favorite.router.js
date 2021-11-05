const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  let favId = req.params.favId

  let queryText = `
  UPDATE "favorites" 
  SET "category_id" = $1
  WHERE "id" = $2;
  `;

  let category_id = req.body

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
router.delete('/', (req, res) => {
  res.sendStatus(200);

});

module.exports = router;
