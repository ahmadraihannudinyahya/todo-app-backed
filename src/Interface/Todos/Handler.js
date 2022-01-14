class HandleTodos{
  constructor({todosValidation, todosRepository}){
    this.todosRepository = todosRepository;
    this.todosValidation = todosValidation;

    this.postTodosHandler = this.postTodosHandler.bind(this);
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
}
module.exports = HandleTodos;