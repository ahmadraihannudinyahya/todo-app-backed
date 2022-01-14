const HandleTodos = require("./Handler");
const route = require("./route");

module.exports = (container) =>{
  const handleTodos = new HandleTodos(container);
  return route(handleTodos);
};