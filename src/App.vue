<template>
  <div>
    <loading v-model="isLoading"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import { Loading } from 'vux';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Loading,
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
    }),
  },
};
</script>

<style lang="less">
  @import "~vux/src/styles/reset.less";
  @import '~vux/src/styles/1px.less';
</style>

