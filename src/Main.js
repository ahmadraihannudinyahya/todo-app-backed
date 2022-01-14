require('dotenv').config();
const createServer = require('./HttpServer/createServer');
const todosValidation = require('./Validation/todos');
const todosRepository = require('./Repository/TodosRepository');

(()=>{
  const port = process.env.PORT;

  const container = {
    todosValidation,
    todosRepository
  }
  const app = createServer(container);
  app.listen(port);
})()
