<template>
  <div>
    <x-header class="pm-header">我的活动</x-header>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
      >
        <activity-list
          :list="activities"
        ></activity-list>
        <div
          v-if="activities.length > 0"
          class="text-center text-weakening"
          style="line-height:2.4rem;"
        >加载更多</div>
      </div>
  </div>
</template>

<script>
import ActivityList from '@/components/activity-list/acticvity-list'

export default {
  name: 'user-activity',
  created() {
    this.getActivityData()
  },
  data() {
    return {
      activities: [],
      scrollLock: false
    }
  },
  components: {
    ActivityList
  },
  methods: {
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
          console.log('活动数据', res)
          this.activities = res.data.list
          // 异可以在数据加载完成后来打开滚动加载
          this.scrollLock = false
        })
        .catch((err) => {
          console.error(err)
        })
    },
  },
}
</script>

<style scoped lang="scss">

</style>
