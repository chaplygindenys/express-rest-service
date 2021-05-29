const router = require('express').Router({mergeParams: true});
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(
  async (req, res) => {
    const boards = await boardService.getAll();
    res.status(200).json(boards.map(Board.toResponse));
  });

router.route('/:id').get(
  async (req, res) => {
    const board = await boardService.get(req.params.id);
    res.status(200).json(Board.toResponse(board));
  }
);

router.route('/').post(
  async (req, res) => {
    const board = await boardService.postBoard(Board.fromRequest(req.body));
    if (!board) {
      res.status(404).send('Not Found');
    } else {
      res.status(201).json(Board.toResponse(board));
    }
  }
);


router.route('/:id').put(
  async (req, res) => {
    const board = await boardService.putBoard(
      req.params.id,
      Board.fromRequest(req.body)
    );
    if (!board) {
      res.status(404).json(req.params.id);
    } else {
      res.status(200).send(Board.toResponse(board));
    }
  }
);

router.route('/:id').delete(
  async (req, res) => {
   const board = await boardService.deleteBoard(req.params.id);
    if (!board) {
      res.status(404).json(req.params.id);
    } else {
      res.sendStatus(204);
    }
  }
);


module.exports = router;

