const { Task } = require('../../models')

const TaskRepository = {
  addTask : async (payload) =>{
    const id = `task-${Date.now()}${Math.floor(Math.random()*10)}`
    await Task.create({...payload, id, status : "onGoing"});
    return id;
  },
};

module.exports = TaskRepository;