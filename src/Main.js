require('dotenv').config();
const createServer = require('./HttpServer/createServer');
const todosValidation = require('./Validation/todos');
const taskValidation = require('./Validation/task');
const todosRepository = require('./Repository/TodosRepository');
const taskRepository = require('./Repository/TaskRepository');

(()=>{
  const port = process.env.PORT;

  const container = {
    todosValidation, 
    taskValidation, 
    todosRepository, 
    taskRepository, 
  }
  const app = createServer(container);
  app.listen(port);
})()
