const { v4: uuidv4 } = require('uuid');




  class Task {
  constructor({
                id = uuidv4(),
                title = 'TaskTitle',
                order = 0,
                description = 'TaskDescription',
                userId = null,
                boardId = null,
                columnId = null
              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }

  static fromRequest(body) {
    return new Task(body);
  }
}


module.exports = Task;
