<template>
  <div class="page">
    <x-header class="pm-header" style="position: absolute; width: 100%">
      <i
        slot="right"
        @click="handleStarClick"
        class="icon"
        :class="isCollected
        ? `icon-detail_mark_selected`
        : `icon-detail_mark_normal`"
      ></i>
    </x-header>
    <div
      class="pm-institution-bg"
      :style="`background-image: url('${institutionHeaderSrc}')`"
    >
      <div style="position:relative;height:100%">
        <div class="pm-institution-info">
          <div class="pm-institution-info__img">
            <img
              class="pm-institution-info__img"
              :src="institutionInfo.src" alt="img">
          </div>
          <div class="pm-institution-info__bd">
            <p class="pm-institution-info__title">{{institutionInfo.title}}</p>
            <p class="pm-institution-info__subTitle">{{institutionInfo.subTitle}}</p>
            <p class="pm-institution-info__suffix">{{institutionInfo.suffix}}</p>
          </div>
        </div>
        <flexbox
          class="pm-auth-info pm-auth-info--reverse"
        >
          <flexbox-item>
            <i class="icon icon-detail_tick_x"></i>认证机构
          </flexbox-item>
          <flexbox-item>
            <i class="icon icon-detail_tick_x"></i>底价承诺
          </flexbox-item>
          <flexbox-item>
            <i class="icon icon-detail_tick_x"></i>消费保障
          </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div>
      <tab
        :line-width="1"
      >
        <tab-item
          selected
          @on-item-click="handeTabItemClick"
        >简介</tab-item>
        <tab-item
          @on-item-click="handeTabItemClick"
        >课程</tab-item>
        <tab-item
          @on-item-click="handeTabItemClick"
        >活动</tab-item>
      </tab>
      <div class="tab-panes">
        <div
          class="tab-pane"
          v-if="currentTabIndex === 0"
        >
          <pm-block-header
            class="mt-medium"
            label="视频"
          ></pm-block-header>
          <scroll-img
            :imgList="briefIntroduction.videos"
            item-size="tiny"
            type="video"
          ></scroll-img>
          <div class="x-gap"></div>
          <pm-block-header
            class="mt-medium"
            label="相册"
          ></pm-block-header>
          <scroll-img
            :imgList="briefIntroduction.album"
            item-size="tiny"
          ></scroll-img>
          <div class="x-gap"></div>
          <pm-block-header
            class="mt-medium"
            label="简介"
          ></pm-block-header>
          <ul style="padding: 0.75rem 1rem">
            <li
              class="mt-tiny"
              v-for="(item, index) in briefIntroduction.introduction"
              :key="index"
            >
              {{item.label}}：{{item.text}}
            </li>
          </ul>
          <div class="x-gap"></div>
          <pm-block-header
            class="mt-medium"
            label="综合评分"
          ></pm-block-header>
          <comprehensive-score
            :scores="briefIntroduction.comprehensive"
          ></comprehensive-score>
          <div class="vux-1px-t ml-medium mr-medium"></div>
          <pm-block-header
            class="mt-medium "
            label="评论"
          ></pm-block-header>
          <ul class="pm-comment-list">
            <li
              v-for="comment in briefIntroduction.comments"
              :key="comment.id"
              class="pm-comment-item"
            >
              <div class="pm-comment-item__header">
                <div>
                  <img class="pm-comment-item__portrait" :src="comment.portraitSrc" alt="portrait">
                  <span class="pm-comment-item__name">{{comment.name}}</span>
                  <div class="pm-comment-item__vip">
                    <i class="icon icon-detail_identity"></i>
                    {{comment.vipRank}}
                  </div>
                </div>
                <div  class="pm-comment-item__time">
                  {{comment.time}}
                </div>
              </div>
              <div class="pm-comment-item__desc vux-1px-b">
                {{comment.desc}}
              </div>
            </li>
          </ul>
        </div>
        <div class="tab-pane" v-if="currentTabIndex === 1">
          <flexbox
            class="pm-lesson-wares"
            :gutter="0"
            wrap="wrap"
          >
            <flexbox-item
              v-for="lesson in lessons"
              :key="lesson.id"
              :span="1/2"
              class="pm-lesson-ware"
            >
              <div class="pm-lesson-ware__img">
                <img :src="lesson.src" alt="lesson">
              </div>
              <div class="pm-lesson-ware__title">
                {{lesson.title}}
              </div>
              <div class="pm-lesson-ware__subTitle mt-step">
                {{lesson.subTitle}}
              </div>
              <div>
                <span class="pm-lesson-ware__price">{{lesson.price}}</span>
                <span  class="pm-lesson-ware__oprice">{{lesson.originPrice}}</span>
              </div>
            </flexbox-item>
          </flexbox>
          <div
            v-if="lessons.length > 0"
            class="text-center text-weakening"
            style="line-height:2.4rem"
            @click="loadMore"
          >查看更多课程</div>
        </div>
        <div class="tab-pane" v-if="currentTabIndex === 2">
          <activity-list
            :list="activities"
          ></activity-list>
        </div>
      </div>
    </div>
    <div class="pm-bottom-group">
      <a class="pm-bottom-group__btn vux-1px-t">评价</a>
      <a
        class="pm-bottom-group__btn has-color"
        @click.prevent="handleConsultClick"
      >咨询</a>
    </div>
  </div>
</template>

<script>
import ScrollImg from '@/components/scroll-img/scroll-img'
import ActivityList from '@/components/activity-list/acticvity-list'
import ComprehensiveScore from './components/ComprehensiveScore'

export default {
  name: 'institution-details',
  created() {
    this.getInstitutionData()
  },
  data() {
    return {
      showToastValue: true,
      isCollected: false,
      institutionHeaderSrc: '',
      institutionInfo: {
        title: '',
        subTitle: '',
        suffix: '',
        src: ''
      },
      currentTabIndex: 0,
      briefIntroduction: {
        videos: [],
        album: [],
        introduction: [],
        comprehensive: {
          total: '',
          subItems: []
        },
        comments: []
      },
      lessons: [],
      activities: []
    }
  },
  components: {
    ScrollImg,
    ComprehensiveScore,
    ActivityList
  },
  methods: {
    /**
     * 加载更多课程，此处没有使用滚动加载
     */
    loadMore() {
      console.log('按需加载更多课程')
    },
    /**
     * 咨询按钮点击事件
     */
    handleConsultClick() {
      console.log('启动咨询')
    },
    /**
     * 处理tab页签点击事件
     * @param {Number} index 当前 tabItem序号
     */
    handeTabItemClick(index) {
      console.log('index->>>', `${index}`)
      this.currentTabIndex = index
    },
    /**
     * 获取机构详细信息
     */
    getInstitutionData() {
      this.axios.get('/get-institution-details-data')
        .then((res) => {
          console.log('%c注意，跳转video页面的link不带"/"字符', 'color:red')
          console.log('机构详情数据', res)
          this.isCollected = res.data.isCollected
          this.institutionHeaderSrc = res.data.institutionHeaderSrc
          this.institutionInfo = res.data.institutionInfo
          this.briefIntroduction = res.data.briefIntroduction
          this.lessons = res.data.lessons
          this.activities = res.data.activities
        })
        .catch((err) => {
          console.error(err)
        })
    },
    /**
     * 处理收藏按钮点击事件
     */
    handleStarClick() {
      this.isCollected = !this.isCollected
      console.log(`现在收藏选项的状态是${this.isCollected}`)
      this.$vux.toast.show({
        text: '收藏成功',
        type: 'sucess'
      })
      // this.$vux.toast.show({
      //   text: '取消成功',
      //   type: 'cancel'
      // })
    },
  }
}
</script>

<style scoped lang="scss">
.pm-institution-bg {
  position: relative;
  width: 100%;
  height: 12.875rem;
  padding-top: 3.125rem;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  &:after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(2px);
    z-index: -1;
  }
}
.pm-institution-info {
  display: flex;
  padding: 1.5rem 1rem;
  justify-content: space-between;
  &__img {
    flex: 0 0 4.125rem;
    >img{
      width: 100%;
      height: 4.125rem;
      border-radius: 4px;
    }
  }
  &__bd {
    flex: 1;
    text-align: left;
    padding-left: $spacing-medium;
    min-width: 0;
  }
  &__title {
    font-size: 1.125rem;
    line-height: 1.55rem;
    color: #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  &__subTitle {
    font-size: 0.815rem;
    line-height: 1.15rem;
    color: #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  &__suffix {
    margin-top: $spacing-tiny;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #fff;
    opacity: 0.4;
  }
}
.pm-comment-list {
  margin-top: 0.75rem;
  padding: 0 1rem;
}

.pm-comment-item {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline
  }
  &__portrait {
    width: 2rem;
    height: 2rem;
    border-radius: 100%
  }
  &__name {
    font-size: 0.94rem;
    font-weight: 600
  }
  &__time {
    font-size: 0.75rem;
    color: $color-text-weakening
  }
  &__vip {
    display: inline-block;
    background: #FF9A00;
    border-radius: 1rem;
    height: 1.0625rem;
    line-height: 1.0625rem;
    min-width: 2.1rem;
    vertical-align: middle;
    font-size: 0.75rem;
    color: #fff;
    >.icon {
      vertical-align: sub;
    }
  }
  &__desc {
    padding: 0.5rem 0 1rem
  }
  &+& {
    margin-top: $spacing-medium
  }
}
</style>
