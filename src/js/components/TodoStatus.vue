<template>
  <section>
  <div>
    <h3>TodoStatus</h3>
    <ul>
      <li>
        <button @click="changeTab" :class="{active:completed} ">Done</button>
      </li>
      <li>
        <button @click="changeTab" :class="{active:!completed}">Need to do</button>
      </li>
    </ul>
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
  justify-content: space between;
  flex-direction: column;
}
img {
  max-width: 200px;
}
.active {
  outline: none;
  color: white;
  background-color: rgb(156, 142, 220);
   width: 120px;
  height: 40px;
  margin: 10px 5px 10px 5px;
}

</style>
