<template>
   <div class="pm-panel weui-panel weui-panel_access">
     <div class="weui-panel__bd">
      <a
        v-for="item in list"
        :key="item.id"
        @click.prevent="onItemClick(item)" class="weui-media-box weui-media-box_appmsg"
      >
        <div class="weui-media-box__hd" v-if="item.src">
          <img
            class="weui-media-box__thumb"
            :src="item.src"
            @error="onImgError(item, $event)"
            alt="img">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-html="item.title"></h4>
          <div class="pm-auth">
            <div
              class="pm-auth__item"
              v-for="(auth,index) in item.auths"
              :key="index"
            >{{auth}}</div>
          </div>
          <p class="weui-media-box__desc">
            {{textTruncation(item.desc)}}
            <span class="pm-panel__distance">{{item.distance}}km</span>
          </p>
        </div>
      </a>
    </div>
    <!-- 放置一个原生panel,用于引入样式文件 -->
    <panel
      style="display:none"
    ></panel>
  </div>
</template>

<script>
export default {
  name: 'pm-panel',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    textTruncation(text) {
      return `${text.slice(0, 28)}...`
    },
    go(url) {
      this.$router.push(url)
    },
    onImgError (item, $event) {
      this.$emit('on-img-error', JSON.parse(JSON.stringify(item)), $event)
    },
    onItemClick (item) {
      this.$emit('on-click-item', item)
      this.go(item.url)
    },
  },
}
</script>

<style scoped lang="scss">
.pm-panel {
  .weui-media-box_appmsg{
    align-items: stretch;
    .weui-media-box__hd {
      height: 5.625rem;
      width: 5.625rem;
      line-height: 5.625rem;

    }
    .weui-media-box__desc {
      position: relative;
    }
  }
  &__distance {
    position: absolute;
    right: 0;
    bottom: 0;
    color: $color-text-secondary;
  }
}
.pm-auth {
  margin: 0.3rem 0.5rem 0.3rem 0;
  overflow: hidden;
  white-space: nowrap;
  &__item {
    display: inline-block;
    background: rgba(233, 90, 39, 0.1);
    margin-right: 0.37rem;
    border-radius: 2px;
    line-height: 1.125rem;
    padding: 0 0.3rem;
    font-size: 0.75rem;
    color: #E8541E
  }
}
</style>
