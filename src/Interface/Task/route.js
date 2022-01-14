const express = require('express');

const route = (handler) =>{
  const router = express.Router();
  router.post('/task/todoId/:todoId', handler.postTaskHandler);
  router.get('/task/todoId/:todoId', handler.getTaskByTodoIdHandler);
  router.put('/task/:taskId', handler.putStatusTaskByTaskId);
  router.patch('/task/:taskId', handler.patchTaskByTaskIdHandler);
  return router;
}

module.exports = route;