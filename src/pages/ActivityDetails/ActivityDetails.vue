<template>
  <div>
    <x-header
      class="pm-header"
    >
      活动详情
      <i
        slot="right"
        @click="handleStarClick"
        class="icon"
        :class="isCollected
        ? `icon-detail_mark_selected`
        : `icon-detail_mark_normal`"
      ></i>
    </x-header>
    <swiper
      class="pm-swiper--no-title"
      :auto="true"
      :loop="true"
      height="10.375rem"
      :interval="5000"
      :list="swiperData"
      v-model="currentSwiperIndex"
      :min-moving-distance="120"
      @on-index-change="onSwiperChange"
    ></swiper>
    <flexbox
      class="pm-auth-info"
    >
      <flexbox-item>
        <i class="icon icon-detail_tick"></i>认证机构
      </flexbox-item>
      <flexbox-item>
        <i class="icon icon-detail_tick"></i>底价承诺
      </flexbox-item>
      <flexbox-item>
        <i class="icon icon-detail_tick"></i>消费保障
      </flexbox-item>
    </flexbox>
    <div
      class="pm-main-info"
    >
      <div class="pm-main-info__header">
        <div class="pm-main-info__lbox">
          <div class="pm-main-info__title">
            {{activityInfo.title}}
          </div>
          <div class="pm-main-info__rtime">
            {{activityInfo.remainingTime}}
          </div>
        </div>
        <div
          class="pm-main-info__consult"
          @click="handleConsultClick"
        >
          <i class="icon icon-detail_consult"></i>
          <p class="text-secondary pr-step">咨询</p>
        </div>
      </div>
      <div class="pm-main-info__ft">
        <div>
          <span class="pm-main-info__price">
            {{activityInfo.price}}
          </span>
          <span class="pm-main-info__oprice">
            {{activityInfo.originPrice}}
          </span>
        </div>
        <div class="pm-main-info__enroll">已报名{{activityInfo.enrolledNumber}}</div>
      </div>
    </div>
    <div style="background-color:#f8f9fa; padding-top:0.75rem">
      <div class="p-medium has-bg-default">
        <p class="text-small text-bold">活动简介</p>
        <div
          v-for="(info,index) in schedule.infos"
          :key="index"
          class="mt-step"
          style="line-height:1.4rem; font-size: 0.94rem"
        >
          {{info.label}}：{{info.text}}
        </div>
      </div>
      <div class="has-bg-default mb-medium">
        <p class="p-medium mt-small text-small text-bold">活动详情</p>
        <img style="width: 100%" :src="activityDetailSrc" alt="img">
      </div>
      <div class="mt-small has-bg-default">
        <p
          class="text-small text-bold"
          style="padding: 1rem 1rem 0;margin-bottom: -0.75rem"
        >培训机构</p>
        <pm-panel
          :list="trainingInstitutions.dataset"
          @on-img-error="onImgError"
        ></pm-panel>
      </div>
    </div>
    <div class="pm-consultant">
      <a
        class="pm-consultant__btn"
        @click.prevent="go('/index')"
      >
        <i class="icon icon-detail_home"></i>
        <p>首頁</p>
      </a>
      <a
        class="pm-consultant__btn"
          @click.prevent="go('/activity-page')"
      >
        <i class="icon icon-detail_more"></i>
        <p>更多活动</p>
      </a>
      <a
        class="pm-consultant__btn"
        @click.prevent="handleConsultClick"
      >
        <i class="icon icon-detail_consultx"></i>
        <p>咨询</p>
      </a>
      <a
        class="pm-consultant__btn--large"
        @click.prevent="handleSginUp"
      >立刻报名</a>
    </div>
  </div>
</template>

<script>
import { Swiper } from 'vux'

export default {
  name: 'activity-details',
  created() {
    this.getSwiperData()
    this.getActivityDetail()
  },
  data() {
    return {
      isCollected: false,
      swiperData: [],
      currentSwiperIndex: 0,
      activityInfo: {
        title: '',
        remainingTime: '',
        price: '',
        originPrice: '',
        enrolledNumber: ''
      },
      schedule: [],
      activityDetailSrc: '',
      trainingInstitutions: {
        dataset: []
      }
    }
  },
  components: {
    Swiper
  },
  methods: {
    /**
     * 立即报名
     */
    handleSginUp() {
      console.log('立即报名逻辑')
    },
    /**
     * 路由跳转
     */
    go(url) {
      this.$router.push({ path: url })
    },
    /**
     * 咨询按钮点击事件
     */
    handleConsultClick() {
      console.log('启动咨询')
    },
    /**
     * 获取课程详细信息,此处我全部从一个接口出了，实际请试具体环境
     */
    getActivityDetail() {
      this.axios.get('/get-activity-detail-info')
        .then((res) => {
          console.log('活动详情', res)
          this.isCollected = res.data.isCollected
          this.activityInfo = res.data.activityInfo
          this.schedule = res.data.schedule
          this.activityDetailSrc = res.data.activityDetailSrc
          this.trainingInstitutions.dataset = res.data.trainingInstitutions.dataset
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
    onSwiperChange() {
      console.log('轮播图 change')
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

<style scoped>

</style>
