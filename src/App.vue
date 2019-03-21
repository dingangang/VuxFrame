<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <loading v-model="isLoading"></loading>
      <router-view></router-view>
    </view-box>
  </div>
</template>

<script>
import { Loading } from 'vux';

export default {
  name: 'App',
  created() {
    this.getTokenInfo()
  },
  components: {
    Loading,
  },
};
</script>

<style lang="less">
  @import "~vux/src/styles/reset.less";
  @import '~vux/src/styles/1px.less';
</style>

