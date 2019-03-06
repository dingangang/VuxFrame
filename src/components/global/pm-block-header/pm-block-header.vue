<template>
  <div class="pm-block-header">
    <span class="pm-block-header__label">{{label}}</span>
    <a
      v-if="link"
      class="pm-block-header__suffix pull-right"
      @click="handleSuffixClick"
    >
      {{suffix}}
      <i class="icon icon-into"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'pm-block-header',
  props: {
    label: {
      type: String,
    },
    suffix: {
      type: String,
      default: '更多',
    },
    link: {
      type: String,
    },
  },
  methods: {
    /**
     * 处理'更多'点击事件
     */
    handleSuffixClick() {
      console.log('这里选择在内部跳转链接')
      this.$router.push(this.link)
    },
  },
}
</script>

<style scoped lang="scss">
.pm-block-header {
  padding: 0 1rem;
  &__label {
    font-size: 1rem;
    font-weight: 800;
    line-height: 1.41
  }
  &__suffix {
    color: $color-text-secondary;
  }

}
</style>
