const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  let { id } = req.params;
  console.log('id:', id);
  const sqlText = `
  UPDATE gallery SET likes=likes + 1 WHERE id=$1`;

  pool.query(sqlText, [id])
  .then((result) => {
      console.log(`Got stuff back from the database`, result);
      res.sendStatus(201);
  })
  .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); 
  })
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const sqlText = `SELECT * FROM gallery;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
});

module.exports = router;
