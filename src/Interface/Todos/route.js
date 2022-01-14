const express = require('express');

const route = (handler) =>{
  const router = express.Router();
  router.post('/todos', handler.postTodosHandler);
  router.get('/todos', handler.getAllTodosHandler);
  router.get('/todos/:id', handler.getTodoByIdHandler);
  return router;
}

module.exports = route;