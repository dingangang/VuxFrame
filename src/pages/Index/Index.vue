<template>
  <div class="page">
<!--广告begin#################################################################################################-->

    <swiper class="pm-swiper--no-title" :auto="true"  :loop="true"  height="11.3rem" :interval="5000"
    :list="swiperData" v-model="currentSwiperIndex" :min-moving-distance="120" @on-index-change="onSwiperChange" >


    </swiper>

<!--广告end#################################################################################################-->

<!--搜索begin#################################################################################################-->

    <group class="pm-search pm-search--top">
      <x-input v-model="searchValue" placeholder="搜索课程、机构"  @on-enter="onSearchEnter" >
        <i slot="label"  class="icon icon-home_search" style="margin-right: 0.47rem;"></i>
      </x-input>
      <div>
        <i class="icon icon-home_chart" v-if="model==1"  @click="handleCalendarClick" ></i>
      </div>
    </group>

<!--搜索end#################################################################################################-->

<!--通知begin#################################################################################################-->

    <flexbox style="padding: 0.75rem 1rem; background: #fff3ed;" >
      <flexbox-item  style="flex: 0 0 1rem;" > <i class="icon icon-home_voice"></i> </flexbox-item>
      <flexbox-item>
        <marquee>
          <marquee-item v-for="item in marqueeData" :key="item.id" @click.native="handleMarqueeClick(item)" class="text-default text-secondary" >
            {{item.name}}
            <div class="pull-right">
              <i class="icon icon-into"></i>
            </div>
          </marquee-item>
        </marquee>
      </flexbox-item>
    </flexbox>

<!--通知end#################################################################################################-->

<!--课程类型begin#################################################################################################-->

    <flexbox justify="space-around" wrap="wrap"  :gutter="0"  class="mt-large" >
      <flexbox-item  v-for="item in appEntrances" :key="item.id"  style="flex: 0 0 20%;"  @click.native="handleAppEnteranceClick(item)"  class="mb-medium" >
        <div class="text-center">
          <i class="icon"  :class="`icon-${item.remark}`" ></i>
          <p class="mt-step">{{item.name}}</p>
        </div>
      </flexbox-item>
    </flexbox>

<!--课程类型end#################################################################################################-->

<!--活动begin#################################################################################################-->

    <div>
      <pm-block-header label="热门活动" link="activity-page" ></pm-block-header>
      <scroll-img :imgList="hotActivities" ></scroll-img>
    </div>

<!--活动begin#################################################################################################-->

<!--机构begin#################################################################################################-->

    <div class="mt-large">
      <pm-block-header label="推荐机构" link="somewhere" ></pm-block-header>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy"  infinite-scroll-distance="10"  >
      <pm-panel :list="recomanderOrganization"  @on-img-error="onImgError" ></pm-panel>
      <div  class="text-center text-weakening" style="line-height: 2.4;" >  查看更多机构 </div>
      </div>
    </div>

<!--机构end#################################################################################################-->


  </div>
</template>

<script>
import { Swiper } from 'vux'
import ScrollImg from '@/components/scroll-img/scroll-img'
import { mapState } from 'vuex';
// 请不要直接引入store, store中的值以computed的形式获取

export default {
  name: 'index',
  created() {
    this.getAppEntrances();
    this.getNotice();
    this.getActivity();
    this.getLatitude();
    this.getAd();
  },
  mounted() {
    setTimeout(() => {
      this.scrollLock = false
    }, 1500)
  },
  data() {
    return {
      scrollLock: true,
      searchValue: '',
      currentSwiperIndex: 0,
      // model:store.state.role,
      swiperData: [],
      marqueeData: [],
      appEntrances: [],
      hotActivities: [],
      recomanderOrganization: [],
      schoolParam: {
        latitude: 22,
        longitude: 221,
        page: 1,
        size: 10
      }
    }
  },
  components: {
    Swiper,
    ScrollImg,
  },
  computed: {
    ...mapState({
      userId: state => state.userId,
      model: state => state.role
    }),
  },
  methods: {
    /**
     * 获取机构
     */
    getSchoolAll() {
      this.$fetch('api/school/schoolAll', this.schoolParam).then((res) => {
        this.recomanderOrganization = res.data
      }).catch((err) => {
        console.error(err)
      })
    },
    /**
     * 获取公告
     */
    getNotice() {
      this.$fetch('api/notice/indexNotice').then((res) => {
        this.marqueeData = res.data;
      }).catch((err) => {
        console.error(err)
      })
    },
    /**
     * 获取活动
     */
    getActivity() {
      this.$fetch('api/activity/indexActivity').then((res) => {
        this.hotActivities = res.data;
      }).catch((err) => {
        console.error(err)
      })
    },
    /**
     * 获取首页广告
     */
    getAd() {
      this.$fetch('api/ad/list').then((res) => {
        this.swiperData = res.data;
      }).catch((err) => {
        console.error(err)
      })
    },
    /**
     * 搜索条回车事件
     */
    onSearchEnter() {
      console.log('搜索的内容是', this.searchValue)
      this.$router.push({ name: 'search', params: { value: this.searchValue } })
    },
    /**
     * 滚动加载更多
     */
    loadMore () {
      // 页面初始化时会出发该事件，增加一个变量延时2500ms用于修正函数执行
      if (!this.scrollLock) {
        console.log('触发滚动加载事件')
      }
    },


    /**
     * 处理marquree点击事件
     * @param {Object} item 点击事件的对象
     */
    handleMarqueeClick (item) {
      this.$router.push({ name: 'message-details', params: { id: item.id } })

      console.log('点击marquree对象>', item)
    },
    /**
     * 获取app入口信息
     */
    getAppEntrances () {
        this.$fetch('api/sysmacro/SUBJECT_TYPE').then((res) => {
          if(res.data!=null) {
            res.data.push({name:'更多课程',remark:'home_more'})
          }
        this.appEntrances =  res.data;
        }).catch((err) => {
          console.error(err)
        })


    },
    /**
     * 点击app图标
     * 课程跳转
     */
    handleAppEnteranceClick (item) {
      this.$router.push({ name: 'somewhere-router', params: { value: this.value}});
    },




    /**
     * 处理小日历图标点击 window.Android.loginOut();
     */
    handleCalendarClick() {
      console.log('在此处应跳转到签到页面')

      switch (this.role) {
        case 0:
          this.$router.push('sign-in-page-parents')
          return
        case 1:
          this.$router.push('sign-in-page-student')
          return
        default:
          console.log('请查看角色配置是否有问题？')
      }

      this.$fetch('api/temppay/alipay')
        .then((res) => {
          console.log('支付信息', res.errmsg);
          window.Android.Alipay(res.errmsg);
        })
        .catch((err) => {
          console.log(err)
        })
    },
    /**
     * 图片错误
     */
    onImgError(params) {
      console.log('图片出错了', params)
    },
    onSwiperChange() {
      console.log('轮播图 change')
    },

    // 百度地图拿坐标
    getLatitude() {
      const coords = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          // locationSuccess 获取成功的话
          function(position) {
            // position就是我们通过api获取的信息，而我们想获取的经纬度就在coords下，随后将经纬度分别赋值给外部data设定好的变量
            coords.schoolParam.longitude = position.coords.longitude;
            // 记住如果这里直接写this可能会导致找不到外部的变量而报错，所以提前设置一下this的指向
            coords.schoolParam.latitude = position.coords.latitude;
            coords.getSchoolAll();
          },
          // locationError  获取失败的话
          function(error) {
            const errorType = ['您拒绝共享位置信息', '获取不到位置信息', '获取位置信息超时'];
            coords.getSchoolAll();
           // alert(errorType[error.code - 1]);
          }
        );
      }
    }
  },
}
</script>
