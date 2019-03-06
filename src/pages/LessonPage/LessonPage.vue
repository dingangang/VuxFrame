<template>
  <div>
    <x-header
      class="pm-header"
    >
      {{title}}
      <a
        class="text-highlight"
        slot="right"
        href="#/somewhere"
      >更多</a>
    </x-header>
    <swiper
      class="pm-swiper--no-title pm-swiper--inner-page"
      :auto="true"
      :loop="true"
      height="9.5rem"
      :interval="5000"
      :list="swiperData"
      v-model="currentSwiperIndex"
      :min-moving-distance="120"
      @on-index-change="onSwiperChange"
    ></swiper>
    <tab
      :line-width="1"
      custom-bar-width="2rem"
      class="pm-tab"
    >
      <tab-item
        selected
        @on-item-click="handeTabItemClick"
      >全部</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >语文</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >数学</tab-item>
      <tab-item
        @on-item-click="handeTabItemClick"
      >英语</tab-item>
    </tab>
    <div class="tab-panes">
      <div class="tab-pane" v-if="currentTabIndex === 0">
        <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
        >
          <pm-panel
            :list="lessons.all"
            @on-img-error="onImgError"
            type="2"
          ></pm-panel>
          <div
            v-if="lessons.all.length > 0"
            class="text-center text-weakening"
            style="line-height:2.4rem;"
          >加载更多</div>
        </div>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 1">
        <div
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="busy"
          infinite-scroll-distance="10"
        >
          <pm-panel
            :list="lessons.chinese"
            @on-img-error="onImgError"
            type="2"
          ></pm-panel>
          <div
            v-if="lessons.chinese.length > 0"
            class="text-center text-weakening"
            style="line-height:2.4rem;"
          >加载更多</div>
        </div>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 2">
        <div
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="busy"
          infinite-scroll-distance="10"
        >
          <pm-panel
            :list="lessons.math"
            @on-img-error="onImgError"
            type="2"
          ></pm-panel>
          <div
            v-if="lessons.math.length > 0"
            class="text-center text-weakening"
            style="line-height:2.4rem;"
          >加载更多</div>
        </div>
      </div>
      <div class="tab-pane" v-if="currentTabIndex === 3">
        <div
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="busy"
          infinite-scroll-distance="10"
        >
          <pm-panel
            v-if="lessons.english.length > 0"
            :list="lessons.english"
            @on-img-error="onImgError"
            type="2"
          ></pm-panel>
          <div
            class="text-center text-weakening"
            style="line-height:2.4rem;"
          >加载更多</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Swiper } from 'vux'

export default {
  name: 'lessen-page',
  created() {
    this.getSwiperData()
    this.getLessonData()
  },
  data() {
    return {
      title: '小学',
      currentSwiperIndex: 0,
      swiperData: [],
      currentTabIndex: 0,
      scrollLock: true,
      lessons: {
        all: [],
        chinese: [],
        math: [],
        english: []
      }
    }
  },
  components: {
    Swiper,
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
     * 获取课程信息,
     */
    getLessonData() {
      console.log('请根据currentTabIndex判别需要加载的课程类型')
      this.axios.get('/get-lessons-data')
        .then((res) => {
          // 此处拉取全部的课程？看后台情况看是否需要异步加载。
          console.log('课程信息数据', res)
          // 演示用模拟数据，
          switch (this.currentTabIndex) {
            case 0:
              this.lessons.all = res.data.dataset
              break
            case 1:
              this.lessons.chinese = res.data.dataset
              break
            case 2:
              this.lessons.math = res.data.dataset
              break
            case 3:
              this.lessons.english = res.data.dataset
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
     * 图片错误
     */
    onImgError(params) {
      console.log('图片出错了', params)
    },
    /**
     * 获取轮播图数据
     */
    getSwiperData () {
      this.axios.get('/index-swiper-data')
        .then((res) => {
          console.log('轮播图消息', res)
          this.swiperData = res.data.dataset
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
      this.getLessonData()
    },
    onSwiperChange() {
      console.log('轮播图 change')
    },
  },
}
</script>


<style lang="scss">
.pm-swiper--inner-page {
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &.vux-slider > .vux-indicator,
  .vux-slider .vux-indicator-right {
    right: 25px;
  }
}

</style>
