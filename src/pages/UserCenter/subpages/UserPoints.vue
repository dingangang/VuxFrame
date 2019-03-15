<template>
  <div class="pm-user-points">
    <x-header class="pm-header">我的积分</x-header>
    <div class="pm-user-points__header">
      <div class="pm-user-points__title">累计获得积分</div>
      <div class="pm-user-points__score">{{pointsData.totalPoints}}</div>
      <div class="pm-user-points__details">
        <span>当前积分 {{pointsData.currentPoints}}</span>
        <span
          class="x-v-divider x-v-divider--type1 vux-1px-l"
        ></span>
        <span>积分抵值 {{pointsData.worthy}}</span>
      </div>
    </div>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <ul class="pm-user-points__list">
        <li
          v-for="item in pointsData.pointsList"
          :key="item.id"
          class="pm-user-points__item vux-1px-b"
        >
          <div class="pm-user-points__iteml">
            <div class="pm-user-points__label">{{item.label}}</div>
            <div class="pm-user-points__time">{{item.time}}</div>
          </div>
          <div class="pm-user-points__itemr">
            <div :class="`x-status x-status--${item.status}`">{{item.value}}</div>
            <div
              v-if="item.worthy && item.worthy.length > 0"
              class="pm-user-points__worthy"
            >
              {{item.worthy}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-points',
  created() {
    this.getUserPoints()
  },
  data() {
    return {
      pointsData: {
        totalPoints: '',
        currentPoints: '',
        worthy: '',
        pointsList: []
      },
      scrollLock: true,
    }
  },
  methods: {
    /**
     * 获取用户积分信息
     */
    getUserPoints() {
      this.axios.get('/get-user-points-data')
        .then((res) => {
          console.log('积分信息', res)
          this.pointsData = res.data.pointsData
          // 获取数据成功渲染之后再打开scrollLock
          this.scrollLock = false
        })
        .catch((err) => {
          console.error(err)
        })
    },
    /**
     * 加载更多
     */
    loadMore() {
      if (!this.scrollLock) {
        console.log('打开滚动锁之后再进行加载更多')
      }
    }
  },
}
</script>

<style scoped lang="scss">
.pm-user-points {
  &__header {
    min-height: 10rem;
    padding-top: 1rem;
    text-align: center;
    background-image: linear-gradient(-180deg, #4eda59 0%, #3eba45 100%);
  }

  &__title {
    color: #fff;
    opacity: 0.7;
    font-size: 0.815rem;
  }

  &__score {
    color: #fff;
    font-size: 3.815rem;
    line-height: 5rem
  }

  &__details {
    color: #fff;
    font-size: 0.94rem;
    line-height: 1.3rem;
  }

  &__list {
    margin: 0 1rem;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    min-height: 4.2rem;
    align-items: center;
  }

  &__label {
    font-size: 1rem;
    color: $color-text-main;
    line-height: 2rem;
  }

  &__time,
  &__worthy {
    font-size: 0.815rem;
    color: $color-text-weakening
  }

  &__itemr {
    text-align: right;
  }
}

.x-status {
  font-size: 1.125rem;
  line-height: 2rem;

  &--plus {
    color: #ff6722;
  }

  &--minus {
    color: $color-text-main;
  }
}
</style>
