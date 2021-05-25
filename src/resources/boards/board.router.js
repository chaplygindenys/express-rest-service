const router = require('express').Router();
const boardService = require('./board.service');
const taskService = require('../tasks/task.service');



router.route('/').get(
  async (req, res) => {
    try {
      const boards = await boardService.getAll();
      res.status(200).json(boards);
    } catch (error) {
      res.status(401).send('Access token is missing or invalid');
    }
  });


router.route('/').post(
  async (req, res) => {
    try {
      const board = await boardService.save(req.body);
      res.status(201).json(board);
    } catch (error) {
      res.status(400).send('Bad request');
    }
  }
);




router.route('/:id').get(
  async (req, res) => {
    try {
      const board = await boardService.get(req.params.id);
      res.status(200).json(board);
    } catch (error) {
      res.status(404).send('Not Found');
    }
  }
);




router.route('/:id').delete(
  async (req, res) => {
    try {
      const Done = await boardService.remove(req.params.id);
      await taskService.removeBoardsTasks(req.params.id);
      res.status(204).json(Done);
    } catch (error) {
      res.status(404).send(error);
    }
  });


router.route('/:id').put(
  async (req, res) => {
    try {
      const board = await boardService.update(req.params.id, req.body);
      res.status(200).json(board);
    } catch (error) {
      res.status(400).send('Bad request');
    }
  });

module.exports = router;