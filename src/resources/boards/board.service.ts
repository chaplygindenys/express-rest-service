import {Board} from'./board.model';
import {getAllBoards, saveBoard, getBoard, removeBoard, updateBoard} from'./board.memory.repository';

type typeColumns = {title:string, order:number}[];
type boardParam = { title: string, columns:
    { id: string|number,
      title: string,
      order: number
    }[] }
/**
 * function to initialize method ".get all" from object "boardsRepo"
  * @return {Promise<Boards[]|*[]>}
  */
export const getAll = () => getAllBoards();
/**
 * function to initialize method ".get" from object "boardsRepo" with @param id:string
 * @param id
 * @return {Promise<{id: id}|number>}
 */
export const get = (id:string|number) => getBoard(id);
/**
 * make new board with @param board:{}
 * function to initialize method".postBoard" from
 * object "boardsRepo" with new Object
 * @param board
 * @return {Promise<{id: id}|number>}
 */
export const save =(title:string, columns:typeColumns) => saveBoard(new Board(title, columns));
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

export const update = (id:string|number, boardParam:boardParam) => updateBoard(id, boardParam);
/**
 *function to initialize method".deleteBoard" from
 * object "boardsRepo" with @param id:string
 * @param id
 * @return {Promise<string|string>}
 */
export const remove = (id:string|number) => removeBoard(id);

