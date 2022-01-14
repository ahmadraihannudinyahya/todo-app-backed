const {Todos} = require('../../models');
const NotFoundError = require('../Commons/NotFoundError');

const TodosRepository = {
  addTodos : async (payload) =>{
    const id = `todos-${Date.now()}${Math.floor(Math.random()*10)}`;
    await Todos.create({...payload, id});
    return id;
  },
  getAllTodos : async () =>{
    return Todos.findAll();
  },
  getTodoById : async (id) => {
    return Todos.findOne({
      where : {
        id
      }
    });
  },
  editTodosById : async (payload, id)=>{
    await Todos.update(payload, {
      where : {
        id
      },
    });
  },
  verifyTodosFound : async (id) => {
    const todo = await Todos.findOne({
      where : {
        id
      }
    });
    if(!todo){
      throw new NotFoundError('todos not found');
    }
  }
}
module.exports = TodosRepository;