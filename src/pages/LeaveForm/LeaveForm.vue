<template>
  <div>
    <x-header class="pm-header">请假</x-header>
    <group class="pm-group">
      <x-input
        v-model="leaveForm.reason"
        title="请假原因"
        placeholder="请输入请假原因"
        text-align="right"
      ></x-input>
      <datetime
        v-model="leaveForm.startTime"
        title="开始日期"
      ></datetime>
      <datetime
        v-model="leaveForm.endTime"
        title="结束日期"
      ></datetime>
      <x-input
        v-model="leaveForm.text"
        title="请假说明"
        placeholder="请输如请假说明"
        text-align="right"
      ></x-input>
    </group>
    <div
      class="pm-confirm-btn text-center"
      :class="btnStatus?'': 'pm-confirm-btn--disabled'"
    >
      <a
        @click="handleComfirm"
      >确认请假</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'leave-form',
  created() {},
  data() {
    return {
      leaveForm: {
        reason: '',
        startTime: '',
        endTime: '',
        text: ''
      }
    }
  },
  computed: {
    btnStatus () {
      let status = true
      Object.keys(this.leaveForm)
        .forEach((key) => {
          if (key !== 'text' && this.leaveForm[key].length === 0) {
            status = false
          }
        })
      return status
    },
    ...mapState({
      userId: state => state.userId,
      role: state => state.role
    }),
  },
  methods: {
    /**
     * 处理退出按钮点击事件
     */
    handleComfirm() {
      if (this.btnStatus) {
        this.$vux.toast.show({
          text: '请假成功',
          type: 'sucess',
          onHide: () => {
            console.log('完成请假，并返回')
          }
        })
      }
    }
  },
}
</script>

<style scoped lang="scss">

</style>
