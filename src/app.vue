<template>
  <div id="app">
    <div class="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "./todo/header.vue";
import Footer from "./todo/footer.jsx";
import Todo from "./todo/todo.vue"

export default {
  components: {
    Header,
    Footer,
    Todo
  },
  data() {
    return {
      msg: "这是app.vue组件"
    };
  }
};
</script>


<style lang="less" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  right: 0;
  height: 100%;
}
.cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  right: 0;
  background: #999;
  opacity: 0.9;
  z-index: -1;
  height: inherit;
}
</style>
