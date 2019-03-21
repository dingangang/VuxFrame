<template>
  <div>
    写在global文件夹下的组件会自动全局导入。
    <div>
      <slot>
        <template v-if="type === 1">
          type1时候的配置
        </template>
        <template v-if="type === 2">
          type2时候的配置
        </template>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pm-component',
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  created() {},
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
