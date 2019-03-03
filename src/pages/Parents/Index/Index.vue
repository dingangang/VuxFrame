<template>
  <div class="page">
    <swiper
      class="pm-swiper--no-title"
      :auto="true"
      :loop="true"
      height="11.3rem"
      :interval="50000"
      :list="demo01_list"
      v-model="demo02_index"
      :min-moving-distance="120"
      @on-index-change="demo01_onIndexChange"
    ></swiper>
    <group class="pm-search pm-search--top">
      <x-input
        v-model="searchValue"
        placeholder="搜索课程、机构"
      >
        <i
          slot="label"
          class="icon icon-home_search"
          style="margin-right: 0.47rem"></i>
      </x-input>
      <i class="icon icon-home_chart"></i>
    </group>
    <flexbox
      style="padding: 0.75rem 1rem; background: #FFF3ED"
    >
      <flexbox-item
        style="flex: 0 0 1rem"
      >
        <i class="icon icon-home_voice"></i>
      </flexbox-item>
      <flexbox-item>
        <marquee>
          <marquee-item
            v-for="item in marqueeData"
            :key="item.id"
            @click.native="handleMarqueeClick(item)"
            class="text-default text-secondary"
          >
            {{item.text}}
            <div class="pull-right">
              <i class="icon icon-into"></i>
            </div>
          </marquee-item>
        </marquee>
      </flexbox-item>
    </flexbox>
    <flexbox
      justify="space-around"
      wrap="wrap"
      :gutter="0"
      class="mt-large"
    >
      <flexbox-item
        v-for="item in appEntrances"
        :key="item.id"
        style="flex: 0 0 20%"
        @click.native="handleAppEnteranceClick(item)"
        class="mb-medium"
      >
        <div class="text-center">
          <i
            class="icon"
            :class="`icon-${item.icon}`"
          ></i>
          <p>{{item.name}}</p>
        </div>
      </flexbox-item>
    </flexbox>
    <div>
      <pm-block-header
        label="热门活动"
        :link="hotActivities.link"
      ></pm-block-header>
      <scroll-img
        :imgList="hotActivities.dataset"
      ></scroll-img>
    </div>
    <div class="mt-large">
      <pm-block-header
        label="推荐机构"
        link="somewhere"
      ></pm-block-header>
      <pm-panel
        :list="recomanderOrganization.dataset"
        @on-img-error="onImgError"
      ></pm-panel>
    </div>
  </div>
</template>

<script>
import { Swiper } from 'vux'
import ScrollImg from '@/components/scroll-img/scroll-img'

export default {
  name: 'index',
  created() {
    this.getMarqueeData()
    this.getAppEntrances()
    this.getHotActivities()
    this.getRecomanderOrganization()
  },
  data() {
    return {
      searchValue: '',
      demo02_index: 0,
      demo01_list: [
        {
          url: '',
          img: require('@/assets/images/bg04.png'),
        }, {
          url: '',
          img: require('@/assets/images/bg04.png'),
        },
      ],
      marqueeData: [],
      appEntrances: [],
      hotActivities: {
        link: '',
        dataset: [],
      },
      recomanderOrganization: {
        link: '',
        dataset: [],
      },
    }
  },
  components: {
    Swiper,
    ScrollImg,
  },
  methods: {
    /**
     * 获取轮播消息
     */
    getMarqueeData () {
      this.axios.get('/parent/index/marqueeData')
        .then((res) => {
          console.log('轮播消息', res)
          this.marqueeData = res.data.dataset
        })
        .catch((err) => {
          console.error(err)
        })
    },
    /**
     * 处理marquree点击事件
     * @param {Object} item 点击事件的对象
     */
    handleMarqueeClick (item) {
      console.log('点击marquree对象>', item)
    },
    /**
     * 获取app入口信息
     */
    getAppEntrances () {
      this.axios.get('/parent/index/app-entries')
        .then((res) => {
          console.log('app入口信息', res)
          this.appEntrances = res.data.dataset
        })
        .catch((err) => {
          console.error(err)
        })
    },
    /**
     * 点击app图标
     * @param {Object} item 点击事件的对象
     */
    handleAppEnteranceClick (item) {
      console.log('事件点击对象', item)
    },
    /**
     * 获取热活动
     */
    getHotActivities() {
      this.axios.get('/parent/index/hot-activities')
        .then((res) => {
          console.log('热门活动', res)
          this.hotActivities.link = res.data.link
          this.hotActivities.dataset = res.data.dataset
        })
        .catch((err) => {
          console.error(err)
        })
    },
    /**
     * 获取推荐结构信息
     */
    getRecomanderOrganization() {
      this.axios.get('/parent/index/organization')
        .then((res) => {
          console.log('推荐信息', res)
          this.recomanderOrganization.link = res.data.link
          this.recomanderOrganization.dataset = res.data.dataset
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
    demo01_onIndexChange() {
      console.log('change')
    },
  },
}
</script>

<style scoped>

</style>
