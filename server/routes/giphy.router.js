const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const giphyRouter = express.Router()

giphyRouter.get('/:search', (req, res) => {
    let searchQuery = req.params.search
    console.log('req.body: ', searchQuery);
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchQuery}&limit=4`)
    .then(response => {
        res.send(response.data)
    }).catch(err => {
        console.log('error with giphy request', err)
    })
})

module.exports = giphyRouter;