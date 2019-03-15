<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <loading v-model="isLoading"></loading>
      <template-index>
        <router-view></router-view>
      </template-index>
    </view-box>
  </div>
</template>

<script>
import { Loading } from 'vux';
import { mapState } from 'vuex';
import TemplateIndex from '@/pages/TemplateIndex/index'
import store from '@/store'
export default {
  name: 'App',
  created() {
    this.getTokenInfo()
  },
  components: {
    Loading,
    TemplateIndex
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      role: state => state.role
    }),
  },
  methods: {
    // 接收url后的数据
    getTokenInfo() {
      const token = this.getUrlKey('token'); // token
      const model = this.getUrlKey('model'); // 家长还是学生0:家长；1:学生
      if (token != null) {
        localStorage.setItem('token', token);
        store.commit('updateRole',model==null?0:model)
      }
    },

    /**
    * 获取地址栏参数
    */
    /* eslint-disable */
   getUrlKey: function (name) {
     return decodeURIComponent((new RegExp(`[?|&]${name}=` + `([^&;]+?)(&|#|;|$)`).exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
    }
  }
};
</script>

<style lang="less">
  @import "~vux/src/styles/reset.less";
  @import '~vux/src/styles/1px.less';
</style>

