const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');

const getAll = () => boardsRepo.getAll();
const get = id => boardsRepo.get(id);
const postBoard = board =>boardsRepo.postBoard(new Board(board));
const putBoard= (id, board) => boardsRepo.putBoard(id, board);
const deleteBoard = id => boardsRepo.deleteBoard(id);
module.exports = { deleteBoard};
module.exports = { putBoard};
module.exports = { postBoard};
module.exports = { get };
module.exports = { getAll };