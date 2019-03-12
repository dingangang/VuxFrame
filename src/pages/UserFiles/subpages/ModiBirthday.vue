<template>
  <div>
    <x-header class="pm-header">修改生日</x-header>
    <group>
      <datetime
        class="hide-arrow"
        v-model="brithDay"
        @on-change="change"
        title="生日"

        @on-confirm="onConfirm"
        ></datetime>
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
  name: 'modi-brithday',
  created() {},
  data() {
    return {
      brithDay: '2010-08-08'
    }
  },
  methods: {
    change(event) {
      console.log('event->>', event)
    },
    onConfirm(event) {
      console.log('on confirm', event)
    },
    /**
     * 处理退出按钮点击事件
     */
    handleComfirm() {
      console.log('完成修改，并返回')
    }
  },
}
</script>
