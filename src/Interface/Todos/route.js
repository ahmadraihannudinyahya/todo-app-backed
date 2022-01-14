const express = require('express');

const route = (handler) =>{
  const router = express.Router();
  router.post('/todos', handler.postTodosHandler);
  return router;
}

module.exports = route;