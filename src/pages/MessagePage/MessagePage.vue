<template>
  <div class="message-page">
    <x-header
      class="pm-header"
      title="slot:overwrite-title">
      <div class="pm-title-tab" slot="overwrite-title">
        <button-tab>
          <button-tab-item
            @on-item-click="handleTitleTabClick"
            selected
          >
            <badge
              v-if="messageReadBadge && messageReadBadge > 0"
              :text="messageReadBadge"
            ></badge>
            已读消息
          </button-tab-item>
          <button-tab-item
            @on-item-click="handleTitleTabClick"
          >
            <badge
              v-if="messageUnreadBadge && messageUnreadBadge > 0"
              :text="messageUnreadBadge"
            ></badge>
            未读消息
          </button-tab-item>
        </button-tab>
      </div>
    </x-header>
    <div class="pm-tab">
      <div class="pm-tab-pane" v-if="currentTab === 0">
        <div
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="busy"
          infinite-scroll-distance="10"
        >
          <pm-message-list
            :messages="messageRead"
            @on-item-click="handleMessageItemClick"
          ></pm-message-list>
          <div
            class="text-center text-weakening"
            style="line-height:2.4rem;"
          >加载更多</div>
        </div>
      </div>
      <div class="pm-tab-pane" v-if="currentTab === 1">
        <div
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="busy"
          infinite-scroll-distance="10"
        >
          <pm-message-list
            :messages="messageUnread"
            @on-item-click="handleMessageItemClick"
          ></pm-message-list>
          <div
            class="text-center text-weakening"
            style="line-height:2.4rem;"
          >加载更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message-page',
  created() {
    this.getMessagesData()
  },
  mounted() {
    setTimeout(() => {
      this.scrollLock = false
    }, 1500);
  },
  data() {
    return {
      scrollLock: true,
      currentTab: 0,
      messageRead: [],
      messageReadBadge: 1,
      messageUnread: [],
      messageUnreadBadge: 99,
    }
  },
  methods: {
    /**
     * 加载更多
     */
    loadMore() {
      if (!this.scrollLock) {
        // 避免页面加载时调用此方法
        console.log('调用滚动加载，具体页面请根据currentTab判定')
      }
    },
    /**
     * 获取消息
     */
    getMessagesData() {
      this.axios.get('/get-messagesdata')
        .then((res) => {
          console.log('获取消息,badge请自行处理', res)
          this.messageRead = res.data.messageRead
          this.messageUnread = res.data.messageUnread
        })
        .catch((err) => {
          console.error(err)
        })
    },
    /**
     * 处理标题tab点击事件
     * @param {Number} index 点击tab的index
     */
    handleTitleTabClick(index) {
      this.currentTab = index
    },
    /**
     * 处理消息列表中项目的点击路由跳转
     * param
     */
    handleMessageItemClick({ url, id }) {
      console.log(url, id)
      this.$router.push({ path: `${url}/${id}` })
    }
  },
}
</script>

<style scoped lang="scss">
.pm-title-tab {
  height: 40px;

  .vux-button-group {
    justify-content: space-around;

    .vux-button-group-current {
      background: transparent;
      color: #3eba45;
      border-bottom: 1px solid #3eba45;
    }
  }

  .vux-button-tab-item {
    position: relative;
    flex: 0;
    height: 40px;
    line-height: 40px;
    border-radius: 0;
    color: $color-text-secondary;

    &::after {
      content: none;
    }

    .vux-badge {
      position: absolute;
      right: -1.3125rem;
      top: 2px;

      &.vux-badge-single {
        right: -0.6875rem;
      }
    }
  }
}
</style>
