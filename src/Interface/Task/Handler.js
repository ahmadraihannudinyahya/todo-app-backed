class TaskHandler{
  constructor({ taskValidation, todosRepository, taskRepository, }){
    this.taskValidation = taskValidation;
    this.todosRepository = todosRepository;
    this.taskRepository = taskRepository;

    this.postTaskHandler = this.postTaskHandler.bind(this);
  };

  async postTaskHandler(req, res, next){
    try {
      this.taskValidation.validatePostTaskPayload(req.body);
      await this.todosRepository.verifyTodosFound(req.params.todoId);
      const id = await this.taskRepository.addTask({...req.body, });
      res.status(201).send({
        status : 'success',
        id
      })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TaskHandler;