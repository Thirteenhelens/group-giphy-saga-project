const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


router.get('/:search', (req, res) => {

    let search = req.params.search;

    console.log('SEARCH --> ', search);

    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}&rating=pg-13&limit=25`)
        .then((response) => {
            console.log(`API get res ->`, response.data);
            res.send(response.data);
        })
        .catch((err) => {
            console.log(`Error in get ->`, err);
        });
});


module.exports = router;