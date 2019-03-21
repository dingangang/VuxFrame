import Vue from 'vue';

// vux的相关组件在这里按需引入

import {
  XHeader,
  ViewBox,
  ToastPlugin,
  ConfirmPlugin,
  TransferDom,
} from 'vux';

Vue.component('xHeader', XHeader);
Vue.component('view-box', ViewBox)

Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

Vue.directive('transfer-dom', TransferDom)
