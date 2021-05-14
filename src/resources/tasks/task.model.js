const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({
                id = uuidv4(),
                title = 'string',
                order = 0,
                description = 'Lorem ipsum',
                userId = 'string'

              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
  }

  static toResponse(task) {
    const {id,
      title,
      order,
      description,
      userId,} = task;
    return { id,
      title,
      order,
      description,
      userId, };
  }

  static fromRequest(task) {
    const {
      id,
      title,
      order,
      description,
      userId,
    } = task;
    if (id === undefined) {
      return {
        id: uuidv4(),
        title,
        order,
        description,
        userId,
      };
    }
    return {
      id,
      title,
      order,
      description,
      userId,
    };
  }

}

module.exports = Task;
