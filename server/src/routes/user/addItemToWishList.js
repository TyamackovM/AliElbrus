const router = require('express').Router();
const { User } = require('../../../db/models');

router.post('/', (req, res) => {
  console.log('req: ', req.body);
  
})

module.exports = router;
