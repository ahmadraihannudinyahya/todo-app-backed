const handleDateToStringFormat = require('../../Helper/handleDateToStringFormat');

class HandleTodos{
  constructor({todosValidation, todosRepository}){
    this.todosRepository = todosRepository;
    this.todosValidation = todosValidation;

    this.postTodosHandler = this.postTodosHandler.bind(this);
    this.getAllTodosHandler = this.getAllTodosHandler.bind(this);
  }

  async postTodosHandler(req, res, next){
    try {
      this.todosValidation.validatePostTodosPayload(req.body);
      const id = await this.todosRepository.addTodos(req.body);
      res.status(201).send({
        status : 'success',
        id
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllTodosHandler(req, res, next){
    try {
      const Todos = await this.todosRepository.getAllTodos();
      res.send({
        status : 'success',
        Todos : Todos.map(todo => ({
          id : todo.id, 
          title : todo.title, 
          desc : todo.desc, 
          createdAt : handleDateToStringFormat(todo.createdAt)
        }))
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = HandleTodos;