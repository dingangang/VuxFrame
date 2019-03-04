<template>
  <div style="height:100%">
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

export default {
  name: 'App',
  components: {
    Loading,
    TemplateIndex
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
    }),
  },
};
</script>

<style lang="less">
  @import "~vux/src/styles/reset.less";
  @import '~vux/src/styles/1px.less';
</style>

