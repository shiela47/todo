<template>
  <div :class="['todo-item',todo.completed ? 'completed' : '']">
    <input class="toggle" type="checkbox" v-model="todo.completed">
    <label>item:{{todo.content}}</label>
    <button class="destory" @click="delTodo"></button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    delTodo() {
      console.log("点击del按钮...");
    }
  }
};
</script>

<style lang="less" scoped>
.todo-item {
  position: relative;
  background-color: #fff;
  font-size: 1.5rem;
  border-bottom: 0.625rem solid rgba(0, 0, 0, 0.06);
  &:hover {
    .destory:after {
      content: "×";
    }
  }
  label {
    white-space: pre-line;
    word-break: break-all;
    display: block;
    line-height: 1.2rem;
    padding: 0.9375rem 3.75rem 0.9375rem 3.75rem;
    transition: color 0.4s;
  }
  &.completed {
    label {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }
}

.toggle {
  text-align: center;
  width: 2.5rem;
  height: 1.4rem;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
  outline: none;
  &:after {
    content: url("../assets/images/round.svg");
  }
  &:checked:after {
    content: url("../assets/images/done.svg");
  }
}
.destory {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0.625rem;
  margin: auto 0;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  font-size: 1rem;
  color: #c34141;
  outline: none;
  background-color: #fff;
}
</style>
