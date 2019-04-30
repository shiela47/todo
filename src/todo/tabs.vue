<template>
  <div class="helper">
    <div class="left">2 items left</div>
    <div class="tabs">
      <span
        :class="[state,filter == state ? 'actived' : '']"
        v-for="state in states"
        :key="state"
        @click="toggleFileer(state)"
      >{{state}}</span>
    </div>
    <div class="clear" @click="clearAllCompleted">clear completed</div>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  methods: {
    clearAllCompleted() {
      console.log("清除已完成的");
    },
    toggleFileer(state) {
      console.log("切换状态:"+state);
    }
  }
};
</script>

<style lang="less" scoped>
.helper {
    display: flex;
    font-weight: 100;
    justify-content: space-between;
    padding: 0.3125rem 0;
    line-height: 1.875rem;
    background-color: #fff;
    font-size: 0.875rem;
}

.left,
.tabs,
.clear {
    box-sizing: border-box;
    padding: 0 0.625rem;
}

.left {
    width:9.375rem;
    text-align: left
}
.clear {
    text-align: right;
    cursor: pointer;
    width:9.5rem;
}
.tabs {
    width: 12.5rem;
    display: flex;
    justify-content: space-around;
    * {
        display: inline-block;
        padding: 0 0.625rem;
        cursor: pointer;
        border: 0.0625rem solid rgba(175,47,47,0);
        &.actived{
            border: 0.0625rem solid rgba(175,47,47,0.4);
            border-radius: 0.3135rem;
        }
    }
}
</style>
