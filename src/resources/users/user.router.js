const router = require('express').Router();
const User = require('./user.model');
const userService = require('./user.service');

router.route('/').get(
  async (req, res) => {
    const users = await userService.getAll();
    // map user fields to exclude secret fields like "password"
    res.status(200).json(users.map(User.toResponse));
  });

router.route('/:id').get(
  async (req, res) => {
    const user = await userService.get(req.params.id);
    res.status(200).json(User.toResponse(user));
  }
);

router.route('/').post(
  async (req, res) => {
    const user = await userService.postUser(User.fromRequest(req.body));
    if (!user) {
      res.status(404).send('Not Found');
    } else {
      res.status(201).json(User.toResponse(user));
    }
  }
);

router.route('/:id').put(
  async (req, res) => {
    const user = await userService.putUser(
      req.params.id,
      User.fromRequest(req.body)
    );
    if (!user) {
      res.status(404).json(req.params.id);
    } else {
      res.status(200).send(User.toResponse(user));
    }
  }
);

router.route('/:id').delete(
  async (req, res) => {
    const user = await userService.deleteUser(req.params.id);
    if (!user) {
      res.status(404).json(req.params.id);
    } else {
      res.sendStatus(204);
    }
  }
);

module.exports = router;
