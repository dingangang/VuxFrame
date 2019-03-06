<template>
  <div>
    <x-header class="pm-header">活动</x-header>
    <tab
      :line-width="1"
    >
      <tab-item
        selected
        @on-item-click="handeTabItemClick"
      >全部</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >亲子互动</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >创意生活</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >活动分类</tab-item>
    </tab>
    <div class="tab-panes">
      <div class="tab-pane" v-if="currentTabIndex === 0">
        <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
        >
          <activity-list
            :list="activities.all"
          ></activity-list>
          <div
            v-if="activities.all.length > 0"
            class="text-center text-weakening"
            style="line-height:2.4rem"
          >加载更多</div>
        </div>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 1">
        <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
        >
          <activity-list
            :list="activities.parenting"
          ></activity-list>
          <div
            v-if="activities.parenting.length > 0"
            class="text-center text-weakening"
            style="line-height:2.4rem"
          >加载更多</div>
        </div>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 2">
        <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
        >
          <activity-list
            :list="activities.creative"
          ></activity-list>
          <div
            v-if="activities.creative.length > 0"
            class="text-center text-weakening"
            style="line-height:2.4rem"
          >加载更多</div>
        </div>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 3">
        <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
        >
          <activity-list
            :list="activities.category"
          ></activity-list>
          <div
            v-if="activities.category.length > 0"
            class="text-center text-weakening"
            style="line-height:2.4rem"
          >加载更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityList from './components/ActicvityList'

export default {
  name: 'ActivityPage',
  created() {
    this.getActivityData()
  },
  data() {
    return {
      scrollLock: true,
      currentTabIndex: 0,
      activities: {
        all: [],
        parenting: [],
        creative: [],
        category: []
      }
    }
  },
  components: {
    ActivityList
  },
  methods: {
    /**
     * 图片错误
     */
    onImgError(params) {
      console.log('图片出错了', params)
    },
    /**
     * 滚动加载，请根据对应的currentTabIndex来判别需要加载的对象
     */
    loadMore() {
      if (!this.scrollLock) {
        console.log('触发滚动加载事件')
      }
    },
    /**
     * 获取活动数据
     */
    getActivityData() {
      this.axios.get('/get-activity-data')
        .then((res) => {
          // 此处拉取全部的数据？看后台情况看是否需要异步加载。
          console.log('活动数据', res)
          // 演示用模拟数据，
          switch (this.currentTabIndex) {
            case 0:
              this.activities.all = res.data.dataset
              break
            case 1:
              this.activities.parenting = res.data.dataset
              break
            case 2:
              this.activities.creative = res.data.dataset
              break
            case 3:
              this.activities.category = res.data.dataset
              break
            default:
              console.log('不匹配')
          }
          // 异可以在数据加载完成后来打开滚动加载
          this.scrollLock = false
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
      // 暂时关闭滚动加载判定
      this.scrollLock = true
      // 模拟点击事件加载数据
      this.getActivityData()
    },
  },
}
</script>

<style scoped>

</style>
