<template>
  <div>
    <div class="pm-signin">
      <x-header
        class="pm-header pm-header--reverse"
        style="color:#fff;"
      >
        每日签到
        <a
          slot="right"
          @click.prevent="showTip=true"
        >
          <img
            src="@/assets/images/img01.png"
            alt="?"
            style="width:1.07rem; height:1.07rem;"
          >
        </a>
      </x-header>
      <div class="pm-signin__content">
        <a
          class="pm-signin__btn pm-signin__btn--parents"
          @click.prevent="handleClickSingin"
        >
          请假
        </a>
      </div>
    </div>
    <div class="pm-calendar-container">
      <Calendar
        ref="Calendar"
        v-on:choseDay="clickDay"
        v-on:changeMonth="changeDate"
        v-on:isToday="clickToday"
        :markDateMore="arr"
        :sundayStart="true"
        class="pm-calendar"
        :textTop="[ '日','一', '二', '三', '四', '五', '六'] "
      ></Calendar>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showTip">
        <div class="pm-signin-content">
          <div class="pm-signin-content__title">
            签到说明
            <x-icon
              class="pull-right"
              type="ios-close-empty"
              size="30"
              @click="showTip=false"
              fill="#fff"
            ></x-icon>
            <!-- <i
              class="icon icon-close pull-right mt-step"
              @click="showTip=false"
            ></i> -->
          </div>
          <div class="pm-signin-content__text">
            <p>1. 每日打卡：周一至周五，下</p>
            <p>1. 每日打卡：周一至午6:30-9:30</p>
            <p>1. 每日打卡：周6:30-9:30</p>
            <p>1. 每日打卡：周一至周五，下午-9:30</p>
            <p>1. 每日打卡：周一至周五，下午6:30-9:30</p>
          </div>
        </div>
      </x-dialog>
    </div>

     <!-- <Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
      // v-on:isToday="clickToday"
      // :markDate=arr // arr=['2018/4/1','2018/4/3'] 标记4月1日和4月3日 简单标记
      //:markDateMore=arr // 多种不同的标记
      // 第一个标记和第二个标记不能同时使用
      // :agoDayHide='1514937600' //某个日期以前的不允许点击  时间戳10位
      // :futureDayHide='1525104000' //某个日期以后的不允许点击  时间戳10位
      // :sundayStart="true" //默认是周一开始 当是true的时候 是周日开始
    ></Calendar> -->
  </div>
</template>

<script>
import Calendar from 'vue-calendar-component';
import dayjs from 'dayjs';
import { mapState } from 'vuex';

export default {
  name: 'sign-in-page-parents',
  created() {
    this.getSignInArr()
  },
  data() {
    return {
      showTip: false,
      arr: []
    }
  },
  components: {
    Calendar
  },
  computed: {
    ...mapState({
      userId: state => state.userId,
      role: state => state.role
    }),
  },
  methods: {
    clickDay(data) {
      console.log(data); // 选中某天
    },
    changeDate(data) {
      console.log(data); // 左右点击切换月份
    },
    clickToday(data) {
      console.log(data); // 跳到了本月
    },
    /**
     * 给今天签到
     */
    handleClickSingin() {
      this.$router.push({ path: '/leave-form' })
    },
    /**
     * 获取签到信息
     */
    getSignInArr() {
      this.axios.get('/get-sign-in-data')
        .then((res) => {
          console.log('签到情况', res)
          this.arr = res.data.dataset
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
}
</script>

<style scoped lang="scss">
.pm-signin {
  background: url('../../assets/images/bg01.png') no-repeat;
  background-size: cover;

  &__content {
    min-height: 12.5rem;
    text-align: center;
    padding-top: 2.5rem;
  }

  &__btn {
    position: relative;
    display: inline-block;
    width: 5.8625rem;
    height: 5.8625rem;
    line-height: 5.8625rem;
    font-size: 1rem;
    color: #fff;
    font-weight: 600;

    &--student {
      background: url('../../assets/images/button_bg.png') no-repeat;
      background-size: cover;
    }

    &--parents {
      background: url('../../assets/images/button_bg.png') no-repeat;
      background-size: cover;
    }
  }
}

.pm-calendar-container {
  margin: -2rem 1rem 1rem;
}

.pm-signin-content {
  background: url('../../assets/images/bg03.png') no-repeat;
  background-size: cover;
  padding: 0.75rem;
  border-radius: 4px;

  &__title {
    line-height: 1.5rem;
    font-size: 1.125rem;
    color: #fff;
    font-weight: 600;
  }

  &__text {
    min-height: 20.5rem;
    margin-top: 0.75rem;
    border-radius: 4px;
    padding: 1.125rem 1rem;
    background: #fff;
    text-align: left;
    font-size: 0.94rem;
    line-height: 1.75rem;
  }
}

</style>
