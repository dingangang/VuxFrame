<template>
  <div class="pm-search-item">
    <div class="pm-search-item__title vux-1px-b">
    {{institution.title}}
    <div class="pull-right pm-search-item__distance">{{institution.distance}}</div>
    </div>
    <pm-panel
      :list="institution.courses"
      @on-img-error="onImgError"
    ></pm-panel>
    <div
      class="pm-search-item__lm"
      @click="handleLoarMore(institution)"
    >加载更多</div>
  </div>
</template>

<script>
export default {
  name: 'pm-search-item',
  props: {
    institution: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    /**
     * 图片错误
     */
    onImgError(param) {
      this.$emit('on-img-error', param)
    },
    /**
     * 加载更多
     * @param {Object} institution 当前机构对象
     */
    handleLoarMore(institution) {
      this.$emit('load-more', institution)
    }
  }
}
</script>

<style scoped lang="scss">
.pm-search-item {
  margin-bottom: 0.75rem;
  &__title{
    margin: 0 1rem -10px;
    line-height: 2.4rem;
    background: #fff;
    font-weight: 800;
  }
  &__distance{
    color: $color-text-secondary;
    font-weight: normal;
  }
  &__lm{
    background: #fff;
    text-align: center;
    line-height: 2.4rem;
    color: $color-text-weakening
  }
}
</style>
