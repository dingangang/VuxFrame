<template>
  <div>
    <x-header class="pm-header">申请退款</x-header>
    <div style="background: #f8f9fa;">
      <order-list
        :data="refundOrder"
        :showRefund="false"
      ></order-list>
    </div>
    <group>
      <x-input
        title="退款人"
        v-model="refundForm.name"
        text-align="right"
      ></x-input>
      <x-input
        title="手机号码"
        v-model="refundForm.phone"
        :disabled="true"
        text-align="right"
      ></x-input>
      <x-input
        title="退款原因"
        v-model="refundForm.reason"
        text-align="right"
      ></x-input>
    </group>
    <div class="pm-confirm-btn">
      <a
        @click.prevent="handleSubmit"
      >提交</a>
    </div>
  </div>
</template>


<script>
import OrderList from '@/components/order-list/order-list'

export default {
  name: 'order-refund',
  created() {
    this.getRefundOrder()
    // 模拟设置电话
    this.refundForm.phone = 13888888888
  },
  data() {
    return {
      orderId: this.$route.params.orderId,
      refundOrder: [],
      refundForm: {
        name: '',
        phone: '',
        reason: ''
      }
    }
  },
  components: {
    OrderList
  },
  methods: {
    /**
     * 获取退款信息
     */
    getRefundOrder() {
      const params = { orderId: this.orderId }
      this.axios.post('/get-refund-data1', params)
        .then((res) => {
          console.log('退款的订单是', res)
          this.refundOrder = res.data.dataset
        })
        .catch((err) => {
          console.error(err)
        })
    },
    /**
     * 处理提交
     */
    handleSubmit() {
      console.log('提交')
      this.$vux.toast.show({
        text: '申请成功',
        type: 'sucess',
        onHide: () => {
          console.log('在此时再跳转链接')
        }
      })
    }
  },
}
</script>
