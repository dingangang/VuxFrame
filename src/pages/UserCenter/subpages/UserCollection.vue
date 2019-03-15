<template>
  <div>
    <x-header
      class="pm-header"
      title="slot:overwrite-title"
    >
      <div class="pm-title-tab" slot="overwrite-title">
        <button-tab>
          <button-tab-item
            @on-item-click="handleTitleTabClick"
            selected
          >
            课程
          </button-tab-item>
          <button-tab-item
            @on-item-click="handleTitleTabClick"
          >
            活动
          </button-tab-item>
        </button-tab>
      </div>
    </x-header>
    <div class="pm-tab">
      <div class="pm-tab-pane" v-if="currentTab === 0">
        <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
        >
          <pm-panel
            :list="lessons"
            @on-img-error="onImgError"
            type="2"
          ></pm-panel>
          <div
            v-if="lessons.length > 0"
            class="text-center text-weakening"
            style="line-height:2.4rem;"
          >加载更多</div>
        </div>
      </div>
      <div class="pm-tab-pane" v-if="currentTab === 1">
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
    </div>
  </div>
</template>

<script>
import ActivityList from '@/components/activity-list/acticvity-list'

export default {
  name: 'user-collection',
  created() {
    this.getLessonData()
    this.getActivityData()
  },
  data() {
    return {
      currentTab: 0,
      scrollLock: true,
      lessons: [],
      activities: [],
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
    /**
     * 获取课程信息,
     */
    getLessonData() {
      console.log('请根据currentTabIndex判别需要加载的课程类型')
      this.axios.get('/get-lessons-data')
        .then((res) => {
          console.log('课程信息数据', res)
          this.lessons = res.data.dataset
          // 可以在数据加载完成后来打开滚动加载
          this.scrollLock = false
        })
        .catch((err) => {
          console.error(err)
        })
    },
    /**
     * 图片错误
     */
    onImgError(params) {
      console.log('图片出错了', params)
    },
    /**
     * 处理标题tab点击事件
     * @param {Number} index 点击tab的index
     */
    handleTitleTabClick(index) {
      this.currentTab = index
    },
  },
}
</script>

<style scoped lang="scss">
.pm-title-tab {
  height: 40px;

  .vux-button-group {
    justify-content: space-around;

    .vux-button-group-current {
      background: transparent;
      color: #3eba45;
      border-bottom: 1px solid #3eba45;
    }
  }

  .vux-button-tab-item {
    position: relative;
    flex: 1;
    height: 40px;
    line-height: 40px;
    border-radius: 0;
    color: $color-text-secondary;

    &::after {
      content: none;
    }

    .vux-badge {
      position: absolute;
      right: -1.3125rem;
      top: 2px;

      &.vux-badge-single {
        right: -0.6875rem;
      }
    }
  }
}
</style>
