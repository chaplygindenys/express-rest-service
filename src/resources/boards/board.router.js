const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(
  async (req, res) => {
    const boards = await boardsService.getAll();
    // map board fields to exclude secret fields like "password"
    res.json(boards.map(Board.toResponse));
  });

router.route('/:id').get(
  async (req, res) => {
    const board = await boardsService.get(req.params.id);
    res.status(200).send(Board.toResponse(board));
  }
);

router.route('/').post(
  async (req, res) => {
    const board = await boardsService.postBoard(Board.fromRequest(req.body));
    res.status(200).send(Board.toResponse(board));
  }
);


router.route('/:id').put(
  async (req, res) => {
    const board = await boardsService.putBoard(
      req.params.id,
      Board.fromRequest(req.body)
    );
    res.status(200).send(Board.toResponse(board));
  }
);

router.route('/:id').delete(
  async (req, res) => {
    await boardsService.deleteBoard(req.params.id);
    res.sendStatus(200);
  }
);


module.exports = router;

