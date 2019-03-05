<template>
  <div class="pm-index-page">
    <slot></slot>
    <tabbar class="pm-tabbar" v-show="showTabbar">
      <tabbar-item
        :selected="currentSelected === 0"
        @on-item-click="currentSelected = 0"
      >
        <i
          slot="icon"
          class="icon"
          :class="`icon-ahome_${currentSelected === 0 ? 'selected': 'normal'}`"
        ></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item
        show-dot
        :selected="currentSelected === 1"
        @on-item-click="currentSelected = 1"
      >
        <i
          slot="icon"
          class="icon"
          :class="`icon-aconsult_${currentSelected === 1 ? 'selected': 'normal'}`"
        ></i>
        <span slot="label">咨询</span>
      </tabbar-item>
      <tabbar-item
        :selected="currentSelected === 2"
        @on-item-click="currentSelected = 2"
        link="/component/demo"
      >
        <i
          slot="icon"
          class="icon"
          :class="`icon-aback_${currentSelected === 2 ? 'selected': 'normal'}`"
        ></i>
        <span slot="label">反馈</span>
      </tabbar-item>
      <tabbar-item
        badge="2"
        :selected="currentSelected === 3"
        @on-item-click="currentSelected = 3"
      >
        <i
          slot="icon"
          class="icon"
          :class="`icon-amine_${currentSelected === 3 ? 'selected': 'normal'}`"
        ></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
export default {
  name: 'template-index',
  created() {},
  data() {
    return {
      currentSelected: 0
    }
  },
  computed: {
    showTabbar() {
      return this.$route.meta && this.$route.meta.showTabbar
    }
  }
}
</script>

<style scoped>

</style>
