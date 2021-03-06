const { Task } = require('../../models');
const NotFoundError = require('../Commons/NotFoundError');


const TaskRepository = {
  addTask : async (payload) =>{
    const id = `task-${Date.now()}${Math.floor(Math.random()*10)}`
    await Task.create({...payload, id, status : "onGoing"});
    return id;
  },
  getAllTaskByTodoId : async (todoId) =>{
    return Task.findAll({
      where : {
        todoId
      },
      order : [
        ['createdAt', 'ASC']
      ],
    });
  },
  verifyTaskFound : async (id) =>{
    const task = await Task.findOne({
      where : {
        id
      }
    });
    if(!task){
      throw new NotFoundError('task not found');
    };
  },
  editTaskById : async (payload, id) => {
    await Task.update(payload, {
      where : {
        id
      },
    });
  },
  deleteTaskById : async (id) =>{
    await Task.destroy({
      where : {
        id, 
      }, 
    });
  },
  deleteAllTaskByTodoId : async (todoId) => {
    await Task.destroy({
      where : {
        todoId
      },
    });
  },
  toogleStatusTaskById : async (id) => {
    const { status } = await Task.findOne({
      where : {
        id, 
      },
    });
    await Task.update(
      {
        status : status === 'onGoing' ? 'completed' :'onGoing',
      }, {
        where : {
          id, 
      }, 
    });
  }
};

module.exports = TaskRepository;