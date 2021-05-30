import { Board } from './board.model';


type typeColumns = {title:string,id:string|number, order:number}[];
type Board1 = {id:string|number,title:string, columns:{title:string, id:string|number, order:number}[]};
let Boards:Board1[] = [] ;
Boards.push(new Board);

/**
 * return all boards
 * @return {Promise<*[]>}
 */
export const getAllBoards = async () => Boards;

/**
 * it find in [Boards] board with id : @param id
 * if it is return it
 * or throw new error to up
 * @param id
 * @return {Promise<*>}
 */
export const getBoard = async (id:string|number) => {
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
export const saveBoard = async (board:Board1) => {
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

export const updateBoard = async (id:string|number, title:string, columns:typeColumns) => {
  const boardIndex = Boards.findIndex(board => board.id === id);


  const updatedBoard = {
    id,title, columns
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
export const removeBoard = async (id:string|number) => {
  const boardWithGoodId = await Boards.filter(board => board.id === id);
  Boards = await Boards.filter(board => board.id !== id);
  if(!boardWithGoodId) {
    throw new Error('Not fond')
  }
  return 'Board has been deleted' ;
};
