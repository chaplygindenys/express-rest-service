const Task = require('./task.model');
const tasksRepo = require('./task.memory.repository');

/**
 * function to initialize method ".getall" from object "tasksRepo"
 * with @param boardID
 * @param boardID
 * @return {Promise<*[]>}
 */
const getAll = (boardID) => tasksRepo.getAll(boardID);
/**
 * function to initialize method ".get" from object "tasksRepo" with @param id:string
 * @param id
 * @return {Promise<{id: id}|number>}
 */
const get = id => tasksRepo.get(id);
/**
 * function to initialize method".postTask" from
 * object "tasksRepo" with new object Task and good boardId
 *
 *
 * @param boardId
 * @param task
 * @return {Promise<*>}
 */
const save = (boardId, task) => {
    const taskCopy = task;
    if (!task.boardId) {
        taskCopy.boardId = boardId
    }
    return tasksRepo.save(new Task(taskCopy));
};
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
 * @param id
 * @param task
 * @return {Promise<{PutObject}|number>}
 */
const update = (id, task) => tasksRepo.update(id, task);


/**
 *function to initialize method".removeTask" from
 * object "tasksRepo" with @param id:string
 * @param id
 * @return {Promise<string|string>}
 */
const remove = id => tasksRepo.remove(id);

/**
 *  function to initialize method".removeBoardsTasks" from
 * object "tasksRepo" with @param boardId:string
 * @param boardId
 * @return {Promise<string>}
 */
const removeBoardsTasks = (boardId) => tasksRepo.removeBoardsTasks(boardId);

/**
 * function to initialize method".removeUsersTasks" from
 * object "tasksRepo" with @param userId:string
 * @param userId
 * @return {Promise<string>}
 */
const removeUsersTasks = (userId) => tasksRepo.removeUsersTasks(userId);

module.exports = { getAll, get, remove, save, update, removeBoardsTasks, removeUsersTasks };
