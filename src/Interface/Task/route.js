const express = require('express');

const route = (handler) =>{
  const router = express.Router();
  router.post('/task/todoId/:todoId', handler.postTaskHandler);
  router.get('/task/todoId/:todoId', handler.getTaskByTodoIdHandler);
  return router;
}

module.exports = route;