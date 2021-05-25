const Board = require('./board.model');
const boardsRepo = require('./board.memory.repository');
/**
 * function to initialize method ".get all" from object "boardsRepo"
 * @return {Promise<Boards[]|*[]>}
 */
const getAll = () => boardsRepo.getAll();
/**
 * function to initialize method ".get" from object "boardsRepo" with @param id:string
 * @param id
 * @return {Promise<{id: id}|number>}
 */
const get = id => boardsRepo.get(id);
/**
 * make new board with @param board:{}
 * function to initialize method".postBoard" from
 * object "boardsRepo" with new Object
 * @param board
 * @return {Promise<{id: id}|number>}
 */
const save = board => boardsRepo.save(new Board(board));
/**
 * function to initialize method".putBoard" from
 * object "boardsRepo" with @param id:string and bord{

  "title": "string",
  "columns": [
    {

      "title": "string",
      "order": number
    }
  ]
}
 * @param id
 * @param board
 * @return {Promise<{PutObject}|number>}
 */
const update = (id, board) => boardsRepo.update(id, board);
/**
 *function to initialize method".deleteBoard" from
 * object "boardsRepo" with @param id:string
 * @param id
 * @return {Promise<string|string>}
 */
const remove = id => boardsRepo.remove(id);

module.exports = { getAll, get, remove, save, update };