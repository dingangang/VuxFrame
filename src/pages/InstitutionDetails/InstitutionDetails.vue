<template>
  <div class="page">
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
    <x-header class="pm-header">
      <i
        slot="right"
        @click="handleStarClick"
        class="icon"
        :class="isCollected
        ? `icon-detail_mark_selected`
        : `icon-detail_mark_normal`"
      ></i>
    </x-header>
    <div style="margin-top: 10rem">
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
        <div class="tab-pane" v-if="currentTabIndex === 0">
          <pm-block-header
            class="mt-medium"
            label="视频"
          ></pm-block-header>
          <scroll-img
            :imgList="briefIntroduction.videos"
            item-size="tiny"
          ></scroll-img>
          <pm-block-header
            class="mt-huge"
            label="相册"
          ></pm-block-header>
          <scroll-img
            :imgList="briefIntroduction.album"
            item-size="tiny"
          ></scroll-img>
          <pm-block-header
            class="mt-huge"
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
        </div>
        <div class="tab-pane" v-if="currentTabIndex === 1">1</div>
        <div class="tab-pane" v-if="currentTabIndex === 2">2</div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollImg from '@/components/scroll-img/scroll-img'

export default {
  name: 'institution-details',
  created() {
    this.getInstitutionData()
  },
  data() {
    return {
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
        album: []
      }
    }
  },
  components: {
    ScrollImg,
  },
  methods: {
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
          console.log('机构详情数据', res)
          this.isCollected = res.data.isCollected
          this.institutionHeaderSrc = res.data.institutionHeaderSrc
          this.institutionInfo = res.data.institutionInfo
          this.briefIntroduction = res.data.briefIntroduction
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
    },
  }
}
</script>

<style scoped lang="scss">
.pm-institution-bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 12.875rem;
  padding-top: 3.125rem;
  z-index: -1;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
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
  padding: 0.25rem 1rem;
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
</style>
