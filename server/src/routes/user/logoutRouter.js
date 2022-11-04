const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.session.newUser) {
    req.session.destroy(() => {
      res.clearCookie('SessionAliElbrus');
      res.sendStatus(200);
    })
  } else res.sendStatus(400);
});

module.exports = router;
