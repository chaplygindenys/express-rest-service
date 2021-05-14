const { v4: uuidv4 } = require('uuid');

class Board {
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
    this.columns =[];
    this.columns.push(columns[0]);
  }



  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns};
  }

  static fromRequest(board) {
    const {
      id ,
        title,
        columns} = board;
    if (!id){
      return { id:uuidv4(), title, columns};
    }
    return { id, title, columns};
  }

}

module.exports = Board;
