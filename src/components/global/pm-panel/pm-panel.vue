<template>
   <div
    class="pm-panel weui-panel weui-panel_access"
    :class="`pm-panel--type${type}`"
  >
     <div class="weui-panel__bd">
      <slot>
        <template v-if="type === '1'">
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
              <div>
                <h4 class="weui-media-box__title" v-html="item.title"></h4>
                <div class="pm-auth">
                  <div
                    class="pm-auth__item"
                    v-for="(auth,index) in item.auths"
                    :key="index"
                  >{{auth}}</div>
                </div>
              </div>
              <p class="weui-media-box__desc">
                {{textTruncation(item.desc)}}
                <span
                  class="pm-panel__distance text-secondary"
                  v-if="item.distance"
                >{{item.distance}}</span>
                <span
                  class="pm-panel__distance text-main text-small text-bold"
                  v-if="item.price"
                >
                  {{item.price}}
                  <span
                    class="text-default text-secondary text-normal"
                    style="margin-left: -5px;"
                  >{{item.originPrice}}</span></span>
              </p>
            </div>
          </a>
        </template>
        <template v-if="type === '2'">
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
              <div>
                <h4 class="weui-media-box__title" v-html="item.title"></h4>
              </div>
              <div>
                <div class="pm-auth">
                  <div
                    class="pm-auth__item"
                    v-for="(auth,index) in item.auths"
                    :key="index"
                  >{{auth}}</div>
                </div>
                <p class="weui-media-box__desc">
                  {{item.desc}}
                </p>
              </div>
            </div>
          </a>
        </template>
      </slot>
    </div>
    <!-- 放置一个原生panel,用于引入样式文件 -->
    <panel
      style="display:none;"
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
    type: {
      type: String,
      default: '1'
    }
  },
  methods: {
    textTruncation(text) {
      return text.length > 28
        ? `${text.slice(0, 28)}...`
        : text
    },
    go(url) {
      this.$router.push(url)
    },
    onImgError (item, $event) {
      this.$emit('on-img-error', JSON.parse(JSON.stringify(item)), $event)
    },
    onItemClick (item) {
      console.log('item ->>>', item)
      this.$emit('on-click-item', item)
      this.go({ path: `${item.url}/${item.id}` })
    },
  },
}
</script>

<style scoped lang="scss">
.pm-panel {
  &.weui-panel::before {
    content: none;
  }

  .weui-media-box_appmsg {
    align-items: stretch;

    .weui-media-box__hd {
      height: 5.625rem;
      width: 5.625rem;
      line-height: 5.625rem;
    }

    .weui-media-box__bd {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
    }

    .weui-media-box__desc {
      position: relative;
      line-height: 1.4;
    }
  }

  &__distance {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

.pm-auth {
  margin: 0 0.5rem 0.3rem 0;
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
    color: #e8541e;
  }
}

.pm-panel.pm-panel--type2 {
  .weui-media-box_appmsg {
    .weui-media-box__hd {
      height: 5.625rem;
      width: 8.75rem;
      line-height: 5.625rem;
    }

    .weui-media-box__title {
      @include line-clamp();

      white-space: normal;
    }
  }
}
</style>
