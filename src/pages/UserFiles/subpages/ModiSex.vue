<template>
  <div>
    <x-header class="pm-header">修改性别</x-header>
    <group>
      <popup-picker
        class="hide-arrow"
        title="性别"
        :data="sexList"
        v-model="sex"
        @on-show="onShow"
        @on-hide="onHide"
        @on-change="onChange"
        placeholder="请选择"
      ></popup-picker>
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
  name: 'modi-sex',
  created() {},
  data() {
    return {
      sexList: [['男', '女']],
      sex: []
    }
  },
  methods: {
    /**
     * 处理退出按钮点击事件
     */
    handleComfirm() {
      console.log('完成修改，并返回')
    },
    onShow() {
      console.log('on show')
    },
    onHide() {
      console.log('on hide')
    },
    onChange(event) {
      console.log('on change  event', event)
    }
  },
}
</script>
