<template>
  <ul class="pm-scroll-img">
    <li
      v-for="item in imgList"
      :key="item.id"
      class="pm-scroll-img__item"
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
    width: 10rem;
    height: 5.725rem;
    margin: 0.75rem 0 1rem 1rem;
    padding: 1.6rem 0.75rem;
    // background: rgba(0,0,0,0.4)
    &:last-child {
      margin-right: 1rem;
    }
  }
  &__title,
  &__subTitle {
    overflow: hidden;
    text-overflow: ellipsis
  }
  &__title {
    font-size:1rem;
    color: #fff;
    z-index: 2
  }
  &__subTitle {
    font-size: 0.7825rem;
    color: #fff;
    z-index: 2
  }
  &__img {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    z-index: -1
  }
}
</style>
