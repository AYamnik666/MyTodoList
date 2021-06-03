<template>
  <section>
  <div class="input-container">
    <input class="input-item" @change="todoTextChange"  v-bind:value ="todoText"  type="text" >
    <button @click="addTodoI" class="input-button">Add</button>
  </div>
   </section>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
      todoText: "Text for todoList"
    }
  },
   methods: {
    ...mapActions(["addTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
   addTodoI() {
     this.addTodo({
         id: v1(),
        title: this.todoText
       });
        this.todoText = "";
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
}
img {
  max-width: 200px;
}
.input-container{
height: 120px;
position: center;

}
.input-item{
  border: 1px solid grey;
  font-size: 1rem;
  height: 50px;
  width: 60%;
  border-radius: 30px;
  align-items: center;
  padding-left:3% ;
}
.input-button{
  background: rgb(192, 212, 202);
  width: 100px;
  height: 50px;
  margin: 10px 5px 10px 5px;
   border-radius: 30px;
}
</style>
