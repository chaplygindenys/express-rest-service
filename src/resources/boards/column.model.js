const uuid = require('uuid').v4;


class Column {
  /**
   * assigns param id:string new  id:string
   * takes parameters and assigns them to the properties
   * of the class
    * @param id
   * @param title
   * @param order
   */
  constructor({
    id = uuid(),
    title = 'Default',
    order = 1
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;