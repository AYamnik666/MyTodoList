<template>
  <section>
  <div class="container">
    <h3>TodoList</h3>
    <TodoItem />
    <TodoItem />
    <TodoItem />
  </div>
   </section>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  components:{
    TodoItem
  },
  

  data() {
    return {

    }
  },
  created(){
    this.message= this.$store.getters.getMessage
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  background: rgb(233, 233, 233);
  border: 1px solid rgb(199, 198, 198);
  
}
img {
  max-width: 200px;
}
</style>
