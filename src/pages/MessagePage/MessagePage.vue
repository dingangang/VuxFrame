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
        <pm-message-list
          :messages="messageRead"
        ></pm-message-list>
      </div>
      <div class="pm-tab-pane" v-if="currentTab === 1">
        <pm-message-list
          :messages="messageUnread"
        ></pm-message-list>
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
  data() {
    return {
      currentTab: 0,
      messageRead: [],
      messageReadBadge: 1,
      messageUnread: [],
      messageUnreadBadge: 99,
    }
  },
  methods: {
    /**
     * 获取消息
     */
    getMessagesData() {
      this.axios.get('/get-messagesdata')
        .then((res) => {
          console.log('获取消息,badge请自行处理', res)
          this.messageRead = res.data.messageRead
          this.messageUnreadBadge = res.data.messageUnreadBadge
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
    }
  },
}
</script>

<style scoped lang="scss">
.pm-title-tab{
  .vux-button-group {
    justify-content: space-around;
    .vux-button-group-current {
      background: transparent;
      color: #3EBA45;
      border-bottom: 1px solid #3EBA45
    }
  }
  .vux-button-tab-item {
    position: relative;
    flex: 0;
    border-radius: 0;
    color: $color-text-secondary;
    &:after {
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
