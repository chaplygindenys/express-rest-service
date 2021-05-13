const Task = require('./task.model');
const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const get = id => tasksRepo.get(id);
const postTask = task =>tasksRepo.postTask(new Task(task));
const putTask= (id, task) => tasksRepo.putTask(id, task);
const deleteTask = id => tasksRepo.deleteTask(id);
module.exports = { deleteTask};
module.exports = { putTask};
module.exports = { postTask};
module.exports = { get };
module.exports = { getAll };
