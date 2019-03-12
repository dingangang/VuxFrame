<template>
  <div>
    <x-header class="pm-header">修改昵称</x-header>
    <group>
      <x-input
        title="昵称"
        placeholder="请输入昵称"
        text-align="right"
        v-model="nickname"
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
  name: 'modi-nickname',
  created() {},
  data() {
    return {
      nickname: '我是昵称'
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
