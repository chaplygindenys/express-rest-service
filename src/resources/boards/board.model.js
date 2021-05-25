const { v4: uuidv4 } = require('uuid');
const Column = require('./column.model');


class Board {
  /**
   * assigns param id:string new  id:string
   * takes parameters and assigns them to the properties
   * of the class
   * @param id:string
   * @param title:string
   * @param columns:[{string,string,number}]
   */
  constructor({
                id = uuidv4(),
                title = 'BOARD TITLE',
                columns = [{
                  id: uuidv4(),
                  title: 'columnTitle',
                  order: 0
                }]
              } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(column => new Column(column));

  };
}
module.exports = Board;