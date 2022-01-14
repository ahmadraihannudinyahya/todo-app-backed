const handleDateToStringFormat = require('../../Helper/handleDateToStringFormat');

class HandleTodos{
  constructor({todosValidation, todosRepository, taskRepository}){
    this.todosRepository = todosRepository;
    this.todosValidation = todosValidation;
    this.taskRepository = taskRepository;

    this.postTodosHandler = this.postTodosHandler.bind(this);
    this.getAllTodosHandler = this.getAllTodosHandler.bind(this);
    this.getTodoByIdHandler = this.getTodoByIdHandler.bind(this);
    this.editTodosByIdHandler = this.editTodosByIdHandler.bind(this);
    this.deleteTodosByIdHandler = this.deleteTodosByIdHandler.bind(this);
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

  async getTodoByIdHandler(req, res, next){
    try {
      const todo = await this.todosRepository.getTodoById(req.params.id);
      res.send({
        status : 'success',
        todo : {
          id : todo.id, 
          title : todo.title, 
          desc : todo.desc, 
          createdAt : handleDateToStringFormat(todo.createdAt), 
        }, 
      });
    } catch (error) {
      next(error);
    }
  }

  async editTodosByIdHandler(req, res, next){
    try {
      this.todosValidation.ValidatePatchTodosPayload(req.body);
      await this.todosRepository.editTodosById(req.body, req.params.id);
      res.send({
        status : 'success',
        id : req.params.id
      })
    } catch (error) {
      next(error);
    }
  }

  async deleteTodosByIdHandler(req, res, next){
    try {
      await this.todosRepository.verifyTodosFound(req.params.id);
      await this.taskRepository.deleteAllTaskByTodoId(req.params.id);
      await this.todosRepository.deleteTodosById(req.params.id);
      res.send({
        status : 'success',
        id : req.params.id, 
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = HandleTodos;