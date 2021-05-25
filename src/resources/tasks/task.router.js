const router = require('express').Router({mergeParams: true});
const taskService = require('./task.service');

router.route('/').get(
  async (req, res) => {
    try {
      const tasks = await taskService.getAll(req.params.id);
      res.status(200).json(tasks);
    }
    catch (error) { res.status(401).json('Access token is missing or invalid');
    }
  });


router.route('/').post(
  async (req, res) => {
    try {
      const task = await taskService.save(req.params.id, req.body);
       res.status(201).json(task);
    }
    catch (error) { res.status(400).send('Bad request');
    }
  }
);

router.route('/:id').get(
  async (req, res) => {
    try {
      const task = await taskService.get(req.params.id);
       res.status(200).json(task);
    }
    catch (error) { res.status(404).json('Not Found');
    }
  }
);

router.route('/:id').delete(
  async (req, res) => {
    try {
      const Done = await taskService.remove(req.params.id);
      res.status(204).send(Done);
    }
    catch (error) {res.status(404).send('User not found');
    }
  }
);

router.route('/:TaskId').put(
  async (req, res) => {
    try {
      const task = await taskService.update(req.params.id, req.body);
      res.status(200).json(task);
    }
    catch (error) {res.status(400).send('Bad request');
    }
  }
);

module.exports = router;