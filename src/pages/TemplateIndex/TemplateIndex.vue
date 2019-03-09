<template>
  <div class="pm-index-page">
    <slot></slot>
    <tabbar class="pm-tabbar" v-show="showTabbar && role === 0">
      <tabbar-item
        :selected="currentSelected === 0"
        @on-item-click="handleTabbarClick(0)"
        link="/index"
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
        @on-item-click="handleTabbarClick(1)"
        link="/consultation-page"
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
        @on-item-click="handleTabbarClick(2)"
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
        @on-item-click="handleTabbarClick(3)"
      >
        <i
          slot="icon"
          class="icon"
          :class="`icon-amine_${currentSelected === 3 ? 'selected': 'normal'}`"
        ></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    <tabbar class="pm-tabbar" v-show="showTabbar && role === 1">
      <tabbar-item
        :selected="currentSelected === 0"
        @on-item-click="handleTabbarClick(0)"
        link="/index"
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
        @on-item-click="handleTabbarClick(1)"
        link="/consultation-page"
      >
        <i
          slot="icon"
          class="icon"
          :class="`icon-achart_${currentSelected === 1 ? 'selected': 'normal'}`"
        ></i>
        <span slot="label">签到</span>
      </tabbar-item>
      <tabbar-item
        show-dot
        :selected="currentSelected === 2"
        @on-item-click="handleTabbarClick(2)"
        link="/consultation-page"
      >
        <i
          slot="icon"
          class="icon"
          :class="`icon-aquestion_${currentSelected === 2 ? 'selected': 'normal'}`"
        ></i>
        <span slot="label">答疑</span>
      </tabbar-item>
      <tabbar-item
        :selected="currentSelected === 3"
        @on-item-click="handleTabbarClick(3)"
        link="/component/demo"
      >
        <i
          slot="icon"
          class="icon"
          :class="`icon-apractice_${currentSelected === 3 ? 'selected': 'normal'}`"
        ></i>
        <span slot="label">联系</span>
      </tabbar-item>
      <tabbar-item
        badge="2"
        :selected="currentSelected === 4"
        @on-item-click="handleTabbarClick(4)"
        link="/user-center"
      >
        <i
          slot="icon"
          class="icon"
          :class="`icon-amine_${currentSelected === 4 ? 'selected': 'normal'}`"
        ></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'template-index',
  created() {},
  data() {
    return {}
  },
  computed: {
    showTabbar() {
      return this.$route.meta && this.$route.meta.showTabbar
    },
    ...mapState({
      currentSelected: state => state.currentTabbarIndex,
      /**
       * 请明确制定role的值
       * 这里暂定
       * 0：家长
       * 1：学生
       */
      role: state => state.role
    })
  },
  methods: {
    /**
     * 处理tabbar点击事件
     */
    handleTabbarClick(tabbarIndex) {
      this.$store.commit('updateTabbrIndex', tabbarIndex)
    }
  },
}
</script>
