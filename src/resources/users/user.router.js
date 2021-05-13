const router = require('express').Router();
const User = require('./user.model');
const userService = require('./user.service');

router.route('/').get(
  async (req, res) => {
    const users = await userService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  });

router.route('/:id').get(
  async (req, res) => {
    const user = await userService.get(req.params.id);
    res.json(User.toResponse(user));
  }
);

router.route('/').post(
  async (req, res) => {
    const serviceResponse = await userService.postUser(User.fromRequest(req.body));
    if (serviceResponse !== 'Created') {
      res.status(404).send('Not Found');
    }else{
    res.status(200).send('Created');}
  }
);

router.route('/:id').put(
  async (req, res) => {
    const user = await userService.putUser(
      req.params.id,
      User.fromRequest(req.body)
    );
    res.status(200).send(User.toResponse(user));
  }
);

router.route('/:id').delete(
  async (req, res) => {
    await userService.deleteUser(req.params.id);
    res.sendStatus(200);
  }
);

module.exports = router;
