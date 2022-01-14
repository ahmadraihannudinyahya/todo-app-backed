const express = require('express');

const route = (handler) =>{
  const router = express.Router();
  router.post('/task/todoId/:todoId', handler.postTaskHandler)
  return router;
}

module.exports = route;