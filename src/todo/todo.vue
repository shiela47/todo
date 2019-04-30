<template>
  <section class="todo-box">
    <input type="text" class="add-input" autofocus placeholder="接下来做什么？" @keyup.enter="addToDo">
    <Item v-for="todo in todos" :todo="todo" :key="todo.id"></Item>
    <Tabs :filter="filter"></Tabs>
  </section>
</template>

<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
let id = 0;
export default {
  components: {
      Item,
      Tabs
  },
  data(){
      return{
          todos:[],
          // todo:{
          //     id:0,
          //     content:'this is todo',
          //     completed:false
          // },
          filter:'all'
      }
  },
  methods: {
    addToDo(e) {
      console.log("click 回车...");
      console.log(e);
      this.todos.unshift({
        id:id++,
        content:e.target.value.trim(),
        completed:false
      })
      e.target.value = '';
    }
  }
};
</script>


<style lang="less" scoped>
.todo-box {
  width: 37.5rem;
  margin: 0 auto;
  box-shadow: 0 0 0.3125rem #666;
}

.add-input {
  position: relative;
  font-size: 1rem;
  padding: 0;
  width: 100%;
  outline: none;
  font-weight: inherit;
  font-family: inherit;
  border: none;
  padding: 1rem 1rem 1rem 3.75rem;
  line-height: 1.1rem;
  color: inherit;
  box-sizing: border-box;
  box-shadow: inset 0 -0.125rem 0.0625rem rgba(0, 0, 0, 0.1);
}
</style>
