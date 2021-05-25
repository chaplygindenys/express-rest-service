const router = require('express').Router();
const User = require('./user.model');
const userService = require('./user.service');
const taskService = require('../tasks/task.service');


router.route('/').get(
  async (req, res) => {
    try {
      const users = await userService.getAll();
      res.status(200).json(users.map(User.toResponse));
    }
    catch (error){res.status(401).json('Access token is missing or invalid');
    }
  });

router.route('/:id').get(
  async (req, res) => {
    try {
      const user = await userService.get(req.params.id);
      res.status(200).json(User.toResponse(user));
    }
    catch (error) {res.status(404).send('Not Found');
    }
  }
);

router.route('/').post(
  async (req, res) => {
    try {
      const user = await userService.postUser(User.fromRequest(req.body));
      res.status(201).json(User.toResponse(user));
    }
    catch (error) {res.status(400).send('Bad request');
    }
  }
);

router.route('/:id').put(
  async (req, res) => {
    try {
      const user = await userService.putUser(req.params.id, User.fromRequest(req.body));
       res.status(200).json(User.toResponse(user));
    }
    catch (error) { res.status(400).send('Bad request');
    }
  });

router.route('/:id').delete(
  async (req, res) => {
    try {
         await userService.deleteUser(req.params.id);
         await taskService.removeUsersTasks(req.params.id);
         res.status(204).send('The User has been deleted');
    }
    catch (error) { res.status(404).send('User not found');
    }
  }
);

module.exports = router;
