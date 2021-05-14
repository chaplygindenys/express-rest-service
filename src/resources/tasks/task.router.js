const router = require('express').Router({mergeParams: true});
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(
  async (req, res) => {
    const tasks = await taskService.getAll();
    res.status(200).json(tasks.map(Task.toResponse));
  });

router.route('/:id').get(
  async (req, res) => {
    const task = await taskService.get(req.params.id);
    res.status(200).json(Task.toResponse(task));
  }
);

router.route('/').post(
  async (req, res) => {
    const task = await taskService.postTask(Task.fromRequest(req.body));
    if (!task) {
      res.status(404).send('Not Found');
    } else {
      res.status(201).json(Task.toResponse(task));
    }
  }
);

router.route('/:id').put(
  async (req, res) => {
    const task = await taskService.putTask(
      req.params.id,
      Task.fromRequest(req.body)
    );
    if (!task) {
      res.status(404).json(req.params.id);
    } else {
      res.status(200).send(Task.toResponse(task));
    }
  }
);

router.route('/:id').delete(
  async (req, res) => {
    const task = await taskService.deleteTask(req.params.id);
    if (!task) {
      res.status(404).json(req.params.id);
    } else {
      res.sendStatus(204);
    }
  }
);

module.exports = router;
