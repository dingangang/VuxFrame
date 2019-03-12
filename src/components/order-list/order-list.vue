<template>
  <ul class="order-list">
    <li
      class="order-list__item vux-1px-b"
      v-for="item in data"
      :key="item.id"
    >
      <a
        class="order-item"
        @click.prevent="go(item.url)"
      >
        <div class="order-item__hd vux-1px-b">
          <div>{{item.orderTitle}}</div>
          <div
            class="order-item__status"
            :class="`order-item__status--${item.orderStatus}`"
          >{{checkStatus(item.orderStatus)}}</div>
        </div>
        <div class="order-item__bd">
          <div class="order-item__src">
            <img :src="item.src" alt="img">
          </div>
          <div class="order-item__content">
            <div>
              <div class="order-item__title">{{item.title}}</div>
              <div
                v-if="item.distance"
                class="order-item__distance"
              >{{item.distance}}</div>
              <div class="pm-auth" v-if="item.auths">
                <div
                  class="pm-auth__item"
                  v-for="(auth,index) in item.auths"
                  :key="index"
                >{{auth}}</div>
              </div>
            </div>
            <div class="order-item__enroll">
              {{item.enroll}}
            </div>
          </div>
          <div class="order-item__suffix">
            <div>
              <span class="order-item__price">{{item.price}}</span>
              <span class="order-item__originPrice">{{item.originPrice}}</span>
            </div>
            <div>
              <a
                class="order-item__btn"
                v-if="showRefund && item.orderStatus === 'done'"
                @click.stop="handleRefund(item)"
              >
                申请退款
              </a>
            </div>
          </div>
        </div>
        <div
          class="order-item__ft vux-1px-t"
          v-if="item.refundReason && item.orderStatus === 'refund'"
        >
          {{item.refundReason}}
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'order-list',
  props: {
    data: {
      type: Array,
      required: true
    },
    showRefund: {
      type: Boolean,
      default: true
    }
  },
  created() {},
  data() {
    return {}
  },
  methods: {
    /**
     * 跳转路由
     * @param {String} url 跳转路径
     */
    go(url) {
      console.log('跳转到某处')
      this.$router.push(url)
    },
    /**
     * 返回对应的文本，可以后续修改
     */
    checkStatus(status) {
      switch (status) {
        case 'done':
          return '已支付'
        case 'wait':
          return '待支付'
        case 'cancel':
          return '已取消'
        case 'refund':
          return '退款中'
        default:
          console.log('not match')
      }
      return ''
    },
    /**
     * 处理退款按钮点击
     * @param {Object} item 当前点击对象
     */
    handleRefund(item) {
      this.$emit('on-refund', item)
    }
  },
}
</script>

<style scoped lang="scss">
.order-list {
  padding: 0.75rem 0 0;
}

.order-item {
  display: block;
  padding: 0 1rem;
  margin-bottom: 0.75rem;
  background: #fff;

  &__hd {
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.94rem;
    font-weight: 600;
  }

  &__bd {
    display: flex;
    padding: 0.75rem 0;
  }

  &__src {
    flex: 0 0 4.625rem;
    > img {
      width: 4.625rem;
      height: 4.625rem;
      border: 2px;
    }
  }

  &__content {
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding-left: 1rem;
    min-width: 0;
  }

  &__title {
    @include ellipsis;
    font-size: 0.94rem;
  }

  &__enroll {
    color: $color-text-secondary;
    font-size: 0.815rem;
  }

  &__distance {
    color: $color-text-weakening;
    font-size: 0.815rem;
  }

  &__suffix {
    flex: 0 0 5.1rem;
    text-align: right;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  &__price {
    font-size: 1rem;
    margin-right: -0.3rem
  }

  &__originPrice {
    font-size: 0.75rem;
    color: $color-text-weakening
  }

  &__btn {
    display: inline-block;
    height: 1.75rem;
    line-height: 1.625rem;
    border: 1px solid #3eba45;
    border-radius: 4px;
    padding: 0 0.5rem;
    color: #3eba45;
    font-size: 0.875rem
  }

  &__ft {
    height: 2.5rem;
    line-height: 2.375rem;
    font-size: 0.815rem;
    color: $color-text-weakening;
  }

  &__status {
    font-size: 0.815rem;
    font-weight: normal;

    &--done {
      color: #3eba45
    }

    &--wait {
      color: #ff6722
    }

    &--refund {
      color: #ff391f
    }

    &--cancel {
      color: $color-text-weakening
    }

  }
}
</style>
