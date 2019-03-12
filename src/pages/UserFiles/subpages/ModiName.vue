<template>
  <div>
    <x-header class="pm-header">修改真实姓名</x-header>
    <group>
      <x-input
        title="真实姓名"
        placeholder="请输入真实姓名"
        text-align="right"
        v-model="name"
      ></x-input>
    </group>
    <div class="pm-confirm-btn text-center">
      <a
        @click="handleComfirm"
      >确认修改</a>
    </div>
  </div>
</template>


<script>
export default {
  name: 'modi-name',
  created() {},
  data() {
    return {
      name: '我是真实姓名'
    }
  },
  methods: {
    /**
     * 处理退出按钮点击事件
     */
    handleComfirm() {
      console.log('完成修改，并返回')
    }
  },
}
</script>
