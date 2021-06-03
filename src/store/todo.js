export default {
  state:{
message: 'hello vuex!!!!!',
todos:[
  {
  id: 1,
  title: 'One',
  },
  {
    id: 2,
    title: 'Two',
    },
    {
      id: 3,
      title: 'Three',
      },
  ],
  mutations: {
add_todo(state, todo){
  state.todos.push(todo);
  console.log(todo);
},
  },
  actions:{
    addTodo({commit}, todo){
  commit("add-todo", todo);
},
  },
  getters:{
getMessage(state){
return state.message
},
allTodos:(state) => state.dodos,
  },
}
}