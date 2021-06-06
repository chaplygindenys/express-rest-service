import {Task} from './task.model';
import {
  getAllTasks,
  getTask,
  saveTask,
  removeTask,
  updateTask,
  removeBoardsTasksById,
  removeUsersTasksById
} from './task.memory.repository';


type id = string | number | null;
type taskParam = {

  title: string,
  order: number,
  description: string,
  boardId: string | null,
  userId: string | null,
  columnId: string | null
};

/**
 * function to initialize method ".getall" from object "tasksRepo"
 * with @param boardID
 * @param boardID
 * @return {Promise<*[]>}
 */
export const getAll = (boardID: id) => getAllTasks(boardID);
/**
 * function to initialize method ".get" from object "tasksRepo" with @param id:string
 * @return {Promise<{id: id}|number>}
 * @param taskId
 */
export const get = (taskId: id) => getTask(taskId);
/**
 * function to initialize method".postTask" from
 * object "tasksRepo" with new object Task and good boardId
 *
 *
 * @return {Promise<*>}
 * @param taskParam
 */

// eslint-disable-next-line no-shadow
export const save = (taskParam: taskParam) => saveTask(new Task(taskParam));

/**
 * function to initialize method".putTask" from
 * object "tasksRepo" with @param id:string and task{
  "title": "string",
  "order": number,
  "description": "string",
  "userId": "string",
  "boardId": "string",
  "columnId": "string"
}
 * @param taskId
 * @param task
 * @return {Promise<{PutObject}|number>}
 */
export const update = (taskId: string | number | null, task: taskParam) => updateTask(taskId, task);


/**
 *function to initialize method".removeTask" from
 * object "tasksRepo" with @param id:string
 * @return {Promise<string|string>}
 * @param taskId
 */

export const deleteTask = (taskId: string | number | null) => removeTask(taskId);

/**
 *  function to initialize method".removeBoardsTasks" from
 * object "tasksRepo" with @param boardId:string
 * @param boardId
 * @return {Promise<string>}
 */
export const removeBoardsTasks = (boardId: id) => removeBoardsTasksById(boardId);

/**
 * function to initialize method".removeUsersTasks" from
 * object "tasksRepo" with @param userId:string
 * @param userId
 * @return {Promise<string>}
 */
export const removeUsersTasks = (userId: id) => removeUsersTasksById(userId);

