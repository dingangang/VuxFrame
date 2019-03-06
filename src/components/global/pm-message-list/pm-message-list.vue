<template>
  <ul class="pm-message-list">
    <li
      v-for="message in messages"
      :key="message.id"
      class="vux-1px-b"
      @click="handleClick(message.url, message.id)"
    >
      <div class="pm-message-item">
        <div class="pm-message-item__title">{{message.title}}</div>
        <div class="pm-message-item__bd vux-1px-t">
          <div class="pm-message-item__ct">
            <div class="pm-message-item__desc">{{message.desc}}</div>
            <div class="pm-message-item__time"><i class="icon icon-time"></i> {{message.time}}</div>
          </div>
          <div class="pm-message-item__img">
            <img :src="message.src" alt="image">
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'pm-message-list',
  props: {
    messages: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    /**
     * 跳转路由
     * @param {String} url 跳转的路由
     * @param {String} id id参数
     */
    handleClick(url, id) {
      this.$emit('on-item-click', { url, id })
    }
  },
}
</script>

<style scoped lang="scss">
.pm-message-list {
  background: $color-bg-card;

  > li {
    background: #fff;
  }
}

.pm-message-item {
  margin: 0 1rem 1rem;
  background: #fff;

  &__title {
    font-size: 1rem;
    color: $color-text-main;
    line-height: 2.4rem;
  }

  &__bd {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
  }

  &__img {
    flex: 0 0 5.625rem;

    > img {
      width: 5.625rem;
      border-radius: 2px;
    }
  }

  &__ct {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    font-size: 0.815rem;
  }

  &__desc {
    @include line-clamp(3);

    padding-right: 1rem;
  }

  &__time {
    color: $color-text-weakening;
    font-size: 0.815rem;
  }
}
</style>
