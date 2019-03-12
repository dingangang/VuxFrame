<template>
  <div>
    <x-header class="pm-header">我的订单</x-header>
    <tab
      :line-width="1"
      class="pm-compact-tab"
    >
      <tab-item
        selected
        @on-item-click="handeTabItemClick"
      >全部</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >已支付</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >待支付</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >已取消</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >退款</tab-item>
    </tab>
    <div class="tab-panes" style="background: #f8f9fa;">
      <div class="tab-pane" v-if="currentTabIndex === 0">
        <order-list
          :data="orders.dataset"
          @on-refund="handleRefund"
        ></order-list>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 1">
        <order-list
          :data="orders.dataset"
          @on-refund="handleRefund"
        ></order-list>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 2">
        <order-list
          :data="orders.dataset"
          @on-refund="handleRefund"
        ></order-list>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 3">
        <order-list
          :data="orders.dataset"
          @on-refund="handleRefund"
        ></order-list>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 4">
        <order-list
          :data="orders.dataset"
          @on-refund="handleRefund"
        ></order-list>
      </div>
    </div>
  </div>
</template>

<script>
import OrderList from '@/components/order-list/order-list'

export default {
  name: 'order-page',
  created() {
    this.getOrderList()
  },
  data() {
    return {
      currentTabIndex: 0,
      orders: {
        dataset: []
      }
    }
  },
  components: {
    OrderList
  },
  methods: {
    /**
     * 处理退款按钮点击事件
     * @param {Object} item 当前点击的对象
     */
    handleRefund(item) {
      console.log('要退款的对象是->>> ', item)
      this.$router.push({ path: `/order-refund/${item.id}` })
    },
    /**
     * 获取课程详细信息,此处我全部从一个接口出了，实际请试具体环境
     */
    getOrderList() {
      this.axios.get('/get-orders-data')
        .then((res) => {
          console.log('订单列表', res)
          this.orders.dataset = res.data.dataset
        })
        .catch((err) => {
          console.error(err)
        })
    },
    /**
     * 处理tab页签点击事件
     * @param {Number} index 当前 tabItem序号
     */
    handeTabItemClick(index) {
      console.log('index->>>', `${index}`)
      this.currentTabIndex = index
      // 模拟点击事件加载数据，也可以存多个变量，后续不在请求接口
      this.getOrderList()
    },
    /**
     * 图片错误
     */
    onImgError(params) {
      console.log('图片出错了', params)
    },
  },
}
</script>
