let Tasks = [];

/**
 * filtered all tasks by boardId
 * return  tasks with @param boardId
 * @param boardId
 * @return {Promise<*[]>}
 */
const getAll = async (boardId) => {
  const tasks = Tasks.filter(task => task.boardId === boardId)
  if(!tasks) {
    throw new Error('Not found');
  }
  return tasks;
};

/**
 *  filtered all tasks by @param id
 * return  task with @param id
 * @param id
 * @return {Promise<*>}
 */
const get = async (id) => {
  const currentTask = Tasks.find(task => task.id === id);
  if(!currentTask) {
    throw new Error('Not fond')
  }
  return currentTask;
}



/**
 * push new task to [Tasks]
 * and return new task
 * @param task
 * @return {Promise<*>}
 */
const save = async (task) => {
  Tasks.push(task)
  return task;
};

/**
 * find taskIndex with @param id
 * make updateTask {id + {updates} }
 * and changed taskIndex to updateTask
 * return updateTask
 * @param id
 * @param updates
 * @return {Promise<*&{id}>}
 */
const update = async (id, updates) => {
  const taskIndex = Tasks.findIndex(task => task.id === id);
  const updatedTask = {
    id,
    ...updates
  };
  Tasks.splice(taskIndex, 1, updatedTask);
  return updatedTask;
}
/**
 * re saved [Tasks] without (task with @param id)
 * return 'The task has been deleted'
 * @param id
 * @return {Promise<string>}
 */
const remove = async (id) => {
  Tasks = Tasks.filter(task => task.id !== id);
  return 'The task has been deleted'
};
/**
 *  re saved [Tasks] without (task with @param boardId)
 * return 'The task has been deleted'
 * @param boardId
 * @return {Promise<string>}
 */
const removeBoardsTasks = async (boardId) => {
  Tasks = Tasks.filter(task => task.boardId !== boardId);
  return 'The task has been deleted'
}

/**
 * find [Tasks] with  @param userId
 * and re saved with userId = null
 * return 'The user's tasks have been deleted'
 *
 * @param userId
 * @return {Promise<string>}
 */
const removeUsersTasks = async (userId) => {
  Tasks = Tasks.map(task => {
    const taskCopy = task;
    if(task.userId === userId) {

      taskCopy.userId = null;
    }
    return taskCopy;
  });
  return 'The user\'s tasks have been deleted'
}

module.exports = { getAll, get, remove, save, update, removeBoardsTasks, removeUsersTasks };