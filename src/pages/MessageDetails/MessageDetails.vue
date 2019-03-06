<template>
  <div>
    <x-header class="pm-header">消息详情</x-header>
    <div class="pm-message-details">
      <div class="pm-message-details__title">{{messageDetails.title}}</div>
      <div class="pm-message-details__time">{{messageDetails.time}}</div>
      <div class="pm-message-details__ab">{{messageDetails.abstract}}</div>
      <div class="pm-message-details__bd">
        {{messageDetails.desc}}
        <div style="width: 100%;">
          <img :src="messageDetails.src" width="100%" alt="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message-details',
  created() {
    this.getMessageDetails()
  },
  data() {
    return {
      messageID: this.$route.params.id,
      messageDetails: {}
    }
  },
  methods: {
    /**
     * 获取消息详情内容，可以根据路由消息中的参数判别
     * 最后消息的展现方式还需要讨论，
     */
    getMessageDetails() {
      this.axios.get('/get-message-details')
        .then((res) => {
          console.log('消息详情，具体细节还需讨论', res)
          this.messageDetails = res.data
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
}
</script>

<style scoped lang="scss">
.pm-message-details {
  padding: 0.75rem 1rem;

  &__title {
    font-size: 1.5rem;
    line-height: 2.1rem;
    font-weight: 600;
  }

  &__time {
    margin-top: 0.75rem;
    color: $color-text-weakening;
    font-size: 0.815rem;
    line-height: 1.5rem;
  }

  &__ab {
    margin-top: 1.5rem;
    font-size: 0.94rem;
    color: $color-text-weakening;
    line-height: 1.5rem;
  }

  &__bd {
    margin-top: 1.7rem;
    font-size: 1.125rem;
    line-height: 2.125rem;

    img {
      margin: 1rem 0;
    }
  }
}
</style>
