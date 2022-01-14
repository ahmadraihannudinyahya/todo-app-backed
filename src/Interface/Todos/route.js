const express = require('express');

const route = (handler) =>{
  const router = express.Router();
  router.post('/todos', handler.postTodosHandler);
  router.get('/todos', handler.getAllTodosHandler)
  return router;
}

module.exports = route;