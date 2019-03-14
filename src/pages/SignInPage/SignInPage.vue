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
        >
          <img
            src="@/assets/images/img01.png"
            alt="?"
            style="width:1.07rem;height:1.07rem"
          >
        </a>
      </x-header>
      <div class="pm-signin__content">
        <a
          class="pm-signin__btn"
          @click.prevent="handleClickSingin"
        >
          签到
        </a>
      </div>
    </div>
    <div class="pm-calendar-container">
      <Calendar
        v-on:choseDay="clickDay"
        v-on:changeMonth="changeDate"
        v-on:isToday="clickToday"
        :markDateMore="arr"
        class="pm-calendar"
      ></Calendar>
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

export default {
  name: 'sign-in-page',
  created() {},
  data() {
    return {
      arr: [{ date: '2019/3/8', className: 'mark1' }, { date: '2019/3/10', className: 'mark2' }]
    }
  },
  components: {
    Calendar
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
      console.log(dayjs())
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
    background: url('../../assets/images/button_bg.png') no-repeat;
    background-size: cover;

    > img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

.pm-calendar-container {
  margin: -2rem 1rem 1rem;
}

</style>
