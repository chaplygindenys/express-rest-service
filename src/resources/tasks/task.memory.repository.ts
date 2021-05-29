

type id = string|number|null ;

type taskParam ={
  title:string,
  order:number,
  description:string,
  boardId:string|null,
  userId:string|null,
  columnId:string|null

};

type task1  ={
  id:string|number|null
  title:string,
  order:number,
  description:string,
  boardId:string|null,
  userId:string|null,
  columnId:string|null

};
 let Tasks:task1[];

/**
 * filtered all tasks by boardId
 * return  tasks with @param boardId
 * @param boardId
 * @return {Promise<*[]>}
 */
export const getAllTasks= async (boardId:id) => {
  const tasks = Tasks.filter(task => task.boardId === boardId)
  if(!tasks) {
    throw new Error('Not found');
  }
  return tasks;
};

/**
 *  filtered all tasks by @param id
 * return  task with @param id
 * @return {Promise<*>}
 * @param TaskId
 */
export  const getTask = async (TaskId:id) => {
  const currentTask = Tasks.find(task => task.id === TaskId);
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
export const saveTask = async (task:task1) => {
  Tasks.push(task)
  return task;
};

/**
 * find taskIndex with @param id
 * make updateTask {id + {updates} }
 * and changed taskIndex to updateTask
 * return updateTask
 * @param TaskId
 * @param updates
 * @return {Promise<*&{id}>}
 */
export const updateTask = async (TaskId:string|number|null, updates:taskParam) => {
  const taskIndex = Tasks.findIndex(task => task.id === TaskId);
  const updatedTask:task1 = {
    id:TaskId,
    ...updates
  };
  Tasks.splice(taskIndex, 1, updatedTask);
  return updatedTask;
}
/**
 * re saved [Tasks] without (task with @param id)
 * return 'The task has been deleted'
 * @return {Promise<string>}
 * @param TaskId
 */
export const removeTask = async (TaskId:string|number|null) => {
  Tasks = Tasks.filter(task => task.id !== TaskId);
  return 'The task has been deleted'
};
/**
 *  re saved [Tasks] without (task with @param boardId)
 * return 'The task has been deleted'
 * @param boardId
 * @return {Promise<string>}
 */
export const removeBoardsTasksById = async (boardId:id) => {
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

export const removeUsersTasksById = async (userId:id) => {
  Tasks = Tasks.map(task => {
    const taskCopy = task;
    if(task.userId === userId) {

      taskCopy.userId = null;
    }
    return taskCopy;
  });
  return 'The user\'s tasks have been deleted'
}

