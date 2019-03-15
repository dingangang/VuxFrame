<template>
  <div>
    <x-header class="pm-header">会员</x-header>
    <div class="pm-pink-info">
      当前是体验账号，本月打卡率95%
    </div>
    <div class="mt-medium">
      <checker
        v-model="currentMembershipType"
        radio-required
        default-item-class="pm-memship__btn"
        selected-item-class="pm-memship__btn--selected"
        class="pm-memtypes"
      >
        <checker-item
          value="type1"
        >
          <div class="pm-memitem">
            <div class="pm-memitem__title">普通会员</div>
            <div>
              <div class="pm-memitem__price">
                <span class="text-orange">￥</span>
                <span class="text-large text-orange">380</span>
                <span>/年</span>
              </div>
            </div>
          </div>
        </checker-item>
        <checker-item
          value="type2"
        >
          <div class="pm-memitem">
            <div class="pm-memitem__title">普通会员</div>
            <div>
              <div class="pm-memitem__price">
                <span class="text-orange">￥</span>
                <span class="text-large text-orange">380</span>
                <span>/年</span>
              </div>
              <div class="pm-memitem__subprice">
                <span>￥380/年</span>
              </div>
            </div>
          </div>
        </checker-item>
        <checker-item
          value="type3"
        >
          <div class="pm-memitem">
            <div class="pm-memitem__title">普通会员</div>
            <div>
              <div class="pm-memitem__price">
                <span class="text-orange">￥</span>
                <span class="text-large text-orange">2380</span>
                <span>/年</span>
              </div>
            </div>
          </div>
        </checker-item>
      </checker>

      <div class="p-medium x-details">
        <div class="text-secondary">说明</div>
        <p class="text-weakening">1、体验账号上月打卡率超过90%，折扣价格升级为普通会员；</p>
        <p class="text-weakening">2、说明文字说明文字说明文字说明文字体验账号上月打卡率超过90%；</p>
        <p class="text-weakening">
          3、说明文字说明文字说明文字说明文字体验账号上月打卡率超过90%，折扣价格升级为普通会员。
        </p>
      </div>

      <div class="x-gap"></div>
      <group class="pm-group" title="slot:each-item">
        <radio
          :options="payTypes"
          v-model="currentPayType"
          class="pm-radio"
        >
          <template slot-scope="props" slot="each-item">
            <p>
              <img
              :src="props.icon"
              class="vux-radio-icon" />
              {{ props.label }}
            </p>
          </template>
        </radio>
      </group>
    </div>
    <div class="pm-bottom-group">
      <div class="pm-bottom-group__btn text-left text-main pl-medium">
        <span>总计:</span>
        <span class="text-large text-orange">￥380</span>
        <span class="text-small text-weakening">已优惠80元</span>
      </div>
      <div
        class="pm-bottom-group__btn has-color"
        :class="isPayBtnReady ? '' : 'is-disabled'"
        style="flex: 0 0 8.2rem;"
        @click="handlePayBtnClick"
      >确认支付</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menbership-page',
  created() {},
  data() {
    return {
      currentMembershipType: '',
      commonList: ['China', 'Japan', 'America'],
      currentPayType: '',
      payTypes: [{
        icon: require('@/assets/images/img08.png'),
        key: '001',
        value: '微信'
      }, {
        icon: require('@/assets/images/img09.png'),
        key: '002',
        value: '支付宝'
      }],
    }
  },
  computed: {
    isPayBtnReady () {
      return this.currentMembershipType.length > 0 && this.currentPayType.length > 0
    }
  },
  methods: {
    change(params) {
      console.log('params', params)
    },
    /**
     * 处理支付按钮
     */
    handlePayBtnClick() {
      if (this.isPayBtnReady) {
        console.log('支付的逻辑')
      }
    }
  },
}
</script>

<style scoped lang="scss">
.pm-pink-info {
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 1rem;
  background-color: #fff3ed;
  color: $color-text-secondary
}

.pm-memtypes {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.pm-memship__btn {
  flex: 0 0 6.615rem;

  &--selected {
    background-color:  rgba(255,103,34,0.10);

    > .pm-memitem {
      border-color: #ff6122;
    }
  }
}

.pm-memitem {
  min-height: 7.375rem;
  min-width: 6.125rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  border: 1px solid #e5e5e5;
  border-radius: 0.25rem;

  &__title {
    font-size: 0.94rem;
    font-weight: 600;
  }

  &__price {
    color: $color-text-secondary;
    font-size: 0;

    > span {
      display: inline-block;
      font-size: 0.94rem;
    }
  }

  &__subprice {
    font-size: 0.815rem;
    color: $color-text-weakening
  }
}

.x-details {
  line-height: 1.5rem;
  font-size: 0.815rem;
}
</style>
