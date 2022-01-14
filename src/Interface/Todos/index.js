const HandleTodos = require("./Handler");
const route = require("./route");

module.exports = ()=>{
  const handleTodos = new HandleTodos();
  return route(handleTodos);
};