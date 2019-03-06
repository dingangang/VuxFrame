<template>
  <ul class="pm-scroll-img">
    <slot>
      <template v-if="type === 'img'">
        <li
          v-for="item in imgList"
          :key="item.id"
          class="pm-scroll-img__item"
          :class="`pm-scroll-img__item--${itemSize}`"
          @click="go(item.link)"
        >
          <p class="pm-scroll-img__title">{{item.title}}</p>
          <p class="pm-scroll-img__subTitle">{{item.subTitle}}</p>
          <img
            :src="item.src"
            alt="img"
            class="pm-scroll-img__img"
          >
        </li>
      </template>
      <template v-if="type === 'video'">
        <li
          v-for="item in imgList"
          :key="item.id"
          class="pm-scroll-img__item"
          :class="`pm-scroll-img__item--${itemSize}`"
          @click="linkVideo(item.link, item.videoSrc, item.resourceType)"
          style="background-color: rgba(0, 0, 0, 0.4);
    border-radius: 8px;"
        >
          <div class="pm-scroll-img__videoMask">
            <i class="icon icon-detail_play"></i>
            <img
              :src="item.src"
              alt="img"
              class="pm-scroll-img__img"
            >
          </div>
        </li>
      </template>
    </slot>
  </ul>
</template>

<script>
export default {
  name: 'scroll-img',
  props: {
    imgList: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'img'
    },
    itemSize: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    /**
     * 跳转到特定路由
     * @param {String} link 跳转的路由
     */
    go(link) {
      console.log('link', link)
      this.$router.push(link)
    },
    /**
     * 跳转到特定路由
     * @param {String} link 跳转的路由
     */
    linkVideo(link, videoSrc, resourceType) {
      console.log('link', link)
      this.$router.push({ name: link, params: { videoSrc: videoSrc, resourceType: resourceType } })
    },
  },
}
</script>

<style scoped lang="scss">
.pm-scroll-img {
  overflow-x: scroll;
  white-space: nowrap;
  min-height: 5rem;

  &__item {
    position: relative;
    display: inline-block;
    margin: 0.75rem 0 1rem 1rem;
    padding: 1.6rem 0.75rem;
    // background: rgba(0,0,0,0.4)
    &:last-child {
      margin-right: 1rem;
    }

    &--default {
      width: 10rem;
      height: 5.725rem;
    }

    &--tiny {
      width: 6rem;
      height: 6rem;
    }
  }

  &__title,
  &__subTitle {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__title {
    font-size: 1rem;
    color: #fff;
    z-index: 2;
  }

  &__subTitle {
    font-size: 0.7825rem;
    color: #fff;
    z-index: 2;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    z-index: -1;
  }

  &__videoMask {
    text-align: center;
    line-height: 3rem;
  }
}
</style>
