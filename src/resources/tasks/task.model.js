const { v4: uuidv4 } = require('uuid');

class Task {
  /**
   * assigns param id:string new  id:string
   * takes parameters and assigns them to the properties
   * of the class
   * @param id
   * @param title
   * @param boardId
   * @param order
   * @param description
   * @param userId
   * @param columnId
   */
  constructor({
                id = uuidv4(),
                title = 'testTask',
                boardId,
                order,
                description,
                userId,
                columnId = [{}] ,
              } = {}) {
    this.id = id;
    this.title = title;
    this.boardId = boardId;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.columnId = columnId
  }

  /**
   * cut all method of the object {task}
   * @param task
   * @return {{columnId, description, boardId, id, title, userId, order}}
   */
  static toResponse(task) {
    const { id, title, order, description, userId} = task;
    return { id, title, order, description, userId};
  }

}

module.exports = Task;
