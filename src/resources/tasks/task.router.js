const router = require('express').Router();
const User = require('./task.model');
const usersService = require('./task.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {

  res.json({req});
});


router.route('/').put(async (req, res) => {

  res.json({req});
});
router.route('/').delete(async (req, res) => {

  res.json({req});
});
module.exports = router;
