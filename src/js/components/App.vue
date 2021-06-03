<template>
  <section>
  <div>
        <div class="container">
          <h1>My Todo List</h1>
      <img src="/assets/img/logo.png" :alt="message" />
    </div>
          <TodoInput />
          <TodoList />
          <TodoStatus />
  </div>
   </section>
</template>

<script>
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'
import TodoStatus from './TodoStatus.vue'
export default {
  components: { TodoInput, TodoList , TodoStatus},
  data() {
    return {
     
    }
  },
  created(){
   
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  font-size: 3rem;
  color: rgb(105, 105, 103);
  font-family: Calibri;

}
img {
  max-width: 200px;
    padding:  1rem 0 2rem 0;
}
</style>
