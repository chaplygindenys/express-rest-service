let Boards = [];

/**
 * return all boards
 * @return {Promise<*[]>}
 */
const getAll = async () => Boards;

/**
 * it find in [Boards] board with id : @param id
 * if it is return it
 * or throw new error to up
 * @param id
 * @return {Promise<*>}
 */
const get = async (id) => {
  const currentBoard = Boards.find(board => board.id === id);
  if(!currentBoard) {
    throw new Error('Not fond')
  }
  return currentBoard;
};


/**
 * push new board to [Boards]
 * and return new board
 * @param board
 * @return {Promise<*>}
 */
const save = async (board) => {
  Boards.push(board)
  return board;
};

/**
 * find board with @param id
 * make updateBoard {id + board }
 * and changed boardIndex to updateBoard
 * return updateBoard
 * @param id
 * @param board
 * @return {Promise<*&{id}>}
 */
const update = async (id, board) => {
  const boardIndex = Boards.findIndex(user => user.id === id);
  const updatedBoard = {
    id,
    ...board
  };
  Boards.splice(boardIndex, 1, updatedBoard);
  return updatedBoard;
}


/**
 * re saved [Boards] without (board with @param id)
 * return 'Board has been deleted'
 * @param id
 * @return {Promise<string>}
 */
const remove= async (id) => {
  const boardWithGoodId = Boards.filter(board => board.id === id);
  Boards = Boards.filter(board => board.id !== id);
  if(!boardWithGoodId) {
    throw new Error('Not fond')
  }
  return 'Board has been deleted' ;
};
module.exports = {getAll, get, remove, save, update };