<template>
  <section>
  <div class="container">
    <h3>TodoItem</h3>
    <h5>#1</h5>
    <h3>Todo Title</h3>
    <div class="item-button">
    <button class="item-button-edit">Edit</button>
    <button class="item-button-del">Delete</button>
  </div>
  </div>
   </section>
</template>

<script>
export default {
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
  justify-content: border-between;
  flex-direction: row;
}
img {
  max-width: 200px;
}
.item-button-edit,  .item-button-del{
  background: rgb(156, 142, 220);
  width: 80px;
  height: 40px;
  margin: 10px 5px 10px 5px;
}
.item-button-del{
  background: rgb(192, 110, 128);

}

.item-button{
  display: flex;
  flex-direction: space between;
  align-content: flex-end;
  margin-left: 500px;}
</style>
