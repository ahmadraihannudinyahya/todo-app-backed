const {Todos} = require('../../models')
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
}
module.exports = TodosRepository;