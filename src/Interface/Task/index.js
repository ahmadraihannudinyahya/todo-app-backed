const TaskHandler = require("./Handler");
const route = require("./route");

module.exports = (container) =>{
  const taskHandler = new TaskHandler(container);
  return route(taskHandler);
}