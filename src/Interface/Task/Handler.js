const handleDateToStringFormat = require('../../Helper/handleDateToStringFormat');

class TaskHandler{
  constructor({ taskValidation, todosRepository, taskRepository, }){
    this.taskValidation = taskValidation;
    this.todosRepository = todosRepository;
    this.taskRepository = taskRepository;

    this.postTaskHandler = this.postTaskHandler.bind(this);
    this.getTaskByTodoIdHandler = this.getTaskByTodoIdHandler.bind(this);
    this.putStatusTaskByTaskId = this.putStatusTaskByTaskId.bind(this);
    this.patchTaskByTaskIdHandler = this.patchTaskByTaskIdHandler.bind(this);
    this.deleteTaskByTaskIdHandler = this.deleteTaskByTaskIdHandler.bind(this);
  };

  async postTaskHandler(req, res, next){
    try {
      this.taskValidation.validatePostTaskPayload(req.body);
      await this.todosRepository.verifyTodosFound(req.params.todoId);
      const id = await this.taskRepository.addTask({...req.body, ...req.params});
      res.status(201).send({
        status : 'success',
        id,
      });
    } catch (error) {
      next(error);
    };
  }

  async getTaskByTodoIdHandler(req, res, next){
    try {
      const tasks = await this.taskRepository.getAllTaskByTodoId(req.params.todoId);
      res.send({
        status : 'success',
        tasks : tasks.map(task => ({
          id : task.id, 
          task : task.task, 
          status : task.status, 
          todoId : task.todoId, 
          createdAt : handleDateToStringFormat(task.createdAt), 
        })),
      });
    } catch (error) {
      next(error);
    };
  }

  async putStatusTaskByTaskId(req, res, next){
    try {
      await this.taskRepository.verifyTaskFound(req.params.taskId);
      await this.taskRepository.toogleStatusTaskById(req.params.taskId);
      res.send({
        status : 'success',
        id : req.params.taskId,
      })
    } catch (error) {
      next(error);
    };
  }

  async patchTaskByTaskIdHandler(req, res, next){
    try {
      this.taskValidation.validatePatchTaskPayload(req.body);
      await this.taskRepository.verifyTaskFound(req.params.taskId);
      await this.taskRepository.editTaskById(req.body, req.params.taskId);
      res.send({
        status : 'succes',
        id : req.params.taskId,
      })
    } catch (error) {
      next(error);
    };
  }

  async deleteTaskByTaskIdHandler(req, res, next){
    try {
      await this.taskRepository.verifyTaskFound(req.params.taskId);
      await this.taskRepository.deleteTaskById(req.params.taskId);
      res.send({
        status : 'success',
        id : req.params.taskId, 
      })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TaskHandler;