const {Todos} = require('../../models')
const TodosRepository = {
  addTodos : async (payload) =>{
    const id = `todos-${Date.now()}${Math.floor(Math.random()*10)}`;
    await Todos.create({...payload, id});
    return id;
  }
}
module.exports = TodosRepository;